import {connect, ConnectOptions} from "mongoose";

let isConnected: boolean = false
export const connectDatabase = async () => {

    if(!process.env.DATABSE_URL){
        return console.error("database not connected")
    }

    if(isConnected) return;

    try {


    const options: ConnectOptions = {
        dbName:"Twitter-clone",
        autoCreate: true,

    };

    await connect(process.env.DATABSE_URL, options);
    isConnected = true;
    console.log("database connected");
} catch (error) {
    console.log("database connection failed");
    }
};