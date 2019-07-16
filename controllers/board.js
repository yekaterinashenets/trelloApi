const { readDataFromFile, writeDataToFile } = require("../helpers");

const getAll = async (req, res, next) => {
  try {
    const boards = readDataFromFile("./boards.json");

    return res.status(200).send(boards);
  } catch (ex) {
    return next(ex);
  }
};

const getById = async (req, res, next) => {
  try {
    const boards = readDataFromFile("./boards.json");
    const { id } = req.params;

    const neededBoard = boards.find(board => board.id === id);

    if (!neededBoard) {
      return res.status(404).send(`Board with id ${id} wasn't founded`);
    }
    return res.status(200).send(neededBoard);
  } catch (ex) {
    return next(ex);
  }
};

const create = async (req, res, next) => {
  try {
    const boards = readDataFromFile("./boards.json");
    const { name, color, description } = req.body;

    const newBoard = {
      id: Date.now(),
      createdAt: new Date(),
      updatedAt: new Date(),
      name,
      color,
      description: description || null
    };

    boards.push(newBoard);
    writeDataToFile("./boards.json", boards);

    return res.status(201).send("Board was succesfully created");
  } catch (ex) {
    return next(ex);
  }
};

const update = async (req, res, next) => {
  try {
    const boards = readDataFromFile("./boards.json");
    const { id } = req.params;
    const updatedParams = req.body;

    const neededBoard = boards.find(board => board.id === id);
    if (!neededBoard) {
      return res.status(404).send(`Board with id ${id} wasn't founded`);
    }

    const updatedBoards = boards.map(board =>
      board.id === id
        ? { ...board, ...updatedParams, updatedAt: new Date() }
        : board
    );
    writeDataToFile("./boards.json", updatedBoards);
    return res.status(200).send("Board was succesfully updated");
  } catch (ex) {
    return next(ex);
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update
};
