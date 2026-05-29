---
layout: base.njk
title: '#15. "Container - Container Line Item" Pattern // aggregate patterns'
permalink: '/15-container-container-line-item-pattern-aggregate-patterns.html'
---

_

Patt#15. "Container - Container Line Item" Pattern // aggregate patterns

![Strpat00000019.gif](/img/Strpat00000019.gif)

_

**Typical object interactions**

\- howMany --> calcForMe

\- calcOverLineItems --> calcForMe

\- rankLineItems --> rateMe

**Examples**

\- aircraft - aircraft line item; bin - bin line item; warehouse - warehouse line item.

**Combinations**

**[](/9-item-line-item-pattern-transaction-patterns.html)**[Patt#9.](/9-item-line-item-pattern-transaction-patterns.html) "Item - Line Item"

[Patt#10.](/10-specific-item-line-item-pattern-transaction-patterns.html) "Specific Item - Line Item."

\- Also, when "container" is a participant, place, or specific item:

[Patt#2.](/2-actor-participant-pattern-transaction-patterns.html) "Actor-Participant"

[Patt#3.](/3-participant-transaction-pattern-transaction-patterns.html) "Participant-Transaction"

[Patt#4.](/4-place-transaction-pattern-transaction-patterns.html) "Place-Transaction"

[Patt#5.](/5-specific-item-transaction-pattern-transaction-patterns.html) "Specific Item - Transaction"

[Patt#11.](/11-item-specific-item-pattern-transaction-patterns.html) "Item - Specific Item."

**Notes**

\- When working with containers within containers, apply this pattern to the smallest container in that domain, within your system's responsibilities.

Related strategies:

[Str#22.](/selecting-objects-pattern-players.html) "Select Container Objects" Strategy

[Str#103.](/where-to-put-a-service-what-i-do.html) "Service in the Smallest Applicable Container" Strategy

[Aggregate patterns](/aggregate-patterns.html)

[Patterns for building object models](/patterns-for-building-object-models.html)
