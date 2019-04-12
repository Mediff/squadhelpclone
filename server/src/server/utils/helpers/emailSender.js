
import nodemailer from 'nodemailer'

const fs = require('fs');

export const sendEmail = async (emailArray) => {
    return new Promise (async (resolve, reject) =>
    {
        try {
            let file;
            file = fs.readFileSync(__dirname + '/../../templates/index.html');
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
                to: emailArray,
                subject: 'Contest update',
                text: 'Contest you submitted on our platform is updated',
                html: file
            };

            const response = await transporter.sendMail(mailOptions);
            resolve(response);
        } catch (e) {
            reject(e);
        }
    })
};