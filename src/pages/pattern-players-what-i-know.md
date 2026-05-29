---
layout: base.njk
title: 'Pattern players (what I know)'
permalink: '/pattern-players-what-i-know.html'
---

**

Pattern players (what I know)

**

_Str#52. "Establish Actor and Participant Attributes" Strategy // establishing responsibilities / what I know (pattern players)_

\- For actor, consider: name, address, phone.

\- For participants, include: number, date and time (perhaps an ending date and time), password, authorization level.

Related patterns:

[Patt#2.](/2-actor-participant-pattern-transaction-patterns.html) "Actor-Participant"

[Patt#3.](/3-participant-transaction-pattern-transaction-patterns.html) "Participant-Transaction"

_Str#53. "Establish Place Attributes" Strategy // establishing responsibilities / what I know (pattern players)_

\- For location, include: number, name, address (perhaps latitude, longitude, altitude).

Related pattern: Patt#4.\_4\_Place\_Transaction\_Pattern\_transaction\_patterns "Place-Transaction"

_Str#54. "Establish Transaction Attributes" Strategy // establishing responsibilities / what I know (pattern players)_

\- For transactions, include: number, date, time, status.

\- For line items, include: quantity (if it knows an item, rather than a specific item), status.

Related patterns:

[Patt#3.](/3-participant-transaction-pattern-transaction-patterns.html) "Participant-Transaction"

[Patt#4.](/4-place-transaction-pattern-transaction-patterns.html) "Place-Transaction"

[Patt#5.](/5-specific-item-transaction-pattern-transaction-patterns.html) "Specific Item - Transaction"

[Patt#6.](/6-transaction-transaction-line-item-pattern-transaction-patterns.html) "Transaction - Transaction Line Item"

[Patt#7.](/7-transaction-subsequent-transaction-pattern-transaction-patterns.html) "Transaction - Subsequent Transaction"

[Patt#8.](/8-transaction-line-item-subsequent-transaction-line-item-pattern-transaction-patterns.html) "Transaction Line Item - Subsequent Transaction Line Item"

_Str#54a. "Transaction Times" Strategy // establishing responsibilities / what I know_

\- A transaction object corresponds to a moment in time (e.g., sale) or an interval of time (e.g., rental).

\- A moment in time (dateTime, dateTimeOfBirth, dateTimeOfManufacture, effectiveDateTime, plannedDateTime, actualDateTime)

\- An interval of time (interval, effectiveInterval, dateTime + duration)

\- An interval of time, expressed as a start/stop combination (dateTimeStart, dateTimeEnd; dateTimeIn, dateTimeOut; dateTimeOut, dateTimeBack; effectiveDateTime, expirationDateTime). Fine detail: the second attribute in these pairs belongs in a transaction line item, when different values may apply to each line item.

_Str#54b. "An Attribute? Or Something More?" Strategy // establishing responsibilities / what I know_

\- Is a person's hobby (or hobbies) just an attribute? Or something more?

\- Value. Just need a current value, based upon an enumeration of values? Add an attribute. Describe the enumeration of values in text. Example: Hobbyist, with a "hobbies" attribute

\- Standard Catalog Description. Need standard catalog descriptions you can choose from? Add a "standard catalog description" class with whatever descriptive attributes you need. Each "standard catalog description" object captures attribute values which may apply again and again. Example: Hobbyist -- Hobby (attributes: type, name, description)

\- History. Need history? Add a transaction object, to remember intervals of activity. Example: Hobbyist – Hobby Activity – Hobby

_Str#55. "Establish Item and Specific Item Attributes" Strategy // establishing responsibilities / what I know (pattern players)_

\- For items, include: name, description, dimensions, size, universal product code (UPC), weight.

\- For specific items, include: serial number, purchase date. (It might know a custom value, while an item might know a default value.)

Related patterns:

[Patt#9.](/9-item-line-item-pattern-transaction-patterns.html) "Item - Line Item"

[Patt#10.](/10-specific-item-line-item-pattern-transaction-patterns.html) "Specific Item - Line Item"

[Patt#11.](/11-item-specific-item-pattern-transaction-patterns.html) "Item - Specific Item"

_Str#56. "Establish Interacting System and Device Attributes" Strategy // establishing responsibilities /what I know (pattern players)_

\- For another system or device, include: number, name, operational state.

\- For its companion object, in the system interaction component, include: logon name, password, phone numbers, address.

[Establishing responsibilities / what I know](/establishing-responsibilities-what-i-know.html)

[Strategies for building object models](/strategies-for-building-object-models.html)
