import DataStoreInterface from "./DataStoreInterface.ts";
import {supabase} from "../config/supabase.ts";

//needs to implement methods from this interface
export default class Supabase implements DataStoreInterface {
    loginWithEmail(input: { email: string; password: string }): boolean {
        return false;
    }

    signup(input: { email: string; password: string }): boolean {

        //got from supabase user managements API Docs, directly copied and pasted
        let { data, error } = supabase.auth.signUp (input)
        return data;
    }
}