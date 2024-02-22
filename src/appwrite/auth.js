import { handleErrors, handleSuccess } from '../components/func/AllFunc';
import conf from './config';
import { Client, Account, ID } from "appwrite";
let siteURL = process.env.REACT_APP_SITEURL;


export class AuthService {
    client = new Client();
    account;
    
    constructor() {
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
        
    }
    
    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                handleSuccess("Your Account is Creadted")
                return this.login({ email, password });
            } else {
                handleErrors({ message: "Your Account is Creadted"});
                return userAccount;

            }
        } catch (error) {
            handleErrors({ message: "Internal Server Error" });
        }
    }
    createAccountAuth(name) {
        console.log(name);
        try {
            const userAccount = this.account.createOAuth2Session(name,`${siteURL}/card`,`${siteURL}/asdcard`);
            if (userAccount) {
                handleSuccess("Your Account is Creadted")
                // return this.login({ email, password });
            } else {
                return userAccount;
            }
        } catch (error) {
            console.log(error);
            handleErrors({ message: "Internal Server Error" });
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout() {

        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
}

const authService = new AuthService();

export default authService