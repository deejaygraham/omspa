---
layout: base.njk
title: '#7. "Transaction - Subsequent Transaction" Pattern // transaction
patterns'
permalink: '/7-transaction-subsequent-transaction-pattern-transaction-patterns.html'
---

_

Patt#7. "Transaction - Subsequent Transaction" Pattern // transaction patterns

![Strpat00000010.gif](/img/Strpat00000010.gif)

_

**Typical object interactions**

\- howMany --> calcForMe

\- howMuch --> calcForMe

\- calcOverSubsequentTransactions --> calcForMe

\- rankSubsequentTransactions --> rateMe

**Examples**

\- Transaction: agreement, assignment, authorization, contract, delivery, deposit, incident, inquiry, order, payment, problem, report, purchase, refund, registration, rental, reservation, sale, shift, shipment, subscription, time charge, title, withdrawal.

\- Transaction - subsequent transaction: application-issue; intermediate result - final result; order-shipment; purchase-payment; reservation-sale; traffic citation - payment.

**Combinations**

**[](/3-participant-transaction-pattern-transaction-patterns.html)**[Patt#3.](/3-participant-transaction-pattern-transaction-patterns.html) "Participant-Transaction"

[Patt#4.](/4-place-transaction-pattern-transaction-patterns.html) "Place-Transaction"

[Patt#5.](/5-specific-item-transaction-pattern-transaction-patterns.html) "Specific Item - Transaction"

[Patt#6.](/6-transaction-transaction-line-item-pattern-transaction-patterns.html) "Transaction - Transaction Line Item."

**Notes**

\- Work out transactions in time sequence (the order they usually occur in).

\- If subsequent transaction and its line item objects correspond 1-to-1 with transaction and its line item objects, combine them.

Related strategies:

[Str#17.](/selecting-objects-pattern-players.html) "Select Transactions" Strategy

[Str#54.](/pattern-players-what-i-know.html) "Establish Transaction Attributes" Strategy

[Str#76.](/pattern-players-who-i-know.html) "Establish Transaction Object Connections" Strategy

[Str#96.](/pattern-players-what-i-do.html) "Establish Transaction Services" Strategy

[Transaction patterns](/transaction-patterns.html)

[Patterns for building object models](/patterns-for-building-object-models.html)
