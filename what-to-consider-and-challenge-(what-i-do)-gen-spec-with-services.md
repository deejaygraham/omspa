---
title: What to consider and challenge (what I do): gen-spec with services
layout: default
---



What to consider and challenge (what I do): gen-spec with services


*Str#120. &quot;Common Services&quot; Strategy // establishing responsibilities /
what I do (consider and challenge) 

 Classes with common services? 

. If the services have the same name and meaning, and if you can find a generalization-
specialization that makes good sense, then add a generalization class and factor out
whatever commonality you discovered. 

. If the service name is the same, yet the details of the service are different, then
show the service name in both the generalization and the specialization. 

Str#121. &quot;Partially Applicable Service&quot; Strategy // establishing
responsibilities / what I do (consider and challenge) 

 Do you have a service that applies only to certain objects in a class? 

 Do you have a service that applies only to certain kinds of objects? 

 Do you have a service which tests for what kind it is, and then acts accordingly? 

 If so, factor out the specialized service into a specialization class. 

Str#122. &quot;Meaningful Gen-Spec&quot; Strategy // establishing responsibilities /
what I do (consider and challenge) 

 What if &quot;specialization is a kind of generalization&quot; doesn't make
sense? Get rid of that gen-spec. 

 Insist upon domain-based generalization-specialization, for understandability and
greater likelihood of factoring which facilitates reuse. 

 Exception: generalization class is from another team, insufficiently factored out,
yet you must use it as-is. In that case, mark aspects of a new specialization with
&quot;does not apply.&quot; 

. Precede an inherited but unneeded attribute name with an &quot;x.&quot; 

. Precede an inherited but unneeded object connection (expressed in text) with an
&quot;x.&quot; 

. Precede an inherited but unneeded service name with an &quot;x.&quot; 

Str#123. &quot;Specialization Redundancies&quot; Strategy // establishing
responsibilities / what I do (consider and challenge) 

 An entire specialization level with an attribute or service name repeated
throughout? 

. If there is a variation in the descriptions behind the repeated name, that's fine. 

. Yet if the attribute or service is indeed the same for each specialization, move it
to a generalization. 

Str#124. &quot;No Level of Empty Specializations&quot; Strategy // establishing
responsibilities / what I do (consider and challenge) 

 An entire level of specializations -- without attributes, object connections, or
services? 

 What's happened: a graphical enumeration of values (not a very efficient
representation of an enumeration of values). 

 What to do: replace all of those empty specializations with an attribute in the
generalization class, plus a description that includes an enumeration of values. 

Str#125. &quot;Abundant Specializations&quot; Strategy // establishing
responsibilities / what I do (consider and challenge) 

 Where to begin? 

. Divide and conquer: model a simple one; model a complex one. 

. Model an initial gen-spec, showing &quot;what's the same, what's different.&quot; 

. Then work on additional specializations, based upon &quot;what I know, who I know,
what I do.&quot; 

 An incredible number of specializations, and you aren't sure which to apply? 

. Consider the system's responsibilities. 

. Model generalization-specialization based upon what the system knows and does
regarding its specializations. 

. Use gen-spec to capture similarity and differences in system responsibility (not as a
classification system of all classification systems). 

 Lots of specializations, resulting from multiple inheritance? 

. Use the actor-participant pattern, to express an
actor and the many ways it acts as a participant. 

. Example: person (actor) and participant (customer, cashier, head cashier, order
clerk). 

Establishing responsibilities / what I do

Strategies for building object models
*
