---
layout: base.njk
title: '#30. "Caller - Dispatcher - Caller Back" Pattern // interaction patterns'
permalink: '/30-caller-dispatcher-caller-back-pattern-interaction-patterns.html'
---

_

Patt#30. "Caller - Dispatcher - Caller Back" Pattern // interaction patterns

![Strpat00000035.gif](/img/Strpat00000035.gif)

_

**Typical object interactions**

\- caller.requestCallBack --> dispatcher.selectCallerBack --> rateMe, followed by . . .

\- dispatcher.activateCallerBack --> callerBack.makeCallBack --> caller.receiveCallBack

**Examples**

\- customer - taxi dispatcher - taxi (in a simulation system)

\- inbound call - call back server - call back unit

\- requester - job shop - contractor (in a simulation system).

**Combinations**

\- Superimpose upon three (or more) interacting pattern players.

[Interaction patterns](/interaction-patterns.html)

[Patterns for building object models](/patterns-for-building-object-models.html)
