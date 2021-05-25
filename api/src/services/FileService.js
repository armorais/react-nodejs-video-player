const folder = './public/streams';
const fs = require('fs');

exports.files = function listDir() {
    try {
      return fs.promises.readdir(folder);
    } catch (err) {
      console.error('Error occured while reading directory!', err);
    }
  }
