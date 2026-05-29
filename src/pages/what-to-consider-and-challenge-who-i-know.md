---
title: 'What to consider and challenge (who I know)'
---

**

What to consider and challenge (who I know)

**

_Str#80a. "ABC" Strategy // establishing responsibilities / who I know (consider and challenge)_

\- Consider:

A -- B -- C

\- Do you need an object connection between A and C?

. Yes, if an A and C can exist without a B, and you need to know that mapping even when a B is not present.

. No, otherwise.

_Str#80b. "Double 1's" Strategy // establishing responsibilities / who I know (consider and challenge)_

\- For object connections that have double 1's:

\----------

1 1

. should you combine the participating objects?

\- Reason to combine: fewer symbols, fewer object interactions to deal with, easier to understand. This approach recognizes that effective communication is a must. Recommendation: follow this approach, unless the benefits listed below justify the added complexity.

\- Reason to keep apart: finer-grained partitioning, more resiliency to change.

_Str#80c. "Double n's" Strategy // establishing responsibilities / who I know (consider and challenge)_

\- For object connections that have double n's:

\---------- or ----------- or -----------

n n n 1-n 1-n 1-n

. check and see if a transaction object belongs in-between them.

\- Example:

. Owner-Vehicle could become Owner-Purchase-Vehicle.

\- The point here is not to obliterate double n's, but rather to use the occasion to look for a missing transaction object.

_Str#80d. "Relationships Between Objects in the Same Class" Strategy // establishing responsibilities / who I know (consider and challenge)_

\- At times, one object in a class needs to know other objects in a class.

\- One choice: add an object connection -- and an attribute, naming that connection. Works well if you don't need to know anything else about that relationship, or its history over time.

\- Another choice: add and connect another object, one that further describes what's going on between those objects. This could even be abstracted into a new pattern, called "Thing - Thing Relationship."

_Str#81. "Common Object Connection" Strategy // establishing responsibilities / who I know (consider and challenge)_

\- Common object connection? Add a generalization class, if it is indeed a generalization.

_Str#82. "Uncommon Object Connection" Strategy // establishing responsibilities / who I know (consider and challenge)_

\- Object connection that applies only to certain objects in a class? Connect to objects in a specialization class, instead.

_Str#83. "One Object with Special Meaning" Strategy // establishing responsibilities / who I know (consider and challenge)_

\- Many potential object connections, with one that is "the current one" or some other special meaning?

\- Add an attribute like "current &ltconnecting class name>."

_Str#84. "Object Connection with Multiple Meanings" Strategy // establishing responsibilities / who I know (consider and challenge)_

\- What if you have an object connection with multiple meanings?

. Add a transaction object, an "event remembered" about each meaning being established.

. Or: add attributes to the participating object that needs to know those meanings--along with the object connection.

_Str#85. "An Object with No Connections" Strategy // establishing responsibilities / who I know (consider and challenge)_

\- An object with no object connections?

. Consider who it needs to know to answer queries. Anything needed?

. Consider who it needs to know to get its services done. Anything needed?

. Otherwise, it's okay (from a different domain, yet part of the system's responsibilities).

[Establishing responsibilities / who I know](/establishing-responsibilities-who-i-know.html)

[Strategies for building object models](/strategies-for-building-object-models.html)
