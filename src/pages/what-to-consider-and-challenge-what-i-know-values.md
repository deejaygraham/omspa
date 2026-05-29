---
layout: base.njk
title: 'What to consider and challenge (what I know): values'
permalink: '/what-to-consider-and-challenge-what-i-know-values.html'
---

**

What to consider and challenge (what I know): values

**

_Str#60. "Closely Related Values as One" Strategy // establishing responsibilities / what I know (consider and challenge)_

\- A collection of closely related values, commonly referred to as one?

\- Use one attribute (e.g., name) and describe its parts in text.

\- Example: name. In the description for that attribute, include something like "name consists of title, first name, middle initial, last name (and if applicable, maiden name.)"

_Str#61. "Yes/No Attribute" Strategy // establishing responsibilities / what I know (consider and challenge)_

\- Attribute has values "yes or no?"

. The attribute name itself may be a value for some other attribute name

. Example: taxable (yes or no); change to tax status (taxable, tax-exempt, resale).

. Why bother: added detail now, added ease of change in the future.

_Str#62. "Values Over Time" Strategy // establishing responsibilities / what I know (consider and challenge)_

\- An attribute value that varies over time, and you need to know that variation?

\- Add an additional object, with an effective date and value.

\- Example: item and its price. If you need to keep track of multiple prices, applicable over different time periods, then add price objects, ones that know effective date and price, and do things like "is applicable for date" and "get price."

_Str#62a. "You? Me? Or Something Between Us?" Strategy // establishing responsibilities / what I know (consider and challenge)_

\- For each attribute, ask:

. Does it describe me? (If so, add it to the corresponding class.)

. Does it describe an object I know? (If so, add it to that other corresponding class.)

. Does it describe something in-between us? (If so, add a transaction object in between, and add

. . the attribute to that class.)

\- Example:

. Consider a "user."

. . Q. Does "password" describe a user?

. . A. Yes, in a single-system context.

. . . Looks like this: User, with a password attribute

. . No, in a multisystem context. In this case, a "password" describes neither a user nor a system. Instead, it describes something in-between them, a transaction object called something like "Access Authorization."

. . . Looks like this: User -- Access Authorization -- System

_Str#63. "Embedded Meaning in a Number" Strategy // establishing responsibilities / what I know (consider and challenge)_

\- Attribute is a number, with encoded meanings?

\- Add an attribute for each meaning.

\- Most often, include a number attribute, too (a sequence number, no longer a source of encoded meaning).

_Str#64. "Attribute with Repeating Values" Strategy // establishing responsibilities / what I know (consider and challenge)_

\- An attribute that may have a number of values?

\- Add a new class to your model. Add an object connection. Look for additional attributes that may apply.

. Add a new class, even if it has only one attribute for now.

. Why: make the most of problem-domain partitioning; pave the way for accommodating future change gracefully.

\- Example: Item with the attribute UPCs (universal product codes). Add a UPC class. Add an object connection between an item and its UPCs.

_Str#65. "Attribute Value Granularity" Strategy // establishing responsibilities / what I know (consider and challenge)_

\- Check the granularity for each attribute that applies across a collection:

. Does the same value apply across the entire collection?

. If not, move the attribute to the worker class, so each object in the collection can have its own value.

\- Example: rental (checkout date and time), rental line item (return date and time).

_Str#66. "Calculable Result" Strategy // establishing responsibilities / what I know (consider and challenge)_

\- An attribute for holding a calculable result? At first, don't show it in the object model.

\- At some point, you may want to add the attribute. Here's how:

. Add an explicit "get &ltattribute>" service for it.

. Specify that service so it:

. . checks for an attribute value -- and returns it, if it has one . . otherwise, invokes a calculate service, saves the result, and returns the result to the sender.

. Add an explicit "calculate &ltattribute>" service, too--so you can tell the object to do the calculation you want it to do.

[Establishing responsibilities / what I know](/establishing-responsibilities-what-i-know.html)

[Strategies for building object models](/strategies-for-building-object-models.html)
