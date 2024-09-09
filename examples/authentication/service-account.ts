import { AdManagerClient, GoogleSACredential } from "../../lib";

const credential = new GoogleSACredential({
  type: "service_account",
  project_id: "...",
  private_key_id: "...",
  private_key: "...",
  client_email: "...",
  client_id: "...",
});

// or
// const credential = new GoogleSAFileCredential('./credentials.json');

const adManagerClient = new AdManagerClient(
  1234,
  credential,
  "applicationName",
);

const networkService = await adManagerClient.getService("NetworkService");

const networks = await networkService.getAllNetworks();

console.log(networks);
