import {musicService} from "../services/music.service.js";
import {getUsersService} from "../services/user.service.js";
import {checkEmptyUsers} from "../middlewares/user.middleware.js";
import {checkEmptyMusic} from "../middlewares/music.middleware.js";

// post music
const postMusicController = async (req, res) => {
    const data = req.body;
    try {
        const musicRef = await musicService();
        const newMusic = musicRef.push(data);
        res.status(201).json({message: "music added", music_ID: newMusic.key})
    } catch (e) {
        res.status(500).json({message: "server error", e})
    }
}

// get music
const getMusicController = async (req, res)=>
{
    const usersRef = await musicService();
    usersRef.once('value', (snapshot) => {
        const musics = snapshot.val();
        const checkMusic = checkEmptyMusic(musics);
        if (!checkMusic) {
            res.status(404).json({message: "data not found"});
        }
        // Convert the users object to an array
        const musicsArray = Object.keys(musics).map(key => ({
            id: key,
            ...musics[key]
        }));

        // Return the users array as JSON response
        res.status(200).json(musicsArray);
    }, (error) => {
        console.error('Error fetching users:', error);
        res.status(500).json({error: 'Failed to fetch users'});
    });
}

export {postMusicController, getMusicController}
