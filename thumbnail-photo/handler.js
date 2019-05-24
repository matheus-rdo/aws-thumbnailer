'use strict';

module.exports.thumbnail = async (event) => {
  console.log(event)
  return {
    statusCode: 201,
    body: 'Teste'
  };

};
