import { OAuth2Client } from "google-auth-library";
import http from "http";
import open from "open";
import destroyer from "server-destroy";
import { SCOPE } from "../../lib/common/constants";

/**
 * Create a new OAuth2Client, and go through the OAuth2 content
 * workflow.  Return the full client to the callback.
 */
function getAuthenticatedClient(
  client_id: string,
  client_secret: string,
  redirect_uri: string,
) {
  return new Promise<OAuth2Client>((resolve, reject) => {
    const oAuth2Client = new OAuth2Client(
      client_id,
      client_secret,
      redirect_uri,
    );

    // Generate the url that will be used for the consent dialog.
    const authorizeUrl = oAuth2Client.generateAuthUrl({
      access_type: "offline",
      scope: SCOPE, // SCOPE for Ad Manager (dfp) API
      prompt: "consent", // refresh token is only returned on the first authorization
    });

    // Open an http server to accept the oauth callback. In this simple example, the
    // only request to our webserver is to /oauth2callback?code=<code>
    const server = http
      .createServer(async (req, res) => {
        try {
          if (req.url && req.url.indexOf("/oauth2callback") > -1) {
            // acquire the code from the querystring, and close the web server.
            const code = new URL(
              req.url,
              "http://localhost:3000",
            ).searchParams.get("code");

            console.log(`Code is ${code}`);

            res.end("Authentication successful! Please return to the console.");

            server.closeAllConnections();
            server.close();

            if (code === null) {
              throw new Error("Code is null");
            }

            // Now that we have the code, use that to acquire tokens.
            const oAuthRes = await oAuth2Client.getToken(code);

            // Make sure to set the credentials on the OAuth2 client.
            oAuth2Client.setCredentials(oAuthRes.tokens);

            console.info("Tokens acquired.");
            resolve(oAuth2Client);
          }
        } catch (e) {
          reject(e);
        }
      })
      .listen(3000, () => {
        // open the browser to the authorize url to start the workflow
        open(authorizeUrl, { wait: false }).then((cp) => cp.unref());
      });
    destroyer(server);
  });
}

export const generateRefreshToken = async (
  client_id: string,
  client_secret: string,
  redirect_uri: string,
) => {
  const authenticatedClient = await getAuthenticatedClient(
    client_id,
    client_secret,
    redirect_uri,
  );

  console.log(`Access Token: ${authenticatedClient.credentials.access_token}`);
  console.log(
    `Refresh Token: ${authenticatedClient.credentials.refresh_token}`,
  );

  return authenticatedClient.credentials.refresh_token;
};
