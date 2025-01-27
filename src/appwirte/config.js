import conf from '../conf/conf'
import { Client, ID, Databases, Storage, Query, Account } from 'appwrite'

export class Serivce {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwritwUrl)
            .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client)
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredImage, status, userID }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userID
                }
            )
        } catch (error) {
            console.log("AppWrite Servic :: createPost :: ", error);
        }
    }

    async updatePost(slug, { title, content, featuredImage, status, userID }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userID
                }
            )
        } catch (error) {
            console.log("AppWrite serive :: updatePost :: error", error);
        }
    }

    async deletPost(slug) {
        try {

            return await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("AppWrite Servic :: createPost :: ", error);

        }
    }
    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("AppWrite serive :: updatePost :: error", error);

        }
    }
    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteProjectId,
                queries,
            )
        } catch (error) {
            console.log("AppWrite serive :: updatePost :: error", error);
            return false
        }
    }

    //file upload service

    async uploadfile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteProjectId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("AppWrite serive :: updatePost :: error", error);
            return false
        }
    }

    async deleteFile(fileId) {
        try {
            return await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("AppWrite serive :: updatePost :: error", error);
            return false
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}

const serivece = new Serivce()
export default serivece