---
layout: base.njk
title: '#31. "Gatekeeper-Request-Resource" Pattern // device patterns'
permalink: '/31-gatekeeper-request-resource-pattern-device-patterns.html'
---

_

Patt#31. "Gatekeeper-Request-Resource" Pattern // interaction patterns

![Strpat00000036.gif](/img/Strpat00000036.gif)

_

**Typical object interactions**

\- for gatekeeper and request

\- - addRequest --> create

\- - selectRequest --> rateMe

\- - rankRequests --> rateMe

\- for gatekeeper and resource

\- - sendRequestToResource --> executeRequest

\- - selectResource --> rateMe

**Examples**

\- comm line gatekeeper - comm line request - comm line.

**Combinations**

**[](/2-actor-participant-pattern-transaction-patterns.html)**[Patt#2.](/2-actor-participant-pattern-transaction-patterns.html) "Actor-Participant" (participant = gatekeeper)

[Patt#3.](/3-participant-transaction-pattern-transaction-patterns.html) "Participant-Transaction" (participant = gatekeeper)

[Patt#5.](/5-specific-item-transaction-pattern-transaction-patterns.html) "Specific Item - Transaction" (specific item = resource).

[Interaction patterns](/interaction-patterns.html)

[Patterns for building object models](/patterns-for-building-object-models.html)
