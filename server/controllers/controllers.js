var ImageKit = require("imagekit");



module.exports.previewImage = (image, name) => {


  var base64Image = apiObject[0].body.base64Image;
  var nameGiven = apiObject[0].body.nameGiven;





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

  imagekit.upload(, (error, result) => {
    if(error) callback(error, null);
    else callback(null, result);
  })
}