const db = require('../db')

module.exports = {
    getAll: async (req, res) => {
        const users = await db.select().from('users')
        
        if (users) {
            //cenario de sucesso
            return res.json({ success: true, data: users });
          } else {
            //cenario de erro
            return res.json({ success: false });
          }
    },
    getById: async (req, res) => {
      const idusers = await db.from('users').findByPk(req.params.id);

        if (idusers) {
            //cenario de sucesso
            return res.json({ success: true, data: idusers });
          } else {
            //cenario de erro
            return res.json({ success: false });
          }
    },
    insert: async (req, res) => {
      const {email, password } = req.body;
        const postusers = await db('users').insert({ email, password }).returning('*')
        
        if (postusers) {
            //cenario de sucesso
            return res.json({ success: true, data: postusers });
          } else {
            //cenario de erro
            return res.json({ success: false });
          }
    },
    delete: async (req, res) => {
        //const deletedusers = await db('users').delete({where:{ id: req.body.id },}).returning('*');
        const id = req.body.id;

        await db('users').delete({
          where: {
            id_utilizador: id,
          },
        });
        
        if (deletedusers) {
            //cenario de sucesso
            return res.json({ success: true, data: deletedusers });
          } else {
            //cenario de erro
            return res.json({ success: false });
          }
    }
}