import DataStoreInterface from "../datastore/DataStoreInterface.ts";

export interface AuthInterface {
    /**
     * logs a user in our application
     * @param user - user we're logging in
     * @param dataStore - object where we store the data we got from the user
     */
    login(user: { email: string, password: string }, dataStore: DataStoreInterface): boolean;

    /**
     * registers a new user
     * @param user - the new user we're registering
     * @param dataStore - object where we store the data we got from the user
     */
    register(user:
                 { email: string, password: string, username: string },
             dataStore: DataStoreInterface
    ): boolean;
}