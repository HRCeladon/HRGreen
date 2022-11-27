var ImageKit = require("imagekit");
const imgEnv = require('../../client/src/components/Modals/imgEnv.js')

module.exports.previewImage = (image, callback) => {
  // Unable to export env variables for image kit
  console.log('imagekit env: ', imgEnv)
  console.log(`.env var: public: ${process.env.REACT_APP_IMAGEKIT_PUBLIC_KEY} private: ${process.env.REACT_APP_IMAGEKIT_PRIVATE_KEY} url: ${process.env.REACT_APP_IMAGEKIT_URL_ENDPOINT}`)

  var base64Image = image.base64Img;
  var nameGiven = image.nameGiven;

  // env variables shows up as undefined
  var imagekit = new ImageKit({
    publicKey : process.env.REACT_APP_IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.REACT_APP_IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.REACT_APP_IMAGEKIT_URL_ENDPOINT
  })

  var imageObject = {
    file: base64Image,
    fileName: nameGiven,
    tags: ["BlueOcean"]
  }

  imagekit.upload(imageObject, (error, result) => {
    if(error) callback(error, null);
    else callback(null, result);
  })
}