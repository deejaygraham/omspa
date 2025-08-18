---
title: What to consider and challenge (who I know)
layout: default
---
# What to consider and challenge (who I know)

*Str#80a. &quot;ABC&quot; Strategy // establishing responsibilities / who I know
(consider and challenge) 

 Consider: 

A -- B -- C 

 Do you need an object connection between A and C? 

. Yes, if an A and C can exist without a B, and you need to know that mapping even when
a B is not present. 

. No, otherwise. 

Str#80b. &quot;Double 1's&quot; Strategy // establishing responsibilities / who I
know (consider and challenge) 

 For object connections that have double 1's: 

--------- 

1 1 

. should you combine the participating objects? 

 Reason to combine: fewer symbols, fewer object interactions to deal with, easier to
understand. This approach recognizes that effective communication is a must.
Recommendation: follow this approach, unless the benefits listed below justify the added
complexity. 

 Reason to keep apart: finer-grained partitioning, more resiliency to change. 

Str#80c. &quot;Double n's&quot; Strategy // establishing responsibilities / who I
know (consider and challenge) 

 For object connections that have double n's: 

--------- or ----------- or ----------- 

n n n 1-n 1-n 1-n 

. check and see if a transaction object belongs in-between them. 

 Example: 

. Owner-Vehicle could become Owner-Purchase-Vehicle. 

 The point here is not to obliterate double n's, but rather to use the occasion to
look for a missing transaction object. 

Str#80d. &quot;Relationships Between Objects in the Same Class&quot; Strategy //
establishing responsibilities / who I know (consider and challenge) 

 At times, one object in a class needs to know other objects in a class. 

 One choice: add an object connection -- and an attribute, naming that connection.
Works well if you don't need to know anything else about that relationship, or its history
over time. 

 Another choice: add and connect another object, one that further describes what's
going on between those objects. This could even be abstracted into a new pattern, called
&quot;Thing - Thing Relationship.&quot; 

Str#81. &quot;Common Object Connection&quot; Strategy // establishing
responsibilities / who I know (consider and challenge) 

 Common object connection? Add a generalization class, if it is indeed a
generalization. 

Str#82. &quot;Uncommon Object Connection&quot; Strategy // establishing
responsibilities / who I know (consider and challenge) 

 Object connection that applies only to certain objects in a class? Connect to
objects in a specialization class, instead. 

Str#83. &quot;One Object with Special Meaning&quot; Strategy // establishing
responsibilities / who I know (consider and challenge) 

 Many potential object connections, with one that is &quot;the current one&quot;
or some other special meaning? 

 Add an attribute like &quot;current &amp;ltconnecting class name&gt;.&quot; 

Str#84. &quot;Object Connection with Multiple Meanings&quot; Strategy //
establishing responsibilities / who I know (consider and challenge) 

 What if you have an object connection with multiple meanings? 

. Add a transaction object, an &quot;event remembered&quot; about each meaning being
established. 

. Or: add attributes to the participating object that needs to know those
meanings--along with the object connection. 

Str#85. &quot;An Object with No Connections&quot; Strategy // establishing
responsibilities / who I know (consider and challenge) 

 An object with no object connections? 

. Consider who it needs to know to answer queries. Anything needed? 

. Consider who it needs to know to get its services done. Anything needed? 

. Otherwise, it's okay (from a different domain, yet part of the system's
responsibilities). 

Establishing responsibilities / who I know

Strategies for building object models
*
