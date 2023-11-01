import emailjs from 'emailjs-com';


const apiKeys = {
  TEMPLATE_ID: 'template_zPwHn93x',
  USER_ID: 'user_DIr9bd3xJjXDGfwvi9FYf',
}

export const sendEmail = (templateParams) => {
  templateParams.replyTo = templateParams.email;

  return emailjs
  .send('gmail', apiKeys.TEMPLATE_ID, templateParams, apiKeys.USER_ID)
  .then(
    result => {
      console.log(result.text)
    },
    error => {
      console.log(error.text)
    }
  )
}