import "./formSubmit.js"
console.log("formSubmit loaded...");

import Amplify, {Auth} from "aws-amplify";
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);
Auth.configure(awsconfig);





