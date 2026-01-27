import db from '../models/index';

export const getAllUsers = async () => {
   try {
      let users = await db.User.findAll({
         attributes: ['id', 'username', 'email', 'phone', 'sex'],
         include: { model: db.Group, attributes: ['name', 'description'] },
         raw: true,
         nest: true,
      });
      return {
         EM: 'get data success',
         EC: 0,
         DT: users,
      };
   } catch (e) {
      console.log(e);
      return {
         EM: 'something wrong with services',
         EC: 1,
         DT: [],
      };
   }
};

export const createNewUsers = async (data) => {
   try {
      await db.User.create({});
   } catch (e) {}
};

export const updateUsers = async (data) => {
   try {
      let user = await db.User.findOne({ where: { id: data.id } });
      if (user) {
         //update
      } else {
         //not found user
      }
   } catch (e) {}
};

export const deleteUsers = async (id) => {
   try {
      await db.User.delete({
         where: { id: id },
      });
   } catch (e) {}
};
