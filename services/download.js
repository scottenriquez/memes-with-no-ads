import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');
const request = require('request');

const downloadRemoteResource = (remoteURL, localFilePath, callback) => {
  request.head(remoteURL, (error, response, body) => {
    request(remoteURL)
      .pipe(fs.createWriteStream(localFilePath))
      .on('close', callback)
  });
}

export { downloadRemoteResource }