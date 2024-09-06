import { AdManagerClient, GoogleRefreshTokenCredential } from "../../lib";
import { generateRefreshToken } from "./generate-refresh-token";

const client_id = "INSERT_CLIENT_ID_HERE";
const client_secret = "INSERT_CLIENT_SECRET_HERE";
const redirect_uri = "INSERT_REDIRECT_URI_HERE";

const refresh_token = await generateRefreshToken(
  client_id,
  client_secret,
  redirect_uri,
);

if (!refresh_token) {
  throw new Error("Something went wrong. No refresh token was found.");
}

const credential = new GoogleRefreshTokenCredential(
  client_id,
  client_secret,
  refresh_token,
);

const adManagerClient = new AdManagerClient(
  1234,
  credential,
  "applicationName",
);

const networkService = await adManagerClient.getService("NetworkService");

const networks = await networkService.getAllNetworks();

console.log(networks);
