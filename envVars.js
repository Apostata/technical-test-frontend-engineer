const dotEnv = require("dotenv");

let envPath = ".env";
const envs = dotEnv.config({ path: envPath });
let environments = Object.keys(envs.parsed).reduce((acum, env) => {
  return (acum = { ...acum, [env]: envs.parsed[env] });
}, {});
environments = { ...environments };
console.log(environments);
module.exports = environments;
