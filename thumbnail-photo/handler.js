'use strict';
const thumbnailService = require('./service/thumbnailService')

module.exports.thumbnail = async (event) => {
  await thumbnailService.thumbnail(event)
};
