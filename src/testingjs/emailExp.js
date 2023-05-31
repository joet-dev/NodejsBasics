var nodemailer = require('nodemailer'); 

var transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
        user: 'josepharduino@gmail.com',
        pass: 'mpmkhsaihvygqndj'
    }
}); 

var mailOptions = {
    from: 'josepharduino@gmail.com',
    to: 'jo55r55r55r@gmail.com', 
    subject: 'Sending email via node.js', 
    html: '<h1>Email Header</h1><p>Body</p>'
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error); 
    } else {
        console.log('Email sent: ' + info.response); 
    }
});