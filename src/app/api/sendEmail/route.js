import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

import dotenv from 'dotenv';
dotenv.config();

export async function POST(request) {
    console.log(process.env.SENDGRID_API_KEY);
    try {
        const { name, email, url, project_details } = await request.json();

        const transporter = nodemailer.createTransport({
            host: 'smtp.sendgrid.net',
            port: 587,
            secureConnection: false,
            auth: {
                user: 'apikey',
                pass: process.env.SENDGRID_API_KEY
            },
            tls: {
                ciphers:'SSLv3'
            }
        })

        const mailOption = {
            from: process.env.MAIL_FROM,
            to: process.env.MAIL_TO,
            subject: "New Email from Nextjs Landing Page",
            html: `
                    <h3>New email from ${name}</h3>
                    <li>Email: ${email}</li>
                    <li>Web-site URL: ${url}</li>
                    <li>Project Details: ${project_details}</li> 
                  `
        }

        await transporter.sendMail(mailOption)

        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
    }
}