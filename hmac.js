const CryptoJS = require('crypto-js')
const crypto = require('crypto')

// encrypt
let serialNumber = "qwerasdfzxcv1234" // voucherify random code generator
let randomKey = crypto.randomBytes(16).toString('base64'); // csprng: cryptographically secure pseudo random number generator
let hash = CryptoJS.HmacSHA256(serialNumber, randomKey); // output WordArray
let hashInBase64 = CryptoJS.enc.Base64.stringify(hash);
console.log("encrypt: ", hashInBase64);

// decrypt
let parsedWordArray = CryptoJS.enc.Base64.parse(hashInBase64); // output WordArray
let parsedHash = parsedWordArray.toString(CryptoJS.enc.Base64);
console.log("decrypt: ", parsedHash);