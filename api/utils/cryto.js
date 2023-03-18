import crypto from "crypto-js"
  

  
export const encrypt = async (text) => { 
        // Encrypting the data using the password key
        const encrypted = crypto.AES.encrypt(text,process.env.JWT).toString();
        console.log("Encrypted data -- ")
        return encrypted
}
  

export const decrypts = async (text) => {
        console.log("Decrypted data -- ")
        var decrypted = crypto.AES.decrypt(text, process.env.JWT)
        .toString(crypto.enc.Utf8)
        console.log(JSON.parse(decrypted))
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

// let key = undefined
 
// let iv = undefined
 
// export const encrypt = (text) => {
//     key = crypto.randomBytes(32);
//     iv = crypto.randomBytes(16);

//     let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
//     let encrypted = cipher.update(text);
//     encrypted = Buffer.concat([encrypted, cipher.final()]);
//     return { iv: iv.toString('hex'),
//     encryptedData: encrypted.toString('hex') };
// }

// export const decrypt = (text) => {
//     let iv = Buffer.from(text.iv, 'hex');
//     let encryptedText = Buffer.from(text.encryptedData, 'hex');
 
//     let decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), iv);
 
//     let decrypted = decipher.update(encryptedText);
//     decrypted = Buffer.concat([decrypted, decipher.final()]);
//     let data = decrypted.toString()
 
//     return decrypted;
// }