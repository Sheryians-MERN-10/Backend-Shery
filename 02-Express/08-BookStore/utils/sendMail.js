const nodemailer = require("nodemailer");

exports.sendMail = (req, res) => {


    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // Use `true` for port 465, `false` for all other ports
        auth: {
            user: `${process.env.SENDER_EMAIL}`,
            pass: `${process.env.NODEMAILER_PASSWORD}`,
        },
    });

    const mailOptions = {
        from: `"Ayush Official 👻" <${process.env.SENDER_EMAIL}>`, // sender address
        to: req.body.email, // list of receivers
        subject: "NEWSLETTER SUBSCRIPTION ✔", // Subject line
        // text: "Hello world?", // plain text body
        html: `<h1>Welcome to Bookstore.</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, earum.</p>
    <button>Explore More</button>`, // html body
    }

transporter.sendMail(mailOptions, (err, info) => {
        if (err) return res.send(err);
        console.log(info);
        return res.send(
            "<h1 style='text-align:center;color: tomato; margin-top:10%'><span style='font-size:60px;'>✔️</span> <br />Email Sent! Check your inbox , <br/>check spam in case not found in inbox.</h1><a href='/'>HomePage</a>"
        );
    });

}

