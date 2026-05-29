---
layout: base.njk
title: 'Fundamentals (what I do)'
permalink: '/fundamentals-what-i-do.html'
---

**

Fundamentals (what I do)

**

_Str#86. "Do It Myself" Strategy // establishing responsibilities / what I do (fundamentals)_

\- This is an aspect of a software object coming to life: "I do those things that are normally done to the actual object that I'm an abstraction of."

\- Here's why. "Doing it myself" encapsulates attributes with the services that work on those attributes. That results in lower coupling and stronger cohesion.

\- If you are building a simulation system, then a software object will mimic what an actual object does. In most systems, this is not so. Software objects do those things that the system is responsible to do with regard to that object.

_Str#87. "Put Services with the Attributes They Work On" Strategy // establishing responsibilities / what I do (fundamentals)_

\- Put the services with the attributes they work on.

\- The result? Sensor objects that monitor themselves, customer objects that qualify themselves, target objects that destroy themselves.

\- Why: better encapsulation, stronger cohesion, lower coupling, increased likelihood of reuse.

_Str#88. "Why, Why, Why" Strategy // establishing responsibilities / what I do (fundamentals)_

\- Add value by asking "why, why, why?"

. Why, why, does the system need this object anyway?

. What useful questions can it answer? What useful actions can it perform?

. What is done to an actual object, something that this object could do itself?

_Str#89. "Basic Services" Strategy / establishing responsibilities / what I do (fundamentals)_

\- The basic service, done by all, are not shown in an object model, except within specific scenario views that might use them.

\- The basics: get, set; add (a connecting object), remove (a connecting object); create (something a class does) and initialize, delete.

\- Note: attributes are private, by convention. In scenarios, use "get &ltattribute name>" and "set &ltattribute name>" services to access attribute values.

\- The basic DM services -- for data management objects -- are: search, load, and save.

_Str#90. "Service as a Question" Strategy // establishing responsibilities / what I do (fundamentals)_

\- Ask: what questions can an object answer?

\- Some good starting words to choose from: has &ltconnecting object>, how many, how much, includes &ltconnecting object>, is &ltstatus value>.

\- Why: stronger encapsulation, better partitioning of services; fewer objects that are mere data holders.

_Str#91. "Service as a Verb" Strategy // establishing responsibilities / what I do (fundamentals)_

\- Some good service name verbs to choose from:

. activate (initialize, initiate, open, start)

. answer (reply, respond)

. assess (appraise, assay, evaluate, value)

. calculate (compute, count, estimate, rate, tally)

. deactivate (close, end, shut down, terminate)

. determine (decide, figure out, observe, resolve)

. find (get, look for, pinpoint)

. measure (bound, gauge, limit)

. monitor (conduct, direct, manage, observe, operate, supervise, watch)

. qualify (characterize, differentiate, discriminate, distinguish, mark)

. select (choose, cull, elect, opt for, pick).

\- Append "over interval" for services that apply to different time intervals.

_Str#92. "What Can I Do for You" Strategy // establishing responsibilities / what I do (fundamentals)_

\- Ask, "What can I do for you, based on what I know?"

\- Ask, "What can I do for you, based on whom I know?"

_Str#93. "Question, Calculation, Selection" Strategy // establishing responsibilities / what I do (fundamentals)_

\- For an object, consider:

. What _questions_ can I answer?

. What _calculations_ can I do? What ongoing monitoring could I do? What calculations across a collection could I make (letting each worker do its part)?

. What _selections_ across a collection could I make (letting each worker do its part)?

[Establishing responsibilities / what I do](/establishing-responsibilities-what-i-do.html)

[Strategies for building object models](/strategies-for-building-object-models.html)
