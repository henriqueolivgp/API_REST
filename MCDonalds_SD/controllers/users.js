const config = process.env.TOKEN_SECRET;
const poll = require ("../db");

exports.getAll = async (req, res) => {
  const utilizadores = await UtilizadoreModel.findAll();

  const response = apiResponse.prepareResponse(
    utilizadores.map(({ dataValues: { password, ...e } }) => e) // se retirar password, o postman vai mostrar a password
  );
  return apiResponse.send(res, response);
};

exports.getById = async (req, res) => {
  const id = req.params.idbatata;

  const utilizador = await UtilizadoreModel.findByPk(id);


  const response = apiResponse.prepareResponse(utilizador);
  return apiResponse.send(res, response);
};

exports.create = async (req, res) => {
  const { id, nome, password, email } = req.body;

  const utilizador = await UtilizadoreModel.create({ id, nome, password, email });
  
  const response = apiResponse.prepareResponse(utilizador);
  return apiResponse.send(res, response);
};

exports.update = async (req, res) => {
  const { id_utilizador, nome, password, email } = req.body;

  const utilizador = await UtilizadoreModel.findByPk(id_utilizador);

  utilizador.nome = nome;
  utilizador.password = password;
  utilizador.email = email;

  await utilizador.save();

  const response = apiResponse.prepareResponse(utilizador);
  return apiResponse.send(res, response);
};

exports.delete = async (req, res) => {
  const id = req.body.id;

  await UtilizadoreModel.destroy({
    where: {
      id_utilizador: id,
    },
  });

  const response = apiResponse.prepareResponse(
    "utilizador with ID " + id + " deleted"
  );
  return apiResponse.send(res, response);
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
