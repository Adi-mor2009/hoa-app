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

    const isAdminUser = activeUser && activeUser.role == 0 ? true : false;
    const priorityOptions = {
        IMPORTANT: "important",
        INFO: "info"
    }

    const messagesCards = messages !== undefined ? messages.map((message, index) => <MessageCard key={index.toString()} message={message}></MessageCard>) : [];

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


    function preperForMessageEdit(id) {
        setMessageForEdit(id);
        setShowModalEditMessage(true);
    }

    function preperForMessageDelete(id) {
        setMessageForDel(id);
        showModalRemoveMessage(true);
    }

    function handleCreate() {
        console.log("Create new message");
        const Message = Parse.Object.extend('Message');
        const myNewObject = new Message();

        myNewObject.set('title', title);
        myNewObject.set('details', details);
        myNewObject.set('priority', priority);
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
                <MessageAccordion cards={filter()} onDelete={preperForMessageDelete} onEdit={preperForMessageEdit} icon={[<i class="bi bi-info-circle-fill" style={{ color: 'red' }}></i>, <i class="bi bi-info-circle-fill" style={{ color: 'lightskyblue' }}></i>]}></MessageAccordion>
            }
            {!isAdminUser &&
                <MessageAccordion cards={filter()} onDelete={undefined} onEdit={undefined} icon={[<i class="bi bi-info-circle-fill" style={{ color: 'red' }}></i>, <i class="bi bi-info-circle-fill" style={{ color: 'lightskyblue' }}></i>]}></MessageAccordion>
            }
            {/* icon={card.props.message.priority==0 ? <i class="bi bi-info-circle-fill" style={{ color: 'red' }}></i>: <i class="bi bi-info-circle-fill" style={{ color: 'lightskyblue' }}></i>} */}
        </Container>
    );
}

export default MessagePage;