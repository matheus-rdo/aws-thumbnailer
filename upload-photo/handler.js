'use strict';

const { photoService } = require('./service')

module.exports.upload = async (event) => {
  const result = await photoService.upload(event.body)
  return {
    statusCode: 201,
    body: JSON.stringify(result),
  };

};
