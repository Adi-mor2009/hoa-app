import Parse from 'parse';

export default class MessageModel {

    #parseUser  // storing the parseUser object as a private field (might need to use it)
    constructor(parseUser) {
        this.id = parseUser.id;
        this.title = parseUser.get("title");
        this.details = parseUser.get("details");
        this.priority = parseUser.get("priority");
        this.userId = parseUser.get("userId");
        this.readBy = parseUser.get("readBy");
        this.comments = parseUser.get("comments");
        this.buildingId = parseUser.get("buildingId");
        if(parseUser.get("img")){
            this.img = parseUser.get("img").url();
        }
        this.#parseUser = parseUser;
    }
}

