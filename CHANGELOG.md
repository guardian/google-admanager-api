# @guardian/google-admanager-api

## 6.0.4

### Patch Changes

- 6db8740: Bump `soap` dependency to 1.6.4

## 6.0.3

### Patch Changes

- 75cdb58: No-op: force publishing a new version of the package after NPM permissions and workflow adjustments

## 6.0.2

### Patch Changes

- b692a54: Bumps axios from 1.13.2 to 1.13.5.
- 8d7c45b: Pin to resolve security vulnerabilities:

  @isaacs/brace-expansion@5: ^5.0.1
  storybook@10: ^10.1.10

- 93ddcd3: Bump dependency versions for axios, google-auth-library, soap

## 6.0.1

### Patch Changes

- c0cdaa2: Pin jws
- 0c6cc80: pin glob@10 to ^10.5.0 to address security vulnerability.

## 6.0.0

### Major Changes

- 4b9184a: Breaking change to operating system and browser version types to fix a bug

## 5.1.4

### Patch Changes

- e88d1fa: Fix type/validation issue with OperatingSystemVersionTargeting

## 5.1.3

### Patch Changes

- 4a654af: Bump `soap` version to 1.4.1 and `axios` version to 1.12.0

## 5.1.2

### Patch Changes

- 8867b20: Bump version of `google-auth-library` and `soap`

## 5.1.1

### Patch Changes

- 1631850: Bump google-auth-library dependency
- aee5b2b: Bump Typescript dependency

## 5.1.0

### Minor Changes

- 3378d9c: updates the type exports for Creatives

### Patch Changes

- 1fcc2ad: Bump google-auth-library dependency

## 5.0.2

### Patch Changes

- a16d3e9: bump soap and axios deps

## 5.0.1

### Patch Changes

- d34f9c2: Bumps version of direct dependency `soap` and pins version of transitive dependency `form-data`

## 5.0.0

### Major Changes

- 608176a: updating the types and exporting from index for ease of consumption

## 4.2.0

### Minor Changes

- 4b5cb34: Add CustomTargetingValue struct for type safety checks

## 4.1.0

### Minor Changes

- f7e415c: Bump version of typescript
- f728775: Bump version of google-auth

### Patch Changes

- e171e67: Fixes the getCreativeSetsByStatement method by updating its statement parameter name
- e82f913: Bump axios version

## 4.0.1

### Patch Changes

- 9635903: Bump soap version

## 4.0.0

### Major Changes

- 9dce427: Bump use of GAM API to v202505

## 3.1.5

### Patch Changes

- 5147105: Bump axios dependency version

## 3.1.4

### Patch Changes

- 280f75d: Bump version of soap to 1.1.11 in dependencies

## 3.1.3

### Patch Changes

- 65fd491: Added missing inventorySizeTargeting property to the Targeting object.

## 3.1.2

### Patch Changes

- 82f241e: Bump axios version

## 3.1.1

### Patch Changes

- 490788d: Export ApproveOrders from order.action

## 3.1.0

### Minor Changes

- 510fe85: Export additional types and actions used by ad-manager-tools

## 3.0.1

### Patch Changes

- cb1cd70: Upgrades `soap` dependency definition

## 3.0.0

### Major Changes

- f5380b7: Add superstruct for type safety checks for lineItems and align properties with what we receive from the api

### Patch Changes

- a39e56a: Enable stricter ts options

## 2.4.0

### Minor Changes

- 622bd84: endDateTime, customTargeting, deviceCategoryTargeting and geoTargeting to be optional as they are sometime not present in responses.

## 2.3.0

### Minor Changes

- 57855e3: feat: Support defining Google Ad Manager API version

## 2.2.0

### Minor Changes

- b2a9daa: Add ability to log XML requests and responses

## 2.1.0

### Minor Changes

- c833f29: Finish making all create functions accept partial types

## 2.0.0

### Major Changes

- 93b2093: Enforce special attributes needed by custom targeting interfaces

### Minor Changes

- ebe6348: Change `create*` function parameter types to be partials of their corresponding types
- 0059c37: Add options to authenticate with refresh and access tokens, also added examples on how to use them.

## 1.1.0

### Minor Changes

- 25a7881: appliedLabels and effectiveAppliedLabels should be optional, they are sometime not present in responses

## 1.0.0

### Major Changes

- ac1cc77: Initial Version
