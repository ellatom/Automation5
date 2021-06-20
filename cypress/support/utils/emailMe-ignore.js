const DOMAIN = "sandbox87b31a1337084192b4efc84126e1cb12.mailgun.org";
const api_key = "d1e8231f1809af85c251968b74a7d6d5-24e2ac64-f9ef2521";
const mailgun = require('mailgun-js')({ apiKey: api_key, domain: DOMAIN });

const fs = require('fs');
let filePath = require('/home/ellatom/Desktop/HTMLSENDBOX/NodeServer/CypressAutomation/mochawesome-report/mochawesome.json');


// fs.readFile(filePath, { encoding: 'utf-8' }, function (err, data) {
//     if (!err) {
        // console.log('received data: ' + data);
        console.log(filePath.stats);
        let emailInfo = {
            from: "Mailgun Sandbox <postmaster@sandbox87b31a1337084192b4efc84126e1cb12.mailgun.org>",
            to: "ella271@gmail.com",
            subject: 'Cypress Test Report',
            text: JSON.stringify(filePath.stats)
        };
        console.log('Sending email after this');
        mailgun.messages().send(emailInfo, (error, body) => {
            console.log(body);
        });
//     } else {
//         console.log(err);
//     }
// });
