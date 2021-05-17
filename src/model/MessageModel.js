import Parse from 'parse';

export default class MessageModel {

    #parseUser  // storing the parseUser object as a private field (might need to use it)
    constructor(parseUser) {
        this.id = parseUser.id;
        this.title = parseUser.get("title");
        this.details = parseUser.get("details");
        this.priority = parseUser.get("priority");
        this.userId = parseUser.get("userId");
        this.read = parseUser.get("read");
        this.comment = parseUser.get("comment");
        this.buildingId = parseUser.get("buildingId");
        this.#parseUser = parseUser;
    }
}

