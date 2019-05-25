const AWS = require('aws-sdk');

AWS.config.update({
    region: 'us-east-1'
})

const s3 = new AWS.S3()

const getObject = (bucket, key) => {
    return s3.getObject({
        Bucket: bucket,
        Key: key
    }).promise()
}

const putObject = (bucket, key, buffer) => {
    return s3.putObject({
        Bucket: bucket,
        Key: key,
        Body: buffer
    }).promise()
}

module.exports = {
    getObject,
    putObject
}