---
title: '#29. "Sender-Lookup-Receiver" Pattern // interaction patterns'
---

_

Patt#29. "Sender-Lookup-Receiver" Pattern // interaction patterns

![Strpat00000034.gif](/img/Strpat00000034.gif)

_

**Typical object interactions**

\- sender.selectNextReceiver --> lookup.selectReceiver, followed by . . .

\- sender.invokeReceiver --> receiver.executeRequest

**Examples**

\- saleAnalysisWindow.lookupLineItem --> sale.lookupLineItem, followed by . . .

\- saleAnalysisWindow.calcLineItemProfit --> sale.calcProfit

**Combinations**

\- Superimpose upon participant - transaction - transaction line item.

\- Superimpose upon three (or more) interacting pattern players.

**Note**

\- This approach keeps lookup object simpler.

[Interaction patterns](/interaction-patterns.html)

[Patterns for building object models](/patterns-for-building-object-models.html)
