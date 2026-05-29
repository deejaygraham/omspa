---
layout: base.njk
title: 'Pattern players (what I do)'
permalink: '/pattern-players-what-i-do.html'
---

**

Pattern players (what I do)

**

_Str#94. "Establish Actor and Participant Services" Strategy // establishing responsibilities / what I do (pattern players)_

\- For an actor or participant, include: calculate for me, rate me, is &ltvalue>.

\- For an actor as a collection, include: how many, how much, rank participants, calculate over participants (plus services to enforce business rules across that collection).

\- For a participant as a collection, include: how many, how much, rank transactions, calculate over transactions (plus services to enforce business rules across that collection).

Related patterns:

[Patt#2.](/2-actor-participant-pattern-transaction-patterns.html) "Actor-Participant"

[Patt#3.](/3-participant-transaction-pattern-transaction-patterns.html) "Participant-Transaction"

_Str#95. "Establish Place Services" Strategy // establishing responsibilities / what I do (pattern players)_

\- For a place, include: calculate for me, rate me, is &ltvalue>.

\- For a place as a collection, include: how many, how much, rank transactions, rank contents, rank container line items, calculate over transactions, calculate over contents, calculate over container line items (plus services to enforce business rules across that collection).

Related pattern: Patt#4.\_4\_Place\_Transaction\_Pattern\_transaction\_patterns "Place-Transaction"

_Str#96. "Establish Transaction Services" Strategy // establishing responsibilities / what I do (pattern players)_

\- For a transaction, include: calculate for me, rate me, is &ltvalue>.

\- For a transaction as a collection, include: how many, how much, rank transaction line items, rank subsequent transactions, calculate over transaction line items, calculate over subsequent transactions (plus services to enforce business rules across that collection).

\- For line items, include: calculate for me, rate me.

Related patterns:

[Patt#3.](/3-participant-transaction-pattern-transaction-patterns.html) "Participant-Transaction"

[Patt#4.](/4-place-transaction-pattern-transaction-patterns.html) "Place-Transaction"

[Patt#5.](/5-specific-item-transaction-pattern-transaction-patterns.html) "Specific Item - Transaction"

[Patt#6.](/6-transaction-transaction-line-item-pattern-transaction-patterns.html) "Transaction - Transaction Line Item"

[Patt#7.](/7-transaction-subsequent-transaction-pattern-transaction-patterns.html) "Transaction - Subsequent Transaction"

[Patt#8.](/8-transaction-line-item-subsequent-transaction-line-item-pattern-transaction-patterns.html) "Transaction Line Item - Subsequent Transaction Line Item"

_Str#97. "Establish Item & Specific Item Services" Strategy // establishing responsibilities / what I do (pattern players)_

\- For an item or a specific item, include: calculate for me, rate me, is &ltvalue>.

\- For an item as a collection, include: how many, how much, rank, calculate over specific items (plus services to enforce business rules across that collection).

\- For a specific item as a collection, include: how many, how much, rank line items, calculate over line items, (plus services to enforce business rules across that collection).

Related patterns:

[Patt#9.](/9-item-line-item-pattern-transaction-patterns.html) "Item - Line Item"

[Patt#10.](/10-specific-item-line-item-pattern-transaction-patterns.html) "Specific Item - Line Item"

[Patt#11.](/11-item-specific-item-pattern-transaction-patterns.html) "Item - Specific Item"

_Str#98. "Establish Interacting System or Device Services" Strategy // establishing responsibilities / what I do (pattern players)_

\- For an interacting system or device, include: activate, monitor (maintain), report, deactivate (plus calculate for me, rate me, is &ltvalue>).

\- For an interacting system or device as a collection, include: how many, how much, rank parts, calculate over parts.

\- Add a corresponding object in the system interaction (SI) component, to isolate specific interaction needs (examples: connect, logon, query, logoff, disconnect).

[Establishing responsibilities / what I do](/establishing-responsibilities-what-i-do.html)

[Strategies for building object models](/strategies-for-building-object-models.html)
