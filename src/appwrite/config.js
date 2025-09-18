import { Client, ID,Databases,Storage,Query } from "appwrite";
import config from "../conf/conf";

export class Servises {
    client = new Client();
    database;
    buket;

     constructor(){
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId);
        this.database = new Databases(this.client)
        this.buket = new Storage(this.client)

    }

    async creatPost({tital,slug,content,uerid,feturedimage,ststus="active"}){
        try {
            console.log("Creating post with data:",{uerid});
            return await this.database
            .createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    tital,
                    content,
                    uerid,
                    feturedimage,
                    ststus
                }
            )
        } catch (error) {
            console.log("Error creating post:", error);
            
        }
    }

    async updatePost(slug,{tital,content,feturedimage,ststus}){

        try {
            return await this.database.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    tital,
                    content,
                    feturedimage,
                    ststus
                }
            )
        } catch (error) {
            console.log("Error updating post:", error   );
            
        }

    }

    async deletePost(slug){
        try {
            await this.database.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
             return true;
        } catch (error) {
            console.log("Error deleting post:", error);
             return false;
        }
    }

    async getPost(slug){
        try {
            return await this.database.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Error getting post:", error);
            return false;
        }
    }

    async getAllPost(quries = Query.equal("ststus","active")){
        try {
            console.log(" heloo from get all post");
            
            return await this.database.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                quries
            )
        } catch (error) {
            console.log("Error getting all posts:", error);
            return false;
            
        }
    }

    // file uplode  methodes

    async uplodeFile(file){
        try {
            return await this.buket.createFile(
                config.appwriteBuketId,
                ID.unique(),
                file
            )

        } catch (error) {
            console.log("Error uploading file:", error);
            return false;
            
        }
    }

    async deleteFile(fileId){
        try {
            await this.buket.deleteFile(
                config.appwriteBuketId,
                fileId
            )
            return true;    
        } catch (error) {
            console.log("Error deleting file:", error);
            return false;
            
        }
    }

    getFilePriweu(fileId){
        
        try {
            // console.log("from file preiview ",fileId);
            
            return this.buket.getFilePreview(
                config.appwriteBuketId,
                fileId
            )
        } catch (error) {
            console.log("Error getting file preview:", error);
            return false;
        }
    }

}

const servises =new Servises()

export default servises;