//using supabase template for our signup
export default interface DataStoreInterface {
    /**
     * contract: Allow your users to sign up and create a new account.
     * @param {email: string, password: string} input
     * @returns boolean
     */
    signup (input: {email:string, password: string}): boolean

    /**
     * contract: If an account is created, users can login to your app.
     * @param { email:string, password: string } input
     * @returns boolean
     */
    loginWithEmail (input: {email:string, password: string}):boolean
}