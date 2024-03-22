import {checkEmptyUsers} from "../middlewares/user.middleware.js";
import {addUserService, getUsersService} from "../services/user.service.js";

// controller get users
const getUsersController = async (req, res) => {
    const usersRef = await getUsersService();
    usersRef.once('value', (snapshot) => {
        const users = snapshot.val();
        const checkUsers = checkEmptyUsers(users);
        if (!checkUsers) {
            res.status(404).json({message: "data not found"});
        }
        // Convert the users object to an array
        const usersArray = Object.keys(users).map(key => ({
            id: key,
            ...users[key]
        }));

        // Return the users array as JSON response
        res.status(200).json(usersArray);
    }, (error) => {
        console.error('Error fetching users:', error);
        res.status(500).json({error: 'Failed to fetch users'});
    });
}

//controller add user to db
const addUserController = async (req, res) => {
    try {
        const data = req.body;
        const usersRef = await addUserService();
        const newUSer = usersRef.push(data);
        res.status(201).json({message: "add user successfully", userId: newUSer.key})
    } catch (error) {
        res.status(500).json({message: "server error"})
    }
}
export {getUsersController, addUserController}