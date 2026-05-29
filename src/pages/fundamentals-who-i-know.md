---
layout: base.njk
title: 'Fundamentals (who I know)'
permalink: '/fundamentals-who-i-know.html'
---

**

Fundamentals (who I know)

**

_Str#72. "Establish PD Object Connections" Strategy // establishing responsibilities / who I know (fundamentals)_

\- This is an aspect of a software object coming to life: "I know other objects, ones that are related to the actual object that I'm an abstraction of."

\- Select connecting objects to satisfy these two purposes:

. To directly know "to whom to send a message" (within one or more scenarios).

. To answer a query about objects that are directly related to it.

_Str#73. "Show Who I Know" Strategy // establishing responsibilities / who I know (fundamentals)_

\- Show "who I know" graphically, with an object connection.

. Include constraints, placed next to each object being constrained: 1 0-1 n 1-n . . &ltblank> ordered n \[XOR A\] 1 \[OR B\] 2 \[C\] ordered n all

. . "n" is the same thing as "0-n" (it's just easier to write it as "n").

. . A &ltblank> constraint indicates that an object has no need to know the other objects (this may occur, notably for a part in an aggregate).

. . "ordered n" is an ordered collection of some number of connections . . "\[XOR A\] 1" indicates an exclusive or, pertaining to all object connections labeled with the same tag (in this example the tag is "A"). Place whatever constraint applies to the right of the brackets, e.g., "\[XOR A\] 1."

. . "\[OR B\] 2" indicates two connections, selected from the connections labeled "B."

. . "\[C\] ordered n" indicates an ordered collection of some number of connections (any connection from that object that is labeled "C").

\- Or show "who I know" in text, with an attribute.

. Use this format whenever an object connection spans across model components -- or any other time that an object connection would be cumbersome, visually.

. For a textual representation, use this format:

. . "&ltclass name, beginning with a lowercase letter>"

. . Make it singular or plural, reflecting the number of objects that the object may know.

_Str#73a. "Whole-Part and Existence Dependency: Two Distinct Issues" Strategy // establishing responsibilities / who I know (fundamentals)_

\- Whole-part object connections express: assembly-part or container-content or group-member.

\- Existence dependency shows: one object depends upon another, else it cannot exist. Show existence dependency with an object connection constraint of 1 or more.

\- These are two distinct issues. Whole-part does not imply existence dependency; the connection constraints of any object connection express existence dependency (if any).

[Establishing responsibilities / who I know](/establishing-responsibilities-who-i-know.html)

[Strategies for building object models](/strategies-for-building-object-models.html)
