import nodemailer from "nodemailer"

var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "dc115690c80df1",
      pass: "d635ed4ee21e1d"
    }
  });


export const mail1 = async(mail,cont) => {
  const message = {
    from: "hafeedummer@gmail.com",
    to: mail,
    subject: "The Missing Child has been found!",
    text: `Your missing child has been found . For further details cotact:
    ${cont}`}
    mailservice(message)
  }

  export const mail2 = async(cont) => {
      const message = {
      from: "hafeedummer@gmail.com",
      to: "policemail@gmail.com",
      subject: "The Missing Child has been reported!",
      text: `There is been a missing child found and reported by a user . for contacting the user the contact no is:
      ${cont}`}
      mailservice(message)
    }
    
    const mailservice = async(mail) => {
    transport.sendMail(mail, (err, info) => {
    if (err) {
    console.log(err)
    } else {
    console.log(info);
    }
    });

}

export default mailservice;
