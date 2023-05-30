/*
    Task
    - Implement a switch statement to check against `env` environmental variable.
    - If `env` is "DEV", no change to `databaseCredential`.
    - If `env` is "STAGE", modify `databaseCredential` to "stageuser:password".
    - If `env` is "PROD", modify `databaseCredential` to "produser:password"
    
*/

const env = "DEV"; // Toggle between these possible values "DEV" | "STAGE" | "PROD"
let databaseCredential = "devuser:password";

//Method 1: Sample value for env (you can replace it with the actual environmental variable value)


if (env === "DEV") {
  // No change to databaseCredential
} 
else if (env === "STAGE") {
  databaseCredential = "stageuser:password";} 
else if (env === "PROD") {
  databaseCredential = "produser:password";}
else {
  console.log("Invalid environment");}

console.log(`Database credential for environment ${env} is ${databaseCredential}`);


//Method 2: Sample value for env (you can replace it with the actual environmental variable value)

switch (env) {
  case "DEV":
    // No change to databaseCredential
    break;
  case "STAGE":
    databaseCredential = "stageuser:password";
    break;
  case "PROD":
    databaseCredential = "produser:password";
    break;
  default:
    console.log("Invalid environment");
}

console.log(`Database credential for environment ${env} is ${databaseCredential}`);



