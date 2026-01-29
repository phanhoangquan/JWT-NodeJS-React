import db from '../models';

export const getGroups = async () => {
   try {
      let data = await db.Group.findAll();
      return {
         EM: 'Get group success',
         EC: 0,
         DT: data,
      };
   } catch (e) {
      console.log(e);
      return {
         EM: 'error from services',
         EC: 1,
         DT: [],
      };
   }
};
