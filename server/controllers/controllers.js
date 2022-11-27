var ImageKit = require("imagekit");
// const dummyEnv = require('../../client/src/components/Modals/dummyEnv.js')

module.exports.previewImage = (image, callback) => {
  // console.log('dummy Env: ', dummyEnv.dummyEnv)
  console.log(`public:${process.env.REACT_APP_publicKey} private:${process.env.REACT_APP_privateKey} url:${process.env.REACT_APP_urlEndpoint}`)

  var base64Image = image.base64Img;
  var nameGiven = image.nameGiven;

  var imagekit = new ImageKit({
    publicKey : process.env.REACT_APP_publicKey,
    privateKey: process.env.REACT_APP_privateKey,
    urlEndpoint: process.env.REACT_APP_urlEndpoint
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