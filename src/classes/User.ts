import {DataStoreInterface, UserInterface} from "./interface.ts";

class User implements UserInterface {
    addUser(
        user: { firstName: string; lastName: string; email: string },
        datastore: DataStoreInterface): boolean {
        this._user = user;
        this._datastore = datastore;
        return true;
    }

    getUserByID(id: number): UserInterface {
        this._id = id;
        // const dummyId = id;
        return new User();
    }
}
export default User;