# @guardian/google-admanager-api

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
