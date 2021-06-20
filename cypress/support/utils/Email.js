
class Email {

	async sendEmail() {
		const DOMAIN = "sandbox4d32207961224db5b888c6c04fdac5b3.mailgun.org";//sandbox87b31a1337084192b4efc84126e1cb12.mailgun.org";
		const api_key = "key-9e4c64d3baa9236c20208434d0fb06a2";//"d1e8231f1809af85c251968b74a7d6d5-24e2ac64-f9ef2521";
		const mailgun = require('mailgun-js')({ apiKey: api_key, domain: DOMAIN });
		
		let filePath = require('/home/ellatom/Desktop/HTMLSENDBOX/NodeServer/CypressAutomation/mochawesome-report/mochawesome.json');

		let emailInfo = {
			from: "Mailgun Sandbox <postmaster@sandbox4d32207961224db5b888c6c04fdac5b3.mailgun.org>",//"Mailgun Sandbox <postmaster@sandbox87b31a1337084192b4efc84126e1cb12.mailgun.org>",
			to: "idan@zest.is",//"ella271@gmail.com",
			subject: 'Cypress Test Report'+new Date(),
			text: JSON.stringify(filePath.stats)
		};
		console.log('Sending email after this');
	
		mailgun.messages().send(emailInfo, function (error, body) {
			console.log(body);
		});
	}
}
module.exports = Email;
