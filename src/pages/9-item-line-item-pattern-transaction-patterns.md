---
title: '#9. "Item - Line Item" Pattern // transaction patterns'
---

_

Patt#9. "Item - Line Item" Pattern // transaction patterns

![Strpat00000012.gif](/img/Strpat00000012.gif)

_

**Typical object interactions**

\- howMany --> getQuantity

\- calcOverLineItems --> calcForMe

\- rankLineItems --> rateMe

**Examples**

\- (with transaction line items) item - order line item; item - payment line item; item - rental line item; item - sale line item; item - shipment line item (with container line items) item - bin line item; item - warehouse line item.

**Combinations**

**[](/6-transaction-transaction-line-item-pattern-transaction-patterns.html)**[Patt#6.](/6-transaction-transaction-line-item-pattern-transaction-patterns.html) "Transaction - Transaction Line Item"

[Patt#8.](/8-transaction-line-item-subsequent-transaction-line-item-pattern-transaction-patterns.html) "Transaction Line Item - Subsequent Transaction Line Item"

[Patt#15.](/15-container-container-line-item-pattern-aggregate-patterns.html) "Container - Container Line Item."

Related strategies:

[Str#16.](/selecting-objects-pattern-players.html) "Select Tangible Things" Strategy

[Str#19.](/selecting-objects-pattern-players.html) "Select Items and Specific Items" Strategy

[Str#55.](/pattern-players-what-i-know.html) "Establish Item and Specific Item Attributes" Strategy

[Str#77.](/pattern-players-who-i-know.html) "Establish Item and Specific Item Object Connections" Strategy

[Str#97.](/pattern-players-what-i-do.html) "Establish Item & Specific Item Services" Strategy

[Transaction patterns](/transaction-patterns.html)

[Patterns for building object models](/patterns-for-building-object-models.html)
