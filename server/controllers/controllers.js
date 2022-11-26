var ImageKit = require("imagekit");


module.exports.previewImage = (image, callback) => {
  // console.log(`Image:${image} Callback:${callback}`)
  console.log(`publ ${process.env.publicKey} Priv ${process.env.privateKey} url ${process.env.urlEndpoint}`)

  // var base64Image = image[0].body.base64Image;
  // var nameGiven = image[0].body.nameGiven;
  var base64Image = image.base64Image;
  var nameGiven = image.nameGiven;

  var imagekit = new ImageKit({
    publicKey : process.env.publicKey,
    privateKey: process.env.privateKey,
    urlEndpoint: process.env.urlEndpoint
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