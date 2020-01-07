const axios = require('axios')
require('dotenv').config()

module.exports = function(context, callback) {
  if (!context.body || !context.body.email) {
    callback('Missing email parameter')
    return
  }

  const { email } = context.body

  const regionName = 'us1'
  const apiKey = 'xxxxxxxxxx'
  const listId = 'xxxxxxxxxx'
  const url = `https://${regionName}.api.mailchimp.com/3.0/lists/${listId}/members/`

  axios
    .post(
      url,
      {
        status: 'subscribed',
        email_address: email,
      },
      {
        headers: {
          Authorization: `apikey ${apiKey}`,
        },
      }
    )
    .then(() => {
      callback(null, { message: 'Email subscribed!' })
    })
    .catch(error => {
      callback(error.response.data)
    })
}
