import bcrypt from 'bcryptjs';
import mysql from 'mysql2/promise';
import Bluebird from 'bluebird';

const salt = bcrypt.genSaltSync(10);

//create connection to database

export const hashPassword = (userPassword) => {
   let hashPassword = bcrypt.hashSync(userPassword, salt);
   return hashPassword;
};

export const createNewUser = (email, username, password) => {
   let hassPass = hashPassword(password);
   connection.query(
      'INSERT INTO users (email,password,username) VALUES (?,?,?)',
      [email, hassPass, username],
      (err, results) => {
         if (err) console.log(err);
      },
   );
};

export const getAllUsers = async () => {
   const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      database: 'jwt',
      Promise: Bluebird,
   });
   let users = [];
   //    connection.query('SELECT * FROM users', (err, results) => {
   //       if (err) {
   //          console.log(err);
   //          return users;
   //       }
   //       users = results;
   //       return users;
   //    });
   try {
      const [result, fields] = await connection.execute('SELECT * FROM users');
      return result;
   } catch (err) {
      console.log(err);
      return users;
   }
};
