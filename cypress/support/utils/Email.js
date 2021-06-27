
class Email {

	async sendEmail() {
		const DOMAIN = "mydomain.mailgun.org";
		const api_key = "apikey";
		const mailgun = require('mailgun-js')({ apiKey: api_key, domain: DOMAIN });

		let filePath = require('../../../mochawesome-report/mochawesome.json');

		let emailInfo = {
			from: "Mailgun Sandbox <postmaster@mysandbox.mailgun.org>",
			to: "myemail",
			subject: 'Cypress Test Report' + new Date(),
			text: JSON.stringify(filePath.stats)
		};
		console.log('Sending email after this');

		mailgun.messages().send(emailInfo, function (error, body) {
			console.log(body);
		});
	}
}
module.exports = Email;
