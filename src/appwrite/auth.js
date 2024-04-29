import { handleErrors, handleSuccess } from '../components/func/AllFunc';
import conf from './config';
import { Databases, Client, Account, ID } from "appwrite";



export class DBService {
    client = new Client();
    Databases;
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.Databases = new Databases(this.client);
    }

    AddData(user, data) {
        console.log(user, data);

        const promise = this.Databases.createDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, ID.unique(), { Name: user.name,Email: user.email, Data: JSON.stringify(data) });

        promise.then(function () {
            console.log("Data Add Successfully");
            window.location.href = conf.SiteUrl + '/dashboard'; 
        }, function (error) {
            console.log("Data Not Add " + error);
        });
    }
}
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
        console.log(name);
        try {
            let auth = this.account.createOAuth2Session(name, 'http://localhost:3000/dashboard', 'http://localhost:3000');
            console.log(auth);
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
const dbService = new DBService();

export { authService, dbService }