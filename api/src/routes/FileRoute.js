const FileController = require('../controllers/FileController');

module.exports = (app) => {
   app.get('/', FileController.get);
}