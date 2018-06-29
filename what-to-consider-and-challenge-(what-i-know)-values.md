---
title: What to consider and challenge (what I know): values
layout: default
---



What to consider and challenge (what I know): values


*Str#60. &quot;Closely Related Values as One&quot; Strategy // establishing
responsibilities / what I know (consider and challenge) 

 A collection of closely related values, commonly referred to as one? 

 Use one attribute (e.g., name) and describe its parts in text. 

 Example: name. In the description for that attribute, include something like
&quot;name consists of title, first name, middle initial, last name (and if applicable,
maiden name.)&quot; 

Str#61. &quot;Yes/No Attribute&quot; Strategy // establishing responsibilities /
what I know (consider and challenge) 

 Attribute has values &quot;yes or no?&quot; 

. The attribute name itself may be a value for some other attribute name 

. Example: taxable (yes or no); change to tax status (taxable, tax-exempt, resale). 

. Why bother: added detail now, added ease of change in the future. 

Str#62. &quot;Values Over Time&quot; Strategy // establishing responsibilities /
what I know (consider and challenge) 

 An attribute value that varies over time, and you need to know that variation? 

 Add an additional object, with an effective date and value. 

 Example: item and its price. If you need to keep track of multiple prices, applicable
over different time periods, then add price objects, ones that know effective date and
price, and do things like &quot;is applicable for date&quot; and &quot;get price.&quot; 

Str#62a. &quot;You? Me? Or Something Between Us?&quot; Strategy // establishing
responsibilities / what I know (consider and challenge) 

 For each attribute, ask: 

. Does it describe me? (If so, add it to the corresponding class.) 

. Does it describe an object I know? (If so, add it to that other corresponding class.)


. Does it describe something in-between us? (If so, add a transaction object in
between, and add 

. . the attribute to that class.) 

 Example: 

. Consider a &quot;user.&quot; 

. . Q. Does &quot;password&quot; describe a user? 

. . A. Yes, in a single-system context. 

. . . Looks like this: User, with a password attribute 

. . No, in a multisystem context. In this case, a &quot;password&quot; describes
neither a user nor a system. Instead, it describes something in-between them, a
transaction object called something like &quot;Access Authorization.&quot; 

. . . Looks like this: User -- Access Authorization -- System 

Str#63. &quot;Embedded Meaning in a Number&quot; Strategy // establishing
responsibilities / what I know (consider and challenge) 

 Attribute is a number, with encoded meanings? 

 Add an attribute for each meaning. 

 Most often, include a number attribute, too (a sequence number, no longer a source of
encoded meaning). 

Str#64. &quot;Attribute with Repeating Values&quot; Strategy // establishing
responsibilities / what I know (consider and challenge) 

 An attribute that may have a number of values? 

 Add a new class to your model. Add an object connection. Look for additional
attributes that may apply. 

. Add a new class, even if it has only one attribute for now. 

. Why: make the most of problem-domain partitioning; pave the way for accommodating
future change gracefully. 

 Example: Item with the attribute UPCs (universal product codes). Add a UPC class. Add
an object connection between an item and its UPCs. 

Str#65. &quot;Attribute Value Granularity&quot; Strategy // establishing
responsibilities / what I know (consider and challenge) 

 Check the granularity for each attribute that applies across a collection: 

. Does the same value apply across the entire collection? 

. If not, move the attribute to the worker class, so each object in the collection can
have its own value. 

 Example: rental (checkout date and time), rental line item (return date and time). 

Str#66. &quot;Calculable Result&quot; Strategy // establishing responsibilities /
what I know (consider and challenge) 

 An attribute for holding a calculable result? At first, don't show it in the
object model. 

 At some point, you may want to add the attribute. Here's how: 

. Add an explicit &quot;get &amp;ltattribute&gt;&quot; service for it. 

. Specify that service so it: 

. . checks for an attribute value -- and returns it, if it has one . . otherwise,
invokes a calculate service, saves the result, and returns the result to the sender. 

. Add an explicit &quot;calculate &amp;ltattribute&gt;&quot; service, too--so you can
tell the object to do the calculation you want it to do. 

Establishing responsibilities / what I know

Strategies for building object models
*
