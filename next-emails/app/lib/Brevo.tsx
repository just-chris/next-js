import * as brevo from "@getbrevo/brevo";

const instanceAPI = new brevo.TransactionalEmailsApi()
const senderAPI = new brevo.SendersApi()

instanceAPI.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY as string
)
senderAPI.setApiKey(
  brevo.SendersApiApiKeys.apiKey,
  process.env.BREVO_API_KEY as string
)

const smtpEmail = new brevo.SendSmtpEmail()


type Params = {
 subject: string
 email: {email: string; name: string} []
 message: string
}

export const sendEmail = async ({subject, email, message}: Params) => {

  try {


    smtpEmail.subject = 'Test Email'
    smtpEmail.to = [
      {email: 'just.goldwing@gmail.com', name: 'Goldwing'}
    ]
    smtpEmail.htmlContent = `<html> 
    <head>
    </head>
    <body>
    <h1>Test Email</h1>
    </body>
    </html>`
    smtpEmail.sender = {name: 'Cristian', email: 'cristian.maldonado@entelgy.com'}

    await instanceAPI.sendTransacEmail(smtpEmail)
  } catch (error) {
    console.error(error)
  }
}