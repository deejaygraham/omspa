---
title: '#8. "Transaction Line Item - Subsequent Transaction Line Item" Pattern //
transaction patterns'
---

_

Patt#8. "Transaction Line Item - Subsequent Transaction Line Item" Pattern // transaction patterns

![Strpat00000011.gif](/img/Strpat00000011.gif)

_

**Typical object interactions**

\- howMany --> calcForMe

\- howMuch --> calcForMe

\- calcOverSubsequentLineItems --> calcForMe

\- rankTransactions --> rateMe

**Examples**

\- Transaction line items: agreement, assignment, authorization, contract, delivery, deposit, incident, inquiry, order, payment, problem report, purchase, refund, registration, rental, reservation, sale, shift, shipment, subscription, time charge, title, withdrawal.

\- Transaction line item - subsequent transaction line item: order line item - shipment line item; reservation line item - rental line item; shipment line item - delivery line item.

**Combinations**

**[](/6-transaction-transaction-line-item-pattern-transaction-patterns.html)**[Patt#6.](/6-transaction-transaction-line-item-pattern-transaction-patterns.html) "Transaction - Transaction Line Item"

[Patt#9.](/9-item-line-item-pattern-transaction-patterns.html) "Item - Line Item"

[Patt#10.](/10-specific-item-line-item-pattern-transaction-patterns.html) "Specific Item - Line Item."

Related strategies:

[Str#17.](/selecting-objects-pattern-players.html) "Select Transactions" Strategy

[Str#54.](/pattern-players-what-i-know.html) "Establish Transaction Attributes" Strategy

[Str#76.](/pattern-players-who-i-know.html) "Establish Transaction Object Connections" Strategy

[Str#96.](/pattern-players-what-i-do.html) "Establish Transaction Services" Strategy

[Transaction patterns](/transaction-patterns.html)

[Patterns for building object models](/patterns-for-building-object-models.html)
