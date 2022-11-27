const publicKey = process.env.REACT_APP_IMAGEKIT_PUBLIC_KEY
const privateKey = process.env.REACT_APP_IMAGEKIT_PRIVATE_KEY
const urlEndpoint = process.env.REACT_APP_IMAGEKIT_URL_ENDPOINT
module.exports.imageEnv = { publicKey, privateKey, urlEndpoint}