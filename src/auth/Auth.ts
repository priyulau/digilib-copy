import {AuthInterface} from "./AuthInterface.ts";
import {DataStoreInterface} from "../classes/interface.ts";

class Auth implements AuthInterface {
    login(user: { email: string; password: string }, dataStore: DataStoreInterface): boolean {
        return false;
    }
    register(user: { email: string; password: string; username: string }, dataStore: DataStoreInterface): boolean {
        const loggedIn: boolean = dataStore.signup({});
        return dataStore.signup(user);
    }
}

export default Auth;