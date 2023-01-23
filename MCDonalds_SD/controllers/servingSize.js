const db = require('../data/db')

module.exports = {
  getAll: async (req, res) => {
       const ServingSizes = await db('ServingSizes')

       if (ServingSizes) {
           //cenario de sucesso
           return res.json({ success: true, data: ServingSizes });
       } else {
           //cenario de erro
           return res.json({ success: false });
       }
   },
   insert :  async (req, res) => {
       const servingsize = req.body;
       const ServingSizes = await db("ServingSizes").insert(servingsize);

       if (ServingSizes) {
           //cenario de sucesso
           return res.json({ success: true });
       } else {
           //cenario de erro
           return res.json({ success: false });
       }
   },

  delete : async (req, res) => {
       const serv_id = req.body.serv_id;
       const ServingSizes = await db('ServingSizes').where({ serv_id }).delete().returning('*')

       if (ServingSizes) {
           //cenario de sucesso
           return res.json({ success: true, data: ServingSizes });
       } else {
           //cenario de erro
           return res.json({ success: false });
       }
   }
}