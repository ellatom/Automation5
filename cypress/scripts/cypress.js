const cypress = require('cypress');
const fse = require('fs-extra');
const { merge } = require('mochawesome-merge');
const generator = require('mochawesome-report-generator');
const Email = require ('../support/utils/Email');

async function runTests() {
  await fse.remove('mochawesome-report'); // remove the report folder
  const { totalFailed } = await cypress.run(); // get the number of failed tests
  const jsonReport = await merge(); // generate JSON report
  await generator.create(jsonReport);
  await new Email().sendEmail();
}

(async ()=>{
  await runTests();
})();
