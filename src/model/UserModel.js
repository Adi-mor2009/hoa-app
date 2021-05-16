import Parse from 'parse';

export default class UserModel {
    //Example while using json
    // #pwd;   // pwd is a private property
    // constructor(plainUser) {
    //     this.id = plainUser.id;
    //     this.name = plainUser.name;
    //     this.email = plainUser.email;
    //     this.apartement = plainUser.apartement;
    //     this.role = plainUser.role;
    //     this.#pwd = plainUser.pwd;
    // }

    // login(email, pwd) {
    //     return email.toLowerCase() === this.email.toLowerCase() && pwd === this.#pwd;
    // }

    #parseUser  // storing the parseUser object as a private field (might need to use it)
    constructor(parseUser) {
        this.id = parseUser.id;
        this.name = parseUser.get("name");
        this.apartement = parseUser.get("apartement");
        this.email = parseUser.get("email") ? parseUser.get("email") : parseUser.get("username");
        this.role = parseUser.get("role");
        this.buildingId = parseUser.get("buildingId");
        this.#parseUser = parseUser;
    }

    // login is an async function that tries to login the user given the email and password.
    // If successfull it will resolve the promise with a UserModel instance of the logged in user
    // If unsuccessfull it will reject the promise with an appropriate error
    static async login(email, pwd) {
        const parseUser = await Parse.User.logIn(email, pwd);
        const activeUser = new UserModel(parseUser);
        return activeUser;
    }

    static async remove(id) {
        const User = new Parse.User();
        const query = new Parse.Query(User);

        const userToDel = await query.get(id);
        await userToDel.destroy();
    }

    static async get(id) {
        const User = new Parse.User();
        const query = new Parse.Query(User);

        const parseUser = await query.get(id);
        const user = new UserModel(parseUser);
        return user;
    }

    static async update(id, email, name, apartement) {
        const User = new Parse.User();
        const query = new Parse.Query(User);

        const userToEdit = await query.get(id);
        userToEdit.set('username', email);
        userToEdit.set('email', name);
        userToEdit.set('apartement', apartement);

        await userToEdit.save();
    }

    static logout() {
        Parse.User.logOut();
    }

    static activeUser() {
        return Parse.User.current();
    }
}

