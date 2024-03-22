import {checkEmptyUsers} from "../middlewares/user.middleware.js";
import {database} from "../config/firebase.config.cjs";

const checkUserController = async (req, res) => {
    try {
        const data = req.body;

        // Fetch user data from Firebase Realtime Database
        const snapshot = await database.ref('users').orderByChild('email').equalTo(data.email).once('value');
        const userData = snapshot.val();

        // Check if there is a user with the provided email
        if (!userData) {
            return res.status(401).json({message: 'Invalid credentials'});
        }

        // Extract the user's password from the fetched data
        const user = Object.values(userData)[0];
        const userPassword = user.password;

        // Compare the provided password with the stored password securely
        const isPasswordValid = await comparePasswords(data.password, userPassword);
        if (!isPasswordValid) {
            return res.status(401).json({message: 'Invalid credentials'});
        }
        res.cookie('userId', Object.keys(userData)[0], {httpOnly: true});
        // Return user data as JSON response
        res.json({
            user_ID: Object.keys(userData)[0],
            ...user
            // Include any additional user data you want to return
        });
    } catch (error) {
        console.error('Error authenticating user:', error);
        res.status(500).json({message: 'Server error'});
    }
}

// Function to securely compare passwords (using bcrypt for example)
const comparePasswords = async (password, hashedPassword) => {
    // Code to compare passwords securely (using bcrypt for example)
    // Example using bcrypt:
    // const bcrypt = require('bcrypt');
    // return await bcrypt.compare(password, hashedPassword);
    // For demonstration purposes, we're assuming passwords match directly
    return password === hashedPassword;
}


export {checkUserController}