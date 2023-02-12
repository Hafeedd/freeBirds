import crypto from "crypto";


const algorithm = "aes-256-cbc"; 

let key = undefined
 
let iv = undefined
 
export const encrypt = (text) => {
    key = crypto.randomBytes(32);
    iv = crypto.randomBytes(16);

    let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return { iv: iv.toString('hex'),
    encryptedData: encrypted.toString('hex') };
}

export const decrypt = (text) => {
    let iv = Buffer.from(text.iv, 'hex');
    let encryptedText = Buffer.from(text.encryptedData, 'hex');
 
    let decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), iv);
 
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    let data = decrypted.toString()
 
    return decrypted;
}