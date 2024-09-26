<p align="center">
  <a href="https://developers.google.com/ad-manager/api/start" target="blank"><img src="https://developers.google.com/ads/images/logo_admanager_192px.svg" width="120" alt="Ad Manager Logo" /></a>
</p>
  <p align="center"><a href="https://developers.google.com/ad-manager/api/start" target="_blank">Google Ad Manager API</a> Client Library for NodeJs.</p>
    <p align="center">
<a href="https://www.npmjs.com/~guardian" target="_blank"><img src="https://img.shields.io/npm/v/@guardian/google-admanager-api.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~guardian" target="_blank"><img src="https://img.shields.io/npm/l/@guardian/google-admanager-api.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~guardian" target="_blank"><img src="https://img.shields.io/npm/dm/@guardian/google-admanager-api.svg" alt="NPM Downloads" /></a>
</p>

## Description

Forked from https://github.com/Niurmiguel/google-admanager-api as the original package was not maintained.

Developers can use the Google Ad Manager API to build applications that manage inventory, create orders, pull reports, and more.

### Installing the library

```bash
$ npm install @guardian/google-admanager-api
$ yarn add @guardian/google-admanager-api
$ pnpm add @guardian/google-admanager-api
```
### Overview

#### Authentication

All Google Ad Manager API calls must be authorized through OAuth2 an open standard that allows users to grant permissions to third-party applications, so the application can interact with web services on the user's behalf. OAuth2 enables your Ad Manager API client application to access a user's Ad Manager account without having to handle or store the user's username or password.

##### Generate service account credentials

```typescript

const credential = new GoogleSACredential({
    "type": "service_account",
    "project_id": "...",
    "private_key_id": "...",
    "private_key": "...",
    "client_email": "...",
    "client_id": "...",
    "auth_uri": "...",
    "token_uri": "...",
    ...
});

//or

const credential = new GoogleSAFileCredential('./credentials.json');

```

##### Generate user account credentials

Using the API on behalf of a real user is slightly more complicated than using a service account. The user must grant your application access to their Ad Manager account. This is done by redirecting the user to Google's OAuth2 consent screen, where they will be asked to grant your application access to their Ad Manager account.

There is an [example](/examples/authentication/refresh-token.ts) of how to generate user account credentials in the example folder.

It uses the [refresh token generation example](/examples/authentication/generate-refresh-token.ts) to generate the refresh token.

There is also an option to use an [access token](/examples/authentication/access-token.ts) directly. As access tokens are short-lived, you will need to refresh them yourself.

##### Use a client library

```typescript

const adManagerClient = new AdManagerClient('networkCode',credential,'applicationName');

const orderService = await adManagerClient.getService("OrderService");
const statement = new StatementBuilder().limit(10);
const orderPage = await orderService.getOrdersByStatement(statement.toStatement())

/**
 * {
 *  results: [],
 *  totalResultSetSize: 0,
 *  startIndex: 0
 * }
 * /
```

##### Options

<table>
  <tr>
    <td><code><b>networkCode</b></code></td>
    <td><code>Number</code></td>
    <td>The network code of the network being addressed (<b>required</b>).</td>
  </tr>
  <tr>
    <td><code><b>credential</b></code></td>
    <td><code>SACredential</code></td>
    <td>OAuth2 credential (<b>required</b>).</td>
  </tr>
  <tr>
    <td><code><b>applicationName</b></code></td>
    <td><code>String</code></td>
    <td>An arbitrary string name identifying your application. This will be shown in Google's log files. For example: "My Inventory Application" or "App_1" (<b>optional</b>).</td>
  </tr>
</table>

### Debugging

Enable request and response logging by setting `logRequests` and/or `logResponses` to `true` on the service object.

```typescript
const orderService = await adManagerClient.getService("OrderService");
orderService.logRequests = true;
orderService.logResponses = true;
```

### Known issues/gotchas

#### SOAP requires object properties to be in the correct order
The properties of objects sent using this library need to be in the correct order (the same order as the type definitions) or you may encounter an `Unmarshalling Error` response.

For example for a [line item](lib/client/common/types/lineItemSummary.type.ts) the `orderName` must be before the `startDateTime`.
```ts
// will not work
lineItemService.createLineitem({
  priority: 12,
  orderId: 123,
  ...
})

//must be
lineItemService.createLineitem({
  orderId: 123,
  priority: 12,
  ...
})
```

#### Some objects need additional attributes
In some cases where multiple shapes of objects are accepted, the type need to be speficied under a special `attributes` property.

For example for custom targeting the objects need to have their type specified whether they are a `CustomCriteriaSet` or `CustomTargeting` like so:
```ts
const customTargeting: CustomCriteriaSet = {
  attributes: {
    "xsi:type": "CustomCriteriaSet",
  },
  logicalOperator: LogicalOperator.OR,
  children: [{
    attributes: {
      "xsi:type": "CustomCriteriaSet",
    },
    logicalOperator: LogicalOperator.AND,
    children: [{
      attributes: {
        "xsi:type": "CustomCriteria",
      },
      keyId: 123,
      valueIds: [123],
      operator: ComparisonOperator.IS,
    }],
  }],
};

lineItemService.createLineitem({
  ...
  targeting: {
    customTargeting
  }
  ...
})
```

This also applies to creatives, [as there are many types of creatives](https://github.com/guardian/google-admanager-api/blob/main/lib/client/services/creative/creative.type.ts#L1205):
```ts
const creative: Creative = {
  attributes: {
    "xsi:type": "ThirdPartyCreative",
  },
  advertiserId,
  name: creativeName,
  size,
  snippet,
  isSafeFrameCompatible: false,
};
```
