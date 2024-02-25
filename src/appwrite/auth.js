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
                return this.login({ email, password });
            } else {
                return userAccount;
            }
        } catch (error) {
            handleErrors({ message: error.message });
        }
    }
    createAccountAuth(name) {
        try {
            return this.account.createOAuth2Session(name, `${siteURL}/card`, `${siteURL}/asdcard`);
        } catch (error) {
            handleErrors({ message: error.message });
        }
    }

    async login({ email, password }) {
        try {
            const userData = await this.account.createEmailSession(email, password);
            handleSuccess("Your are Successfully Login")
            if (userData) {
                return await authService.getCurrentUser()
            }
        } catch (error) {
            handleErrors({ message: error.message });
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            handleErrors({ message: error.message });
        }

        return null;
    }

    async logout() {

        try {
            await this.account.deleteSessions();
        } catch (error) {
            handleErrors({ message: error.message });
        }
    }
}

const authService = new AuthService();

export default authService