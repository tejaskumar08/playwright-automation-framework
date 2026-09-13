var CryptoJS = require("crypto-js");
var fs = require("fs");
var path = require("path");
import {logger} from './LoggerUtils'

export async function encryption(textToEncrypt:any){
    const saltBytes = CryptoJS.enc.Utf8.parse(process.env.SALT);
    var cipherUsername = CryptoJS.AES.encrypt(textToEncrypt, saltBytes.toString());
    return cipherUsername;
}

export function decryption(encryptedTxt:any){
    if(!process.env.SALT){
        logger.error("❌ Error: GLOBAL SALT is missing from this terminal session!");
    }
    const saltBytes = CryptoJS.enc.Utf8.parse(process.env.SALT);
    var decryptedText = CryptoJS.AES.decrypt(encryptedTxt, saltBytes.toString());
    var textFormat = decryptedText.toString(CryptoJS.enc.Utf8);
    console.log("Decrypted text-",textFormat);
}
