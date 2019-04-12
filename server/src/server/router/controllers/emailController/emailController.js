import nodemailer from 'nodemailer'

export const sendEmail = async (req, res, next) => {
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: 'mypointmacro@gmail.com',
                pass: 'my1point2macro'
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        const mailOptions = {
            from: '"PointMacro Contact" <mypointmacro@gmail.com>',
            to: 'mustanggetdrunk@gmail.com',
            subject: 'Contest update',
            text: 'Hello dear user'
        };

        const response = await transporter.sendMail(mailOptions);
        console.log(response);
    } catch (e) {
        console.log(e);
        next(e);
    }
};