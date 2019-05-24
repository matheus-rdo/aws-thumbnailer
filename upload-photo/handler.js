'use strict';

const { photoService } = require('./service')

module.exports.upload = async (event) => {
  console.log('bucket: ' + process.env.BUCKET)
  const result = await photoService.upload(event.body)
  return {
    statusCode: 201,
    body: JSON.stringify(result),
  };

};
