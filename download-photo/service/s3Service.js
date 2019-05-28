const AWS = require('aws-sdk')

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

module.exports = {
    getObject
}


