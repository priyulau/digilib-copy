import DataStoreInterface from "./DataStoreInterface.ts";

//needs to implement methods from this interface
export default class Supabase implements DataStoreInterface {
    loginWithEmail(input: { email: string; password: string }): boolean {
        return false;
    }

    signup(input: { email: string; password: string }): boolean {
        return false;
    }

}