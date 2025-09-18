import { Client, Account, ID } from "appwrite";
import config from "../conf/conf";

export class Authappwritr{
     client = new Client();
     account;


    constructor(){
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId);
        this.account = new Account(this.client);

    }

    async createAccount({email, password, name}) {
      try {
          const userAcount = await this.account.create(ID.unique(),email, password, name);
        if (userAcount) {
            // call another method
          return  this.login({email,password});
        } else {
            return userAcount;
            
        }

      } catch (error) {
        throw error;
      }
    }

    async login ({email, password}) {
        try {
            console.log(email,password);
            

            return await this.account.createEmailPasswordSession(email, password)
            
        } catch (error) {
            return error;
            
        }
    }

    async getCurentUSer(){
        try {
            console.log("heloo from get user");
            
            return await this.account.get();
        } catch (error) {
            console.log("Error getting current user:", error);
            
        }

        return null;
    }
    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Error logging out:", error);   
            
        }
    }

}

const authServise = new Authappwritr();

export default authServise;