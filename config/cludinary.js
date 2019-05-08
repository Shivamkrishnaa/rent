////////////////////////////Postavke image clouda///////////////////////////////
//ucitavamo moduo
const cloudinary = require('cloudinary');

//unosimo licne podatke
cloudinary.config({ 
  cloud_name: 'noida', //ime clouda
  api_key: '169596118384929', //licni kjuc
  api_secret: '1421l3L75G2usy_7p3v1sIcsKnE' //licna tajna
});

////////////////////////////Eksportovanje s postavljenim podacima///////////////////////////////
module.exports=cloudinary;