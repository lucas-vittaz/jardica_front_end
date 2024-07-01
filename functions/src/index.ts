import cors from 'cors';
import express = require('express');
import * as functions from 'firebase-functions';
import * as fs from 'fs';
import * as handlebars from 'handlebars';
import * as nodemailer from 'nodemailer';
import * as path from 'path';

const app = express();
app.use(cors({ origin: ['http://localhost:4200', 'https://www.jardica.net', 'https://jardica-front-end.web.app'] }));

// Configurez le transporteur Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: functions.config().email.user,
    pass: functions.config().email.pass,
  },
});

// Lire et compiler les templates d'email
const userTemplateSource = fs.readFileSync(
  path.join(__dirname, 'templates/user-email.html'),
  'utf8'
);
const userTemplate = handlebars.compile(userTemplateSource);

const jardicaTemplateSource = fs.readFileSync(
  path.join(__dirname, 'templates/jardica-email.html'),
  'utf8'
);
const jardicaTemplate = handlebars.compile(jardicaTemplateSource);

// Servir les fichiers statiques (logo)
// app.use('/assets', express.static(path.join(__dirname, 'assets')));

const whitelist = [
  'http://localhost:4200',
  'https://www.jardica.net',
  'https://jardica-front-end.web.app'
];

const corsOptions = {
  origin: (
    origin: string | undefined,
    callback: (err: Error | null, allow?: boolean) => void
  ) => {
    if (whitelist.indexOf(origin ?? '') !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

const corsHandler = cors(corsOptions);

export const sendContactEmail = functions
  .region('europe-west1')
  .https.onRequest((req, res) => {
    corsHandler(req, res, () => {
      const { name, firstName, category, interventionPlace, email, phone, message } = req.body;

      // Préparer l'email pour l'utilisateur
      const userEmailOptions = {
        from: 'lucasvittaz.pro@gmail.com',
        to: email,
        subject: 'Confirmation de votre demande',
        html: userTemplate({ name, email, phone, message }),
      };

      // Préparer l'email pour le restaurateur
      const jardicaEmailOptions = {
        from: 'lucasvittaz.pro@gmail.com',
        to: 'lucasvittaz.pro@gmail.com',
        subject: 'Nouvelle demande de contact',
        html: jardicaTemplate({ name, firstName, category, interventionPlace, email, phone, message }),
      };

      // Envoyer les emails
      Promise.all([
        transporter.sendMail(userEmailOptions),
        transporter.sendMail(jardicaEmailOptions),
      ])
        .then(() => {
          return res
            .status(200)
            .json({ message: 'Emails envoyés avec succès' }); // Utiliser JSON pour la réponse
        })
        .catch((error) => {
          return res.status(500).json({ error: error.toString() }); // Utiliser JSON pour la réponse en cas d'erreur
        });
    });
  });
