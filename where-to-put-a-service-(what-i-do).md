---
title: Where to put a service (what I do)
layout: default
---



Where to put a service (what I do)


*Str#101. &quot;Placing Services&quot; Strategy // establishing responsibilities
/ what I do (where to put) 

 Use the key principles for placing a service. 

. act on something in the domain -&gt; the object does it itself 

. collection-worker pattern 

. . collection object works on its own attributes 

. . collection object asks workers to do something useful (rarely just &quot;get a
value for me&quot;) 

. encapsulation (more than a value holder; it acts upon what it knows) 

. generally useful in subsequent reuse 

. messaging simplicity (more understandable, more efficient). 

Str#102. &quot;Service across a Collection&quot; Strategy // establishing
responsibilities / what I do (where to put) 

 Service across a collection of objects? 

. Add a service to a collection object, an object that knows and does things across
that collection. 

. Let each worker within a collection do its fair share--as much as it can, based upon
what it knows. 

 Be sure the collection does just those things that apply across a collection; makes
its workers do as much work as they know enough to accomplish. 

 Across its workers: enforce business rules that may apply to its participation. 

Str#103. &quot;Service in the Smallest Applicable Container&quot; Strategy //
establishing responsibilities / what I do (where to put) 

 Begin with a problem-domain object. 

 Identify the smallest problem-domain collection that it's a part of. 

 Add the &quot;service across a collection&quot; to that object. 

 Does the collection include all of the objects you need to work with? 

. If yes, you're done. 

. If not, do it again, letting the collection be the problem-domain object for the next
pass. 

Related patterns: 

Patt#14. &quot;Container-Content&quot; 

Patt#15. &quot;Container - Container Line Item&quot; 

Str#104. &quot;Worker in a Collection&quot; Strategy // establishing
responsibilities / what I do (where to put) 

 Service in a worker object? Let it do something of value! 

. Answer a question. 

. Calculate. Calculate a result, given input parameters. 

. Get a custom value OR a default value for objects in that collection (which would
require sending a message from the worker to its collection object). 

 In other words, add some value--endeavor to let each object be more than just a data
holder. 

Str#105. &quot;Programmable Action&quot; Strategy // establishing responsibilities /
what I do (where to put) 

 Service which is actually a programmable action? 

. Add an attribute called something like &quot;programmable action.&quot; 

. Add a service called something like &quot;execute action.&quot; 

Establishing responsibilities / what I do

Strategies for building object models
*
