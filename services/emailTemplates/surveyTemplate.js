const keys = require("../../config/keys");
module.exports = survey => {
  return `
  <html>
  <body>
  <div style="text-align: center;">
  <h3>Please answer</h3>
  <p>${survey.body}</p>
  <div>
  <a href="${keys.redirectDomain}/api/surveys">Yes</a>
  </div>
  <div>
  <a href="${keys.redirectDomain}/api/surveys">No</a>
  </div>
  </div>
  </body>
  </html>
  `;
};
