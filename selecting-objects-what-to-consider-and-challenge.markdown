---
title: Selecting objects--what to consider and challenge
layout: default
---



Selecting objects--what to consider and challenge


*Str#42. &quot;System Responsibility&quot; Strategy // selecting objects
(consider and challenge) 

 Is the object something that your system is responsible to know or do anything
about? 

 If not, put it in the &quot;not this time&quot; model component. 

Str#43. &quot;Duplicate Responsibilities&quot; Strategy // selecting objects
(consider and challenge) 

 Is this object just a duplication of another object? Are the names different, yet
identical responsibilities? 

 Such duplications arise over time in large organizations and on large systems. 

 When this happens, seek a common name (get help from dictionaries, a thesaurus, and
domain-specific books and articles). 

Str#44. &quot;Reengineer with Objects&quot; Strategy // selecting objects (consider
and challenge) 

 Look for objects (and repeating instances of a pattern) that are likely to have
the same responsibilities--and actually reflect an organizational boundary or previous
system boundary. 

 Model the objects once--for a simpler object model. Make recommendations for
reengineering the organization, too. 

Str#45. &quot;Useful Questions&quot; Strategy // selecting objects (consider and
challenge) 

 What useful questions could you ask this object, if you include it in your object
model? 

 Examples: How many over interval? How much over interval? How good are you? 

Str#46. &quot;More Than a Report&quot; Strategy // selecting objects (consider and
challenge) 

 Is that report simply a human interaction object, just a view of problem-domain
values and calculation results? Or does it embody something about which the system needs
to know and do something through time? 

 Add to your object model, when your system is responsible for both producing and
remembering the content expressed in that report. 

Str#47. &quot;Way to Know&quot; Strategy // selecting objects (consider and
challenge) 

 You need a way to know each object--and its attribute values. 

 If you have no way to know an object, either find a way to know about it or put the
object in the &quot;not this time&quot; model component. 

 Example: customer. You must have a way to know about customer objects; otherwise, put
customer in the &quot;not this time&quot; model component. 

Str#48. &quot;No Objects Mimicking What a Human Does&quot; Strategy // selecting
objects (consider and challenge) 

 Don't let an object mimic what a person does (unless you are building a
simulation system). Otherwise, that object will end up as a controller, a function blob. 

 Reasons why: 

. The controller ends up with functionality that's better done by other objects
themselves (lower cohesion for all). 

. The controller makes messaging more complicated (higher coupling for all). 

. The overly busy controller is harder to develop. 

. The overly busy controller is minding everyone else's state-dependent
responsibilities. 

Str#49. &quot;Different Human Interaction&quot; Strategy // selecting objects
(consider and challenge) 

 Consider how your model would change if you used a very different
human-interaction style (for example, using a heads-up display and voice commands). 

 Would any of your problem-domain objects change? If so, pay close attention to those
objects. Separate presentation from what's really going on in the problem domain. 

 Examples: vertical-speed indicator (human interaction) and vertical-speed gyro
(problem domain), traffic light (human interaction) and traffic lane (problem domain). 

Selecting objects

Strategies for building object models
*
