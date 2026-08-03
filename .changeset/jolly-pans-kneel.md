---
"@guardian/google-admanager-api": major
---

Updates to track v202605 of the Google Ad Manager Soap API

- Adds new fields from v202511 of the GAM SOAP API:
  - Creatives: Added ThirdPartyDataDeclarationStatus
  - Line Items: Added PublisherProvidedSignalsTargeting
  - Companies: Added verifiedExchangeAdvertiserdId
- Removes settings field from Company type
- Adds deliveryAllocationProfileId to LineItemSummary and ProposalLineItem types

- Switches the default version of the GAM API to v202605 (the latest version available at the time)
