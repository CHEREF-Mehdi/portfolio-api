import { NextFunction, Request, Response } from 'express';
import nodemailer, { SendMailOptions } from 'nodemailer';
import {
  IContactFormData,
  contactFormSchema,
} from '../helpers/joi-form-schema';
import { google } from 'googleapis';

// create the client google Oauth
const oauthClient = new google.auth.OAuth2({
  clientId: process.env.G_CLIENT_ID,
  clientSecret: process.env.G_CLIENT_SECRET,
  redirectUri: process.env.G_REDIRECT_URI,
});

// set the refresh token
oauthClient.setCredentials({
  refresh_token: process.env.G_REFRESH_TOKEN,
});

export class ContactController {
  static async sendEmail(req: Request, res: Response, next: NextFunction) {
    const data = req.body as IContactFormData;

    try {
      // validate data
      const dataValidation = contactFormSchema.validate(data);

      // verify if data isn't valide
      if (dataValidation.error) {
        const err = dataValidation.error.details[0];
        const result = {
          error: 'DATA VALIDATION',
          message: err.message,
        };
        return res.status(403).json(result);
      }

      // get the validated data
      const value = dataValidation.value as IContactFormData;

      // get a new access token from google api
      const gApiAccessToken = await oauthClient.getAccessToken();

      // create nodeMail transporter
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: process.env.MAIL_USER,
          clientId: process.env.G_CLIENT_ID,
          clientSecret: process.env.G_CLIENT_SECRET,
          accessToken: gApiAccessToken.token,
        },
      });

      const mailOptions: SendMailOptions = {
        to: process.env.MAIL_RECIEVER,
        subject: `[Portfolio Contact] [${value.name}] ` + value.subject,
        text: `Email: ${value.email} \n\nMessage: ${value.message}`,
        priority: 'normal',
      };

      // send mail
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          return res
            .status(500)
            .json({ message: 'Server error! Unable to send your message' });
        }
        return res.sendStatus(200);
      });

    } catch (err) {
      return res
        .status(500)
        .json({ message: 'Error while sending contact email' });
    }
  }
}
