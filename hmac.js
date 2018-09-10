const voucher_codes = require('voucher-code-generator');
const crypto = require('crypto')
const CryptoJS = require('crypto-js')

// voucherify random code generator
let serialNumber = voucher_codes.generate({ length: 20, count: 1, charset: voucher_codes.charset("alphanumeric") })[0];
// csprng: cryptographically secure pseudo random number generator
let randomKey = crypto.randomBytes(16).toString('base64');

// encrypt
let hash = CryptoJS.HmacSHA256(serialNumber, randomKey); // output WordArray
let hashInBase64 = CryptoJS.enc.Base64.stringify(hash);
console.log("encrypt: ", hashInBase64);

// decrypt
let parsedHash = CryptoJS.enc.Base64.parse(hashInBase64); // output WordArray
let parsedHashInBase64 = parsedHash.toString(CryptoJS.enc.Base64);
console.log("decrypt: ", parsedHashInBase64);