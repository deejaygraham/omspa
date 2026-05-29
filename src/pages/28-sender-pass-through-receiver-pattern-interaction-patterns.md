---
title: '#28. "Sender - Pass Through - Receiver" Pattern // interaction patterns'
---

_

Patt#28. "Sender - Pass Through - Receiver" Pattern // interaction patterns

![Strpat00000033.gif](/img/Strpat00000033.gif)

_

**Typical object interactions**

\- sender.invokeReceiver --> passThrough.invokeReceiver --> receiver.executeRequest

**Examples**

\- saleLineItem.qualForDiscount --> sale.qualForDiscount --> customer. qualForDiscount

**Combinations**

\- Superimpose upon participant - transaction - transaction line item.

\- Superimpose upon any three (or more) interacting pattern players.

**Notes**

\- Sender is loosely coupled to the other two.

[Interaction patterns](/interaction-patterns.html)

[Patterns for building object models](/patterns-for-building-object-models.html)
