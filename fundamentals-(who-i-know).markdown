---
title: Fundamentals (who I know)
layout: default
---



Fundamentals (who I know)


*Str#72. &quot;Establish PD Object Connections&quot; Strategy // establishing
responsibilities / who I know (fundamentals) 

 This is an aspect of a software object coming to life: &quot;I know other
objects, ones that are related to the actual object that I'm an abstraction of.&quot; 

 Select connecting objects to satisfy these two purposes: 

. To directly know &quot;to whom to send a message&quot; (within one or more
scenarios). 

. To answer a query about objects that are directly related to it. 

Str#73. &quot;Show Who I Know&quot; Strategy // establishing responsibilities / who
I know (fundamentals) 

 Show &quot;who I know&quot; graphically, with an object connection. 

. Include constraints, placed next to each object being constrained: 1 0-1 n 1-n . .
&amp;ltblank&gt; ordered n [XOR A] 1 [OR B] 2 [C] ordered n all 

. . &quot;n&quot; is the same thing as &quot;0-n&quot; (it's just easier to write it as
&quot;n&quot;). 

. . A &amp;ltblank&gt; constraint indicates that an object has no need to know the
other objects (this may occur, notably for a part in an aggregate). 

. . &quot;ordered n&quot; is an ordered collection of some number of connections . .
&quot;[XOR A] 1&quot; indicates an exclusive or, pertaining to all object connections
labeled with the same tag (in this example the tag is &quot;A&quot;). Place whatever
constraint applies to the right of the brackets, e.g., &quot;[XOR A] 1.&quot; 

. . &quot;[OR B] 2&quot; indicates two connections, selected from the connections
labeled &quot;B.&quot; 

. . &quot;[C] ordered n&quot; indicates an ordered collection of some number of
connections (any connection from that object that is labeled &quot;C&quot;). 

 Or show &quot;who I know&quot; in text, with an attribute. 

. Use this format whenever an object connection spans across model components -- or any
other time that an object connection would be cumbersome, visually. 

. For a textual representation, use this format: 

. . &quot;&amp;ltclass name, beginning with a lowercase letter&gt;&quot; 

. . Make it singular or plural, reflecting the number of objects that the object may
know. 

Str#73a. &quot;Whole-Part and Existence Dependency: Two Distinct Issues&quot;
Strategy // establishing responsibilities / who I know (fundamentals) 

 Whole-part object connections express: assembly-part or container-content or
group-member. 

 Existence dependency shows: one object depends upon another, else it cannot exist.
Show existence dependency with an object connection constraint of 1 or more. 

 These are two distinct issues. Whole-part does not imply existence dependency; the
connection constraints of any object connection express existence dependency (if any). 

Establishing responsibilities / who I know

Strategies for building object models
*
