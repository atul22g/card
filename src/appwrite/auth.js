import { handleErrors, handleSuccess } from '../components/func/AllFunc';
import conf from './config';
import { Databases, Client, Account, ID, Query } from "appwrite";



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
        // console.log(user, data);
        const Time = new Date().toLocaleTimeString();
        const promise = this.Databases.createDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, ID.unique(), { Name: user.name, Email: user.email, Data: JSON.stringify(data), Time: Time });

        promise.then(function () {
            console.log("Data Add Successfully");
            window.location.href = conf.SiteUrl + '/dashboard';
        }, function (error) {
            console.log("Data Not Add " + error);
        });
    }

    async fetchdata() {
        const promise = await this.Databases.listDocuments(conf.appwriteDatabaseId, conf.appwriteCollectionId);

        if (promise.total === 0) {
            return null;
        } else {
            return promise.documents;
        }
    }
    async fetchOnedata(parameter) {
        let para = parameter.replace("?", "");
        const promise = await this.Databases.listDocuments(conf.appwriteDatabaseId, conf.appwriteCollectionId, [Query.equal('$id', [para])])

        if (promise.total === 0) {
            return null;
        } else {
            return promise.documents;
        }
    }

    async deleteOneData(id) {
        const promise = await this.Databases.deleteDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, id);
        if (promise) {
            window.location.href = '/dashboard'
        }
    }
    async updateData(headers,user, data) {
        headers = headers.replace("?", "");
        const Time = new Date().toLocaleTimeString();
        const promise = await this.Databases.updateDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, headers, { Name: user.name, Email: user.email, Data: JSON.stringify(data), Time: Time });
        
        if (promise) {
            window.location.href = '/dashboard'
        }
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
        try {
            this.account.createOAuth2Session(name, conf.SiteUrl + '/dashboard', conf.SiteUrl);
        } catch (error) {
            handleErrors({ message: error.messsage });
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