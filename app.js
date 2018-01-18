let express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    mongoose        = require("mongoose"),
    moment          = require("moment"),
    path            = require("path"),
    nodemailer      = require("nodemailer"),
    emailCheck      = require("email-check");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "/public")));
app.use(bodyParser.urlencoded({extended: false}));
app.locals.moment = moment;


app.get("/", function(req, res){
    res.render("index");
});

app.get("/projects", (req, res) => {
    res.render("projects")
})
app.get("/contact", (req,res) => {
    res.render("contact")
})
app.post("/contact", function(req, res){
    // Spambot check
    if(req.body.company) {
        res.render("contact", {
            title: "Contact",
            err: true,
            page: 'contact',
            type: 'empty',
            body: req.body.message,
            name: req.body.name,
            email: req.body.email,
            msg: "Spambot detected. If you recieve this message in error please contact me by phone.",
            description: "spam"})
        return;
    }
        // Make sure fields are filled out
        if(req.body.name === "undefined" || req.body.email === "undefined" || req.body.message === "undefined") {
            res.render("contact", {
                title: "Contact",
                err: true,
                page: 'contact',
                type: 'empty',
                body: req.body.message,
                name: req.body.name,
                email: req.body.email,
                msg: "Make sure all fields are valid and try again",
                description: "email not sent"
            })
            return;
        }

        // Check for valid email
        let emailChecked = emailCheck(req.body.email);

        if (emailChecked === false) {
            res.render("contact", {
                title: "Contact",
                err: true,
                page: 'contact',
                type: 'empty',
                body: req.body.message,
                name: req.body.name,
                email: req.body.email,
                msg: "Invalid email. Please check the entered email and try again.",
                description: "email not sent"
            })
            return;
        }

        let mailOptions, transporter;

            transporter = nodemailer.createTransport({
            service: "Godaddy",
            host: "smtpout.secureserver.net",
            port: "465",
            secureConnection: true,
            auth: {
            user: "jpell@finessedesigns.net",
            pass: process.env.EMAILPW
            }
       });

        // Fill mail options

        mailOptions = {
            from: "jpell@finessedesigns.net",
            to: "jpell@finessedesigns.net",
            subject: "Sent by website from - " + req.body.name,
            text: req.body.message + " -----Sent by: NAME: " + req.body.name + " EMAIL: " + req.body.email + " ------ "
        };
        transporter.sendMail(mailOptions, function(err, info){
            if(err) {
                res.render('contact', {
                    title: "Contact",
                    page: "contact",
                    type: "error",
                    description: "Email was not successful"});
            }
                else {
                    res.render('contact', {
                        title: "Contact",
                        page: "contact",
                        type: "success",
                        description: "Email sent sucessfully!"});
                }
        });
    });

app.listen(process.env.PORT, process.env.IP);

