---
layout: base.njk
title: '#27. "Publisher-Subscriber" Pattern // interaction patterns'
permalink: '/27-publisher-subscriber-pattern-interaction-patterns.html'
---

_

Patt#27. "Publisher-Subscriber" Pattern // interaction patterns

![Strpat00000032.gif](/img/Strpat00000032.gif)

_

**Typical object interactions**

\- notifySubscribers --> receiveNotification (which, in turn, invokes executeAction)

**Examples**

\- problem-domain object, human-interaction object, data-management object, system-interaction object

\- model-document; model-view

\- "subsystem one" object - "subsystem two" object.

**Combinations**

\- Superimpose on a problem-domain pattern player (publisher) and its respective human-interaction, data-management, and system-interaction pattern players (subscribers).

[Interaction patterns](/interaction-patterns.html)

[Patterns for building object models](/patterns-for-building-object-models.html)
