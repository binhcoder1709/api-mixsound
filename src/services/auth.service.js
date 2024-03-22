import {database} from "../config/firebase.config.cjs";

const loginUserService = ()=>
{
    return database.ref("users");
}

export { loginUserService };