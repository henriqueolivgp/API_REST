const db = require('../data/db')

module.exports = {
  getAll: async (req, res) => {
       const Categories = await db('categories')

       if (Categories) {
           //cenario de sucesso
           return res.json({ success: true, data: Categories });
       } else {
           //cenario de erro
           return res.json({ success: false });
       }
   },
   insert :  async (req, res) => {
       const category = req.body;
       const Categories = await db("categories").insert(category);

       if (Categories) {
           //cenario de sucesso
           return res.json({ success: true });
       } else {
           //cenario de erro
           return res.json({ success: false });
       }
   },

  delete : async (req, res) => {
       const cat_id = req.body.cat_id;
       const Categories = await db('categories').where({ cat_id }).delete().returning('*')

       if (Categories) {
           //cenario de sucesso
           return res.json({ success: true, data: Categories });
       } else {
           //cenario de erro
           return res.json({ success: false });
       }
   }
}