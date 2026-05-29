---
layout: base.njk
title: 'Selecting objects--what to consider and challenge'
permalink: '/selecting-objects-what-to-consider-and-challenge.html'
---

**

Selecting objects--what to consider and challenge

**

_Str#42. "System Responsibility" Strategy // selecting objects (consider and challenge)_

\- Is the object something that your system is responsible to know or do anything about?

\- If not, put it in the "not this time" model component.

_Str#43. "Duplicate Responsibilities" Strategy // selecting objects (consider and challenge)_

\- Is this object just a duplication of another object? Are the names different, yet identical responsibilities?

\- Such duplications arise over time in large organizations and on large systems.

\- When this happens, seek a common name (get help from dictionaries, a thesaurus, and domain-specific books and articles).

_Str#44. "Reengineer with Objects" Strategy // selecting objects (consider and challenge)_

\- Look for objects (and repeating instances of a pattern) that are likely to have the same responsibilities--and actually reflect an organizational boundary or previous system boundary.

\- Model the objects once--for a simpler object model. Make recommendations for reengineering the organization, too.

_Str#45. "Useful Questions" Strategy // selecting objects (consider and challenge)_

\- What useful questions could you ask this object, if you include it in your object model?

\- Examples: How many over interval? How much over interval? How good are you?

_Str#46. "More Than a Report" Strategy // selecting objects (consider and challenge)_

\- Is that report simply a human interaction object, just a view of problem-domain values and calculation results? Or does it embody something about which the system needs to know and do something through time?

\- Add to your object model, when your system is responsible for both producing and remembering the content expressed in that report.

_Str#47. "Way to Know" Strategy // selecting objects (consider and challenge)_

\- You need a way to know each object--and its attribute values.

\- If you have no way to know an object, either find a way to know about it or put the object in the "not this time" model component.

\- Example: customer. You must have a way to know about customer objects; otherwise, put customer in the "not this time" model component.

_Str#48. "No Objects Mimicking What a Human Does" Strategy // selecting objects (consider and challenge)_

\- Don't let an object mimic what a person does (unless you are building a simulation system). Otherwise, that object will end up as a controller, a function blob.

\- Reasons why:

. The controller ends up with functionality that's better done by other objects themselves (lower cohesion for all).

. The controller makes messaging more complicated (higher coupling for all).

. The overly busy controller is harder to develop.

. The overly busy controller is minding everyone else's state-dependent responsibilities.

_Str#49. "Different Human Interaction" Strategy // selecting objects (consider and challenge)_

\- Consider how your model would change if you used a very different human-interaction style (for example, using a heads-up display and voice commands).

\- Would any of your problem-domain objects change? If so, pay close attention to those objects. Separate presentation from what's really going on in the problem domain.

\- Examples: vertical-speed indicator (human interaction) and vertical-speed gyro (problem domain), traffic light (human interaction) and traffic lane (problem domain).

[Selecting objects](/selecting-objects.html)

[Strategies for building object models](/strategies-for-building-object-models.html)
