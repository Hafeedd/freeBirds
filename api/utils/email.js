import nodemailer from "nodemailer"

var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "dc115690c80df1",
      pass: "d635ed4ee21e1d"
    }
  });


const mailservice = async(mail,cont) => {
  const message = {
    from: "hafeedummer@gmail.com",
    to: mail,
    subject: "The Missing Child has been found!",
    text: `Your missing child has been found . For further details cotact:
    ${cont}`}
    
    transport.sendMail(message, (err, info) => {
    if (err) {
    console.log(err)
    } else {
    console.log(info);
    }
    });

}

export default mailservice;
