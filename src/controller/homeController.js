import { createNewUser, getAllUsers } from '../services/userService';

export const handleHomePage = (req, res) => {
   return res.render('home.ejs');
};

export const handleUserPage = async (req, res) => {
   let users = await getAllUsers();
   return res.render('user.ejs', { users });
};

export const handleCreateUser = (req, res) => {
   const email = req.body.email;
   const username = req.body.username;
   const password = req.body.password;
   createNewUser(email, username, password);

   return res.send('Create user successfully!');
};
