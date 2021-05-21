import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import './MessagePage.css'
import image from '../../asserts/messages.jpg';
import { Redirect } from 'react-router';
import Filter from '../../components/Filter/Filter';
import MessageCard from '../../components/MessageCard/MessageCard';
import CreateModal from '../../components/Modal/CreateModal'
import Utils from '../../shared/Utils';
import MessageModel from '../../model/MessageModel';
import Parse from 'parse';
import MessageAccordion from '../../components/MessageAccordion/MessageAccordion';
import RemoveModal from '../../components/Modal/RemoveModal';


function MessagePage({ activeUser }) {

    const [messages, setMessages] = useState([]);
    const [filterText, setFilterText] = useState("");
    const [showModalNewMessage, setShowModalNewMessage] = useState(false);
    const [showModalEditMessage, setShowModalEditMessage] = useState(false);
    const [showModalRemoveMessage, setShowModalRemoveMessage] = useState(false);
    const [showCreateError, setShowCreateError] = useState(false);
    const [showRemoveError, setShowRemoveError] = useState(false);
    const [showEditError, setShowEditError] = useState(false);
    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");
    const [priority, setPriority] = useState(1);
    const [img, setImg] = useState(undefined);
    const [messageForDel, setMessageForDel] = useState(undefined);
    const [messageForEdit, setMessageForEdit] = useState(undefined);
    const [commetText, setCommentText] = useState("");

    const isAdminUser = activeUser && activeUser.role == 0 ? true : false;
    const priorityOptions = {
        IMPORTANT: "important",
        INFO: "info"
    }

    const messagesCards = messages !== undefined ? messages.map((message, index) => <MessageCard key={index.toString()} message={message} onEnter={newComment} commentText={commetText} onTextChange={(text) => setCommentText(text)}></MessageCard>) : [];

    useEffect(() => {
        if (activeUser) {
            const Message = Parse.Object.extend('Message');
            const query = new Parse.Query(Message);

            const BuildingId = Parse.Object.extend("BuildingId");
            const myBuildingId = new BuildingId();
            myBuildingId.id = activeUser.buildingId.id;

            // Just the objectId is enough to compare the object
            query.equalTo("buildingId", myBuildingId);

            query.find().then(results => {
                // console.log(`Users found: ${JSON.stringify(results)}`);
                setMessages(results.map(result => new MessageModel(result)));
            });
        }
    }, [])

    if (!activeUser) {
        return <Redirect to="/" />
    }

    function filter() {
        return filterText && filterText !== "" ? messagesCards.filter((card) => card.props.message.title.toLowerCase().includes(filterText.toLowerCase()) ||
            card.props.message.details.toLowerCase().includes(filterText.toLowerCase())) : messagesCards;
    }

    function newComment(messageId, comment) {
        console.log("comment: " + comment + "for message: " + messageId);
        setCommentText("");
        const Message = Parse.Object.extend('Message');
        const query = new Parse.Query(Message);
        // let d = new Date();
        // const n = d.toLocaleString();
        query.get(messageId).then((object) => {
            debugger
            let messageComments = object.get("comments");
            messageComments.push({userId: activeUser.id, userName: activeUser.name, userImg: activeUser.img, dateCreated: Date.now(), userComments: comment });
            // let userIndex = messageComments.findIndex((c => c.userId === activeUser.id));
            // if (userIndex!==undefined && userIndex!==-1) {
            //     messageComments[userIndex].userComments.push(comment);
            //     messageComments[userIndex].timestamp.push(Date.now());
            // }
            // else {
            //     messageComments.push({userId: activeUser.id, timestamp: [Date.now()], userComments: [comment] });
            // }
            object.set('comments',messageComments);
            object.save().then((response) => {
                //here should call setMessages for render
                console.log('Updated Message', response);
            }, (error) => {
                console.error('Error while updating Message', error);
            });
        });
    }

    function markedAsRead(messageId) {
        const Message = Parse.Object.extend('Message');
        const query = new Parse.Query(Message);
        // here you put the objectId that you want to update
        query.get(messageId).then((object) => {
            if (!object.get("readBy").includes(activeUser.id)) {
                object.set('readBy', object.get("readBy").concat(activeUser.id));
                object.save().then((response) => {
                    //here should call setMessages for render
                    console.log('Updated Message', response);
                }, (error) => {
                    console.error('Error while updating Message', error);
                });
            }
        });
    }

    // function addComment(messageId, comment) {
    //     const Message = Parse.Object.extend('Message');
    //     const query = new Parse.Query(Message);
    //     // here you put the objectId that you want to update
    //     query.get(messageId).then((object) => {
    //         object.set('comments', [{userId: activeUser.id, userComments: [comment]}]);
    //         object.save().then((response) => {
    //             //here should call setMessages for render
    //             console.log('Updated Message', response);
    //         }, (error) => {
    //             console.error('Error while updating Message', error);
    //         });
    //     });
    // }


    function preperForMessageEdit(id) {
        setMessageForEdit(id);
        setShowModalEditMessage(true);
    }

    function preperForMessageDelete(id) {
        console.log("about to delete message " + id);
        setMessageForDel(id);
        setShowModalRemoveMessage(true);
    }

    function handleDelete() {
        const Message = Parse.Object.extend('Message');
        const query = new Parse.Query(Message);
        // here you put the objectId that you want to delete
        query.get(messageForDel).then((object) => {
            object.destroy().then((response) => {
                console.log('Deleted Message', response);
                //need to find message in messages by id
                //setMessages(messages => messages.slice(0, index).concat(messages.slice(index + 1, messages.length)));
                handleClose(Utils.operations.DELETE);
            }, (error) => {
                console.error('Error while deleting Message', error);
            });
        });
    }

    function handleCreate() {
        console.log("Create new message");
        const Message = Parse.Object.extend('Message');
        const myNewObject = new Message();

        myNewObject.set('title', title);
        myNewObject.set('details', details);
        myNewObject.set('priority', priority);
        myNewObject.set('readBy', []);
        myNewObject.set('comments', []);
        myNewObject.set('buildingId', activeUser.buildingId);

        myNewObject.save().then(
            (result) => {
                setMessages(messages => messages.concat(new MessageModel(result)));
                console.log('Message created', result);
                handleClose(Utils.operations.CREATE);
            },
            (error) => {
                console.error('Error while creating Message: ', error);
            }
        );
    }

    function handleClose(operation) {
        switch (operation) {
            case Utils.operations.CREATE:
                setShowModalNewMessage(false);
                setShowCreateError(false);//Clear also errors
                setTitle("");
                setDetails("");
                setPriority(1);
                break;
            case Utils.operations.UPDATE:
                setShowModalEditMessage(false);
                setShowEditError(false);
                setMessageForEdit(undefined);
                setTitle("");
                setDetails("");
                setPriority(1);
                break;
            case Utils.operations.DELETE:
                setShowModalRemoveMessage(false);
                setShowRemoveError(false);
                setMessageForDel(undefined);
                break;
        }
    }

    const createFormAtt = [
        {
            controlId: "formBasicTitle",
            label: "Message Title",
            type: "text",
            placeholder: "Please add message title",
            isRequired: true,
            value: title,
            function: (text) => setTitle(text)
        },
        {
            controlId: "formBasicDetails",
            label: "Message Details",
            type: "text",
            placeholder: "Please add message description",
            isRequired: false,
            value: details,
            function: (text) => setDetails(text)
        },
        {
            controlId: "formBasicPriority",
            label: "Message Priority",
            type: "select",
            options: [priorityOptions.IMPORTANT, priorityOptions.INFO],
            isRequired: true,
            value: priority,
            function: (text) => { text == priorityOptions.IMPORTANT || text == "0" ? setPriority(0) : setPriority(1) }
        },
        // {
        //     controlId: "",
        //     label: "",
        //     type: "",
        //     placeholder: "",
        //     isRequired: true,
        //     value: "",
        //     function: ""
        // }
    ]

    return (
        <Container className="p-message">
            {/* <img  className="p-message-img" src={image}></img> */}
            <Filter
                icon={<i className="bi bi-funnel-fill"></i>}
                placeholder="Filter by text in title and details"
                filterText={filterText}
                filterTextChange={(text) => setFilterText(text)}
            />
            {isAdminUser &&
                <div className="new-message">
                    <Button variant="link" onClick={() => setShowModalNewMessage(true)}><i className="bi bi-plus-circle-fill" style={{ color: 'lightskyblue' }}></i> Add New Message</Button>
                </div>
            }
            <CreateModal show={showModalNewMessage} handleClose={handleClose} modalTitle="Add New Message" showError={showCreateError} error="Unable to create new message" handleSubmit={handleCreate} formAttributes={createFormAtt}></CreateModal>
            {isAdminUser &&
                <MessageAccordion cards={filter()} onDelete={preperForMessageDelete} onEdit={preperForMessageEdit} onRead={undefined} icon={[<i class="bi bi-info-circle-fill" style={{ color: 'red' }}></i>, <i class="bi bi-info-circle-fill" style={{ color: 'lightskyblue' }}></i>]}></MessageAccordion>
            }
            {!isAdminUser &&
                <MessageAccordion cards={filter()} onDelete={undefined} onEdit={undefined} onRead={markedAsRead} userId={activeUser.id} icon={[<i class="bi bi-info-circle-fill" style={{ color: 'red' }}></i>, <i class="bi bi-info-circle-fill" style={{ color: 'lightskyblue' }}></i>, <i class="bi bi-chat-left-text-fill"></i>]}></MessageAccordion>
            }
            <RemoveModal show={showModalRemoveMessage} handleClose={handleClose} modalTitle="Remove Message" showError={showRemoveError} error="Unable to remove message" handleSubmit={handleDelete} text="Are you sure you want to delete message?"></RemoveModal>
        </Container>
    );
}

export default MessagePage;