import crypto from "crypto-js"
  
export const encrypt = async (text) => { 
        // Encrypting the data using the password key
        const encrypted = crypto.AES.encrypt(text,process.env.JWT).toString();
        return encrypted
}
  

export const decrypts = async (text) => {
        var decrypted = crypto.AES.decrypt(text, process.env.JWT)
        .toString(crypto.enc.Utf8)
        // console.log(JSON.parse(decrypted))
        return JSON.parse(decrypted)
}



// import { generateEncryptionKey, decrypt } from "symmetric-encrypt"


// export const encrypt = async (text) => {
//     // console.log(text)
//     // console.log(process.env.JWT)
//     try{
//         const encrypts = await generateEncryptionKey(process.env.JWT)
//         const encryptedConfig = await encrypts(text)
//         // console.log(encryptedConfig)
  
//         return encryptedConfig
//     }catch(err){
//         return err
//     }
// }

// export const decrypts = async (text) => {
//     try{
//         const message = await decrypt(process.env.JWT, text)
//         const data = JSON.parse(message)
//         return data
//     }catch(err){
//         return err
//     }
// }

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

// import crypto from "crypto";


// const algorithm = "aes-256-cbc"; 

// let key = "5cfb13364541743d2d82af419a42e50e936cda3d1c1b47621da59c704fa8a7be"
 
// let iv = "jCJA5epA1SaC864vV0zMMA=="
 
// export const encrypts = (text) => {
// //     key = crypto.randomBytes(32);
// //     iv = crypto.randomBytes(16);

// let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
//     let encrypted = cipher.update(text);
//     encrypted = Buffer.concat([encrypted, cipher.final()]);
//     console.log(encrypted.toString('hex'))
//     return { iv: iv.toString('hex'),
//     encryptedData: encrypted.toString('hex') };
// }

// export const decrypt =(text) => {
// //     let iv = Buffer.from(iv, 'hex');
// //     let encryptedText = /* Buffer.from(text.value, 'hex'); */ Buffer.from("CQgB/JMLuRP/gNi/YtW4bF1w77eF1tmlC8gJe0IGGa9mKhLmTvczYb26IQVl/Q9+Pxxy2nQ/MKy/sZ2sGcJtug==")
 
//     let decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), Buffer.from("jCJA5epA1SaC864vV0zMMA==", 'hex'));
 
//     let decrypted = decipher.update(text);
//     decrypted = Buffer.concat([decrypted, decipher.final()]);
//     let data = decrypted.toString()

//     console.log(data)
 
//     return decrypted;
// }


///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////




// const crypto = require('crypto');
 
// const algorithm = 'aes-256-cbc';
 
// const key = crypto.randomBytes(32);
 
// const iv = crypto.randomBytes(16);
 
// export const encrypts = (text) => {
//     let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
//     let encrypted = cipher.update(text);
//     encrypted = Buffer.concat([encrypted, cipher.final()]);
//     console.log(encrypted)
//     return { iv: iv.toString('hex'),
//     encryptedData: encrypted.toString('hex') };

// }
 
// var encrypted = encrypt("Hello World!");
 
// export const decrypter = (text) => {
//     let iv = Buffer.from(text.iv, 'hex');
//     let encryptedText = Buffer.from(text.encryptedData, 'hex');
 
//     let decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), iv);
 
//     let decrypted = decipher.update(encryptedText);
//     decrypted = Buffer.concat([decrypted, decipher.final()]);
 
//     return decrypted.toString();
// }
 
// const decrypted = decrypt(encrypted)
// console.log("Decrypted Text: " + decrypted); 