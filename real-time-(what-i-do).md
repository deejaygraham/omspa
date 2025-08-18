---
title: Real-time (what I do)
layout: default
---



Real-time (what I do)


*Str#106. &quot;Real Time: Timeliness&quot; Strategy // establishing
responsibilities / what I do (real time) 

 Timeliness: must be &quot;on time&quot; 

 Put performance constraints on your scenarios (on services, too, as needed--although
allocating performance constraints to individual services often takes more guesswork than
most engineers feel comfortable with). 

Str#107. &quot;Real Time: Dynamic Internal Structure&quot; Strategy // establishing
responsibilities / what I do (real time) 

 Dynamic internal structure: dynamic creation and destruction of software
components 

 How: show dynamic creation and deletion of objects in scenarios. 

. Every class knows how to create new objects in that class. 

. Every collection knows how to add and remove objects in that collection. 

. Every object knows how to delete itself. 

. In addition, you can selectively place additional creation and deletion constraints. 

Str#108. &quot;Real Time: Reactiveness&quot; Strategy // establishing
responsibilities / what I do (real time) 

 Reactiveness: continuously responds to different events in its environment,
detected by data acquisition and control devices, or by interacting systems 

 Use a specific &quot;maintain&quot; or &quot;monitor&quot; service, for ongoing
capabilities. 

 Use the &quot;activate, monitor, deactivate&quot; triad. 

Str#109. &quot;Real Time: State-Dependency&quot; Strategy // establishing
responsibilities / what I do (real time) 

 State-dependency: responds differently, depending upon the state of a system 

 Attributes: state, state-dependent, state-independent 

. In its description, include: applicable states. 

 Services: state-dependent, state-independent 

. In its description, you may need to include: 

. . precondition: &amp;ltindicate what you assert to be true, before this service can
run&gt; 

. . postcondition: &amp;ltindicate what you assert to be true, before this service can
go to completion&gt; 

. . trigger condition: &amp;ltindicate what state transitions activate this service&gt;


. . terminate condition: &amp;ltindicate what state transitions terminate this
service&gt; 

. . exception: &amp;ltindicate object.service to invoke, upon detecting an
exception&gt;. 

Str#110. &quot;Real Time: Concurrency&quot; Strategy // establishing
responsibilities / what I do (real time) 

 Concurrency: multiple simultaneous activities can be taking place. 

 Objects can do more than one thing at once -- they are multitasking creatures. 

 Objects encapsulate real-time tasks. 

. Activation / deactivation 

. . Trigger condition: &amp;ltrequest, state change, value change, time lapse&gt; 

. . Terminate condition: &amp;ltrequest, state change, value change, time lapse&gt; 

. Communication, coordination 

. Communication between objects is by synchronous messaging. 

. Communication within objects is by synchronous and asynchronous messaging, as needed.


 Note: this encapsulation is made possible with effective object modeling (not with
data objects and controller objects). 

Str#111. &quot;Real Time: Multiple Device Abstractions&quot; Strategy //
establishing responsibilities / what I do (real time) 

 Multiple device abstractions: needs both physical and logical abstractions. 

 Physical abstraction -- express with an object in the system interaction component. 

 Logical abstractions -- express with: 

. a domain-based object (a problem-domain object) 

. an object which shows &quot;this is how we'll work with it&quot; (a human interaction
object) 

. an object which persists from one program invocation to the next (a data management
object). 

Str#112. &quot;Real Time: Distribution&quot; Strategy // establishing
responsibilities / what I do (real time) 

 Distribution: multiple computing sites 

 Across multiple computing systems 

. Use software that supports distributed objects. 

. Or do it yourself (inevitable, at least for systems that you must interact with and
cannot change). 

. . Allocate objects, not mere functionality. 

. . Add &quot;pack and ship; receive and route&quot; infrastructure. 

 Within an existing system 

. Use an object model to understand what's really going on. 

. Tag each service with its location; tag each attribute with who is using it. 

Establishing responsibilities / what I do

Strategies for building object models
*
