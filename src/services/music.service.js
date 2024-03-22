import {database} from "../config/firebase.config.cjs";

const musicService = () =>
{
    return database.ref("musics")
}

export {musicService}
