const AWS = require('aws-sdk')
const uuid = require('uuid/v4');

AWS.config.update({
    region: 'us-east-1'
})

const s3 = new AWS.S3()
const { BUCKET } = process.env

const upload = async body => {
    const id = uuid() + '.jpg'

    await s3.putObject({
        Bucket: BUCKET,
        Key: id,
        Body: new Buffer(body.replace(/^data:image\/\w+;base64,/, ""), 'base64'),
        ContentEncoding: 'base64',
        ContentType: 'image/jpeg'
    }).promise()


    const response = {
        bucket: BUCKET,
        key: id
    }
    return response
}

module.exports = {
    upload
}
