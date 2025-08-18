---
title: What to consider and challenge: gen-spec with attributes (what I know)
layout: default
---
# What to consider and challenge: gen-spec with attributes (what I know)


*Str#67. &quot;Common Attributes&quot; Strategy // establishing responsibilities
/ what I know (consider and challenge) 

 Classes with common attributes? 

 If the attributes have the same name and meaning, and if you can find a
generalization-specialization that makes good sense, then add a generalization class and
factor out the commonality. 

Str#67a. &quot;Collapse Whole-Part When Same Attributes Apply&quot; Strategy //
establishing responsibilities / what I know (consider and challenge) 

 When you find a whole-part -- and the same attributes apply to the whole and the
part: 

. Collapse the whole and part into &quot;class with objects&quot; symbol. 

. Add a whole-part object connection to that one symbol. 

. Add &quot;super&quot; and &quot;sub&quot; attributes, showing that each object knows
the objects above it and below it. 

. Why: Fewer symbols. Less redundancy. And more resilient to change. 

. Example: Company - Division - Section - Team Collapse to &quot;Organization&quot; or
&quot;OrgUnit.&quot; 

Str#68. &quot;Partially Applicable Attribute&quot; Strategy // establishing
responsibilities / what I know (consider and challenge) 

 Attribute that applies only to certain objects in a class? 

 Do you have an attribute which applies only to certain kinds of objects? 

 Do you have an attribute that may have the value &quot;not applicable&quot;? 

 If so, factor out the specialized attribute into a specialization class. 

Str#69. &quot;No Attributes&quot; Strategy // establishing responsibilities / what I
know (consider and challenge) 

 An object with no attributes? When this happens, one of two things is going on. 

. Either it's a narrow &quot;need to know&quot; and just one object in that class. 

. . Check: there really is just one object in that class. 

. . Check: attributes really could apply, yet all potential attributes are outside of
the system's responsibilities. 

. . Fine! 

. Or it's got object connections (an attribute, show graphically). That's fine! 

. Or it's a nasty &quot;function blob,&quot; with services better done by other objects
themselves. 

. . Centralized control is troublesome; here's why: 

. . . It fails to use problem domain classes to partition both attributes and services.


. . . Encapsulation goes down (higher coupling and weaker cohesion). 

. . Here's what to do about it. 

. . . Get rid of the &quot;function blob.&quot; 

. . . Applying the &quot;what I do&quot; strategies as a guide, put each service in the
object that the old function blob was acting on. 

Establishing responsibilities / what I know

Strategies for building object models
*
