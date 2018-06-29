---
title: Selecting objects -- kinds of objects
layout: default
---



Selecting objects -- kinds of objects


*Str#34. &quot;Select Kinds of Objects&quot; Strategy // selecting objects (kinds
of objects) 

 Use generalization-specialization (gen-spec) to find additional classes. 

. Look at each class as a generalization. Name its specializations, ones that fit with
system objectives. 

. Look at each specialization. Name its generalizations, ones that fit within system
objectives. 

 Use gen-spec for domain-based reuse within an application; use configuration
management for reuse across multiple applications, even multiple problem domains. 

 Use gen-spec to show domain-based &quot;what's the same, what's different,&quot;
within an application. 

 Examples: equipment, kinds of equipment; participants, kinds of participants;
transactions, kinds of transactions. 

Related pattern: Patt#3.
&quot;Participant-Transaction&quot; 

Str#34a. &quot; Fits within a Specialization Class -- Forever&quot; Strategy //
selecting objects (kinds of objects) 

 Use generalization-specialization (gen-spec) whenever you can classify an object
as being within a specialization class -- and you know that it will stay in that class. 

 Otherwise, use Patt#3 &quot;Actor-Participant&quot; instead (referred to as
&quot;composition, instead of inheritance&quot;). 

Strategies for building object models
*
