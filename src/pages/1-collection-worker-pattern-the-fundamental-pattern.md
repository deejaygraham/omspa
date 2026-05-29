---
layout: base.njk
title: '#1. "Collection-Worker" Pattern // the fundamental pattern'
permalink: '/1-collection-worker-pattern-the-fundamental-pattern.html'
---

_

Patt#1. "Collection-Worker" Pattern // the fundamental pattern

![Strpat00000003.gif](/img/Strpat00000003.gif)

_

**Overview**

\- Collection-worker is the fundamental object-model pattern.

\- All other object-model patterns are variations on this theme.

**Typical object interactions**

\- howMany --> calcForMe - howMuch --> calcForMe

\- calcOverWorkers --&gtcalcForMe

\- rankWorkers --&gtrateMe

**Other notes -** "aboutMe" helps one think about what other attributes might be needed - "calcForMe" helps one think about what specific calculations might be needed - "rankMe" helps one think about what ordering or comparison services might be - "rateMe" helps one think about what self-assessment services might be needed

Related strategy: [Str#21.](/selecting-objects-pattern-players.html) "Select Collections of Objects" Strategy

[Patterns for building object models](/patterns-for-building-object-models.html)
