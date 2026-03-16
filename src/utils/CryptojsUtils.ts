var CryptoJS = require("crypto-js");
var fs = require("fs");
var path = require("path");

export function encryption(textToEncrypt:any){
    var cipherUsername = CryptoJS.AES.encrypt(textToEncrypt, process.env.SALT).toString();
    console.log("Encrypted text -",cipherUsername);
    return cipherUsername;
}

export function decryption(encryptedTxt:any){
    var plainTextUsername = CryptoJS.AES.decrypt(encryptedTxt, process.env.SALT);
    var textFormatUsername = plainTextUsername.toString(CryptoJS.enc.Utf8);
    console.log("Decrypted text-",textFormatUsername);
}
