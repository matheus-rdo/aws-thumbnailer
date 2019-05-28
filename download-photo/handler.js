'use strict';

const s3Service = require('./service/s3Service')
const { BUCKET, BUCKET_THUMBNAIL } = process.env

module.exports.download = async (event) => {
  const { key } = event.pathParameters
  const { thumbnail } = event.queryStringParameters || {}
  const bucket = thumbnail && thumbnail === 'true' ? BUCKET_THUMBNAIL : BUCKET
  const data = await s3Service.getObject(bucket, key)

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'image/jpeg'
    },
    body: data.Body.toString('base64'),
    isBase64Encoded: true
  };

};
