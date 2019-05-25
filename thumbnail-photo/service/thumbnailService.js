const s3Service = require('./s3Service')
const jimp = require('jimp');
const { BUCKET_THUMBNAIL } = process.env

const thumbnail = async event => {
    console.log(event)
    console.log(event.s3)
    const s3Info = event.s3
    const bucket = s3Info.bucket.name
    const { key } = s3Info.object

    const s3Object = await s3Service.getObject(bucket, key)
    console.log('s3 object', s3Object)
    const img = await jimp.read(s3Object)
    const buffer = await img.resize(100, 100).quality(80).getBufferAsync(jimp.MIME_JPEG)
    await s3Service.putObject(BUCKET_THUMBNAIL, key, buffer)
}

module.exports = {
    thumbnail
}