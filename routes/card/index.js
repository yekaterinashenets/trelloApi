const express = require('express');
const cardController = require('../../controllers/card');

const cardRouter = express.Router();

cardRouter
    .get(
        '/',
        cardController.getAll,
    )

module.exports = (app) => {
    app.use('/trelloApi/cards', cardRouter);
};
