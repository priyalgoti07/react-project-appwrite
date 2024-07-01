import { Account, ID } from 'appwrite';
import cong from '../conf/conf'

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client()
            .setEndpoint(cong.appwritwUrl)
            .setProject(cong.appwriteProjectId)
        this.account = new Account(this.client)
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if (userAccount) {
                return this.login({ email, password })
            } else {
                return userAccount
            }
        }
        catch (error) {
            throw error
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password)
        }
        catch (error) {
            throw error
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get()
        }
        catch (error) {
            console.log("AppWirte serive :: getCurrentUser :: error", errorsss);
        }
        return null;
    }

    async logout() {
        try {
            return await this.account.deleteSessions()

        } catch {
            console.log("AppWrite serive :: logout :: error", error);

        }
    }
}

const authService = new AuthService()

export default authService