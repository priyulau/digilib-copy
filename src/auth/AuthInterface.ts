import {DataStoreInterface} from "../classes/interface.ts";

export interface AuthInterface {

    login(user: { email: string, password: string }, dataStore: DataStoreInterface): boolean;

    register(user:
                 { email: string, password: string, username: string },
             dataStore: DataStoreInterface
    ): boolean;
}