const boardRouter = require('./board');
const cardRouter = require('./card');

module.exports = (app) => {
    boardRouter(app);
    cardRouter(app);
}
