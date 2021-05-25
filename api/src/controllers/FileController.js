const fileService = require('../services/FileService'); 

exports.get = async (req, res, next) => {
   fileService.files()
   .then((files) => {console.log(files); res.status(200).send({"empty":"false", "dir":files})})
   .catch((error) => res.status(200).send({"empty":"true"}));
};