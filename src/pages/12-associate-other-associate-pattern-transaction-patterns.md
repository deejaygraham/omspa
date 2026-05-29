---
layout: base.njk
title: '#12. "Associate - Other Associate" Pattern // transaction patterns'
permalink: '/12-associate-other-associate-pattern-transaction-patterns.html'
---

_

Patt#12. "Associate - Other Associate" Pattern // transaction patterns

![Strpat00000015.gif](/img/Strpat00000015.gif)

_

**Typical object interactions**

\- howMany --> calcForMe

\- calcOverOtherAssociates --> calcForMe

\- rankOtherAssociates --> rateMe

**Examples**

\- aileron-gyro; aircraft-runway; building-sensor; driver-vehicle; loading dock - order; order-tote; truck - loading dock.

**Combinations**

\- any other pattern.

**Notes**

\- Associates are objects that know each other, without a need for information about that association or history about it.

\- In some pattern instances, an "other associate" may need to know some number of associates.

Related strategy: [Str#18.](/selecting-objects-pattern-players.html) "Select Associates"

[Transaction patterns](/transaction-patterns.html)

[Patterns for building object models](/patterns-for-building-object-models.html)
