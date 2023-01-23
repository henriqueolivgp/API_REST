const db = require('../data/db')

module.exports = {
  getAll: async (req, res) => {
       const Items = await db('Items')

       if (Items) {
           //cenario de sucesso
           return res.json({ success: true, data: Items });
       } else {
           //cenario de erro
           return res.json({ success: false });
       }
   },
   insert :  async (req, res) => {
       const {item, calories} = req.body;
       const Items = await db("Items").insert(item, calories);

       if (Items) {
           //cenario de sucesso
           return res.json({ success: true });
       } else {
           //cenario de erro
           return res.json({ success: false });
       }
   },

  delete : async (req, res) => {
       const id = req.body.id;
       const Items = await db('Items').where({ id }).delete().returning('*')

       if (Items) {
           //cenario de sucesso
           return res.json({ success: true, data: Items });
       } else {
           //cenario de erro
           return res.json({ success: false });
       }
   }
}