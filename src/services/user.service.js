import {database} from "../config/firebase.config.cjs";

// service get data users
const getUsersService = async ()=>
{
    return database.ref("users");
}

// service add data user to db
const addUserService = ()=>
{
    return database.ref("users");
}

export {getUsersService, addUserService}