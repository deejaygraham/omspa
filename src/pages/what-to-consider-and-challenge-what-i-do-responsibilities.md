---
title: 'What to consider and challenge (what I do): responsibilities'
---

**

What to consider and challenge (what I do): responsibilities

**

_Str#118. "Watch Out for Control Objects and Data Objects" Strategy // establishing responsibilities / what I do (consider and challenge)_

\- Watch out for grouping by control objects and data objects.

\- Keep data and the actions on that data -- together.

\- Distribute the work, using Str#86 (action upon becomes action on) and Patt#1 (collection-worker).

\- Why: better encapsulation, stronger cohesion, lower coupling, fewer objects, and fewer object interactions.

Related strategy: [Str#86](/fundamentals-what-i-do.html) "Do I Myself"

Related pattern: [Patt#1](/1-collection-worker-pattern-the-fundamental-pattern.html) "Collection-Worker"

_Str#119. "Watch Out for Excessive Behavior" Strategy // establishing responsibilities / what I do (consider and challenge)_

\- Watch out for objects that interact with nearly all other objects in the model.

\- Try adjusting responsibilities (what I know, who I know, what I do).

\- Apply the collection-worker pattern, too.

_Str#119a. "Watch Out for 'Workaholic - Data Holder'" Strategy // establishing responsibilities / what I do (consider and challenge)_

\- "Workaholic - Data Holder" is a pattern that points to trouble.

. The workaholic makes all the decisions and does all of the work.

. The data holder just holds values -- and provides "gets" and "sets" for working with those values.

\- Corrective action: instead of asking the data holder for a value, ask it a question or ask it to calculate a result, based upon what it knows, who it knows, and arguments you might pass to it. Then reduce the workaholic's workload, accordingly.

[Establishing responsibilities / what I do](/establishing-responsibilities-what-i-do.html)

[Strategies for building object models](/strategies-for-building-object-models.html)
