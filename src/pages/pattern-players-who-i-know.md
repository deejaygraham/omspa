---
layout: base.njk
title: 'Pattern players (who I know)'
permalink: '/pattern-players-who-i-know.html'
---

**

Pattern players (who I know)

**

_Str#74. "Establish Actor and Participant Object Connections" Strategy // establishing responsibilities / who I know (pattern players)_

\- For an actor, include an object connection to: its participants.

\- For a participant, include an object connection to: its actor, its transactions.

Related patterns:

[Patt#2.](/2-actor-participant-pattern-transaction-patterns.html) "Actor-Participant"

[Patt#3.](/3-participant-transaction-pattern-transaction-patterns.html) "Participant-Transaction"

_Str#75. "Establish Place Object Connections" Strategy // establishing responsibilities / who I know (pattern players)_

\- For a location, include object connections to objects which come to rest at a location . . . or are contained by a location.

\- For a location, include object connections to transaction objects, to show that location's participation in that transaction.

Related pattern: Patt#4.\_4\_Place\_Transaction\_Pattern\_transaction\_patterns "Place-Transaction"

_Str#76. "Establish Transaction Object Connections" Strategy // establishing responsibilities / who I know (pattern players)_

\- For a transaction, include object connections to: participants, transaction line items, a companion transaction, one that occurs at the same moment in time.

\- For a transaction line item, include object connections to: the transaction, a companion "item description" object, a subsequent transaction line item.

Related patterns:

[Patt#3.](/3-participant-transaction-pattern-transaction-patterns.html) "Participant-Transaction"

[Patt#4.](/4-place-transaction-pattern-transaction-patterns.html) "Place-Transaction"

[Patt#5.](/5-specific-item-transaction-pattern-transaction-patterns.html) "Specific Item - Transaction"

[Patt#6.](/6-transaction-transaction-line-item-pattern-transaction-patterns.html) "Transaction - Transaction Line Item"

[Patt#7.](/7-transaction-subsequent-transaction-pattern-transaction-patterns.html) "Transaction - Subsequent Transaction"

[Patt#8.](/8-transaction-line-item-subsequent-transaction-line-item-pattern-transaction-patterns.html) "Transaction Line Item - Subsequent Transaction Line Item"

_Str#77. "Establish Item and Specific Item Object Connections" Strategy // establishing responsibilities / who I know (pattern players)_

\- For an item, include object connections to: specific item, transaction line item (if specific item is not needed in the model), container line item (if specific item is not needed in the model).

\- For a specific item, include object connections to: item, transaction line item, container line item.

Related patterns:

[Patt#9.](/9-item-line-item-pattern-transaction-patterns.html) "Item - Line Item"

[Patt#10.](/10-specific-item-line-item-pattern-transaction-patterns.html) "Specific Item - Line Item"

[Patt#11.](/11-item-specific-item-pattern-transaction-patterns.html) "Item - Specific Item"

_Str#78. "Establish Interacting System or Device Object Connections" Strategy // establishing responsibilities / who I know (pattern players)_

\- For an interacting system or device:

. Include an object connection (expressed as attributes) between a PD object and is corresponding system interaction (SI) object.

[Establishing responsibilities / who I know](/establishing-responsibilities-who-i-know.html)

[Strategies for building object models](/strategies-for-building-object-models.html)
