---
title: '#6. "Transaction - Transaction Line Item" Pattern // transaction patterns'
---

_

Patt#6. "Transaction - Transaction Line Item" Pattern // transaction patterns

![Strpat00000009.gif](/img/Strpat00000009.gif)

_

**Typical object interactions**

\- howManyOverInterval --> calcForMe

\- howMuchOverInterval --> calcForMe

\- calcOverLineItems --> calcForMe

\- rankLineItems --> rateMe

**Examples**

\- Transaction: agreement, assignment, authorization, contract, delivery, deposit, incident, inquiry, order, payment, problem, report, purchase, refund, registration, rental, reservation, sale, shift, shipment, subscription, time charge, title, withdrawal.

\- Transaction - transaction line item: deposit - deposit line item; order - order line item; payment - payment line item; rental - rental line item; sale - sale line item; shipment - shipment line item; withdrawal - withdrawal line item.

**Combinations**

**[](/3-participant-transaction-pattern-transaction-patterns.html)**[Patt#3.](/3-participant-transaction-pattern-transaction-patterns.html) "Participant-Transaction"

[Patt#4.](/4-place-transaction-pattern-transaction-patterns.html) "Place-Transaction"

[Patt#5.](/5-specific-item-transaction-pattern-transaction-patterns.html) "Specific Item - Transaction"

[Patt#7.](/7-transaction-subsequent-transaction-pattern-transaction-patterns.html) "Transaction - Subsequent Transaction"

[Patt#8.](/8-transaction-line-item-subsequent-transaction-line-item-pattern-transaction-patterns.html) "Transaction Line Item - Subsequent Transaction Line Item"

[Patt#9.](/9-item-line-item-pattern-transaction-patterns.html) "Item - Line Item"

[Patt#10.](/10-specific-item-line-item-pattern-transaction-patterns.html) "Specific Item - Line Item."

Related strategies:

[Str#17.](/selecting-objects-pattern-players.html) "Select Transactions" Strategy

[Str#54.](/pattern-players-what-i-know.html) "Establish Transaction Attributes" Strategy

[Str#76.](/pattern-players-who-i-know.html) "Establish Transaction Object Connections" Strategy

[Str#96.](/pattern-players-what-i-do.html) "Establish Transaction Services" Strategy

[Transaction patterns](/transaction-patterns.html)

[Patterns for building object models](/patterns-for-building-object-models.html)
