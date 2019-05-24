const AWS = require('aws-sdk')
const uuid = require('uuid/v4');

AWS.config.update({
    region: 'us-east-1'
})

const S3 = new AWS.S3()
const BUCKET = 'aws-thumbnailer-profile-photos'

const upload = body => {
    const id = uuid() + '.jpg'
    return new Promise((resolve, reject) => {
        S3.putObject({
            Bucket: BUCKET,
            Key: id,
            Body: new Buffer(body.replace(/^data:image\/\w+;base64,/, ""), 'base64'),
            ContentEncoding: 'base64',
            ContentType: 'image/jpeg'
        }, (err) => {
            if (err) return reject(err)

            return resolve({
                bucket: BUCKET,
                key: id
            })
        })
    });
}

module.exports = {
    upload
}
