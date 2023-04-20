const nodemailer = require('nodemailer');


async function main() {

  let transporter = nodemailer.createTransport({
    host: "localhost",
    port: 2525,
    secure: false,
  });


  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', 
    to: "bar@example.com, baz@example.com",
    subject: "Hello ✔", 
    text: "Hello world?", 
    html: "<b>Hello world?</b>", 
  });
  console.log("Message sent: %s", info.messageId);

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

}

main().catch(console.error);
