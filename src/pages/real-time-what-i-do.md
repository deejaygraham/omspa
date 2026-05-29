---
title: 'Real-time (what I do)'
---

**

Real-time (what I do)

**

_Str#106. "Real Time: Timeliness" Strategy // establishing responsibilities / what I do (real time)_

\- Timeliness: must be "on time"

\- Put performance constraints on your scenarios (on services, too, as needed--although allocating performance constraints to individual services often takes more guesswork than most engineers feel comfortable with).

_Str#107. "Real Time: Dynamic Internal Structure" Strategy // establishing responsibilities / what I do (real time)_

\- Dynamic internal structure: dynamic creation and destruction of software components

\- How: show dynamic creation and deletion of objects in scenarios.

. Every class knows how to create new objects in that class.

. Every collection knows how to add and remove objects in that collection.

. Every object knows how to delete itself.

. In addition, you can selectively place additional creation and deletion constraints.

_Str#108. "Real Time: Reactiveness" Strategy // establishing responsibilities / what I do (real time)_

\- Reactiveness: continuously responds to different events in its environment, detected by data acquisition and control devices, or by interacting systems

\- Use a specific "maintain" or "monitor" service, for ongoing capabilities.

\- Use the "activate, monitor, deactivate" triad.

_Str#109. "Real Time: State-Dependency" Strategy // establishing responsibilities / what I do (real time)_

\- State-dependency: responds differently, depending upon the state of a system

\- Attributes: state, state-dependent, state-independent

. In its description, include: applicable states.

\- Services: state-dependent, state-independent

. In its description, you may need to include:

. . precondition: &ltindicate what you assert to be true, before this service can run>

. . postcondition: &ltindicate what you assert to be true, before this service can go to completion>

. . trigger condition: &ltindicate what state transitions activate this service>

. . terminate condition: &ltindicate what state transitions terminate this service>

. . exception: &ltindicate object.service to invoke, upon detecting an exception>.

_Str#110. "Real Time: Concurrency" Strategy // establishing responsibilities / what I do (real time)_

\- Concurrency: multiple simultaneous activities can be taking place.

\- Objects can do more than one thing at once -- they are multitasking creatures.

\- Objects encapsulate real-time tasks.

. Activation / deactivation

. . Trigger condition: &ltrequest, state change, value change, time lapse>

. . Terminate condition: &ltrequest, state change, value change, time lapse>

. Communication, coordination

. Communication between objects is by synchronous messaging.

. Communication within objects is by synchronous and asynchronous messaging, as needed.

\- Note: this encapsulation is made possible with effective object modeling (not with data objects and controller objects).

_Str#111. "Real Time: Multiple Device Abstractions" Strategy // establishing responsibilities / what I do (real time)_

\- Multiple device abstractions: needs both physical and logical abstractions.

\- Physical abstraction -- express with an object in the system interaction component.

\- Logical abstractions -- express with:

. a domain-based object (a problem-domain object)

. an object which shows "this is how we'll work with it" (a human interaction object)

. an object which persists from one program invocation to the next (a data management object).

_Str#112. "Real Time: Distribution" Strategy // establishing responsibilities / what I do (real time)_

\- Distribution: multiple computing sites

\- Across multiple computing systems

. Use software that supports distributed objects.

. Or do it yourself (inevitable, at least for systems that you must interact with and cannot change).

. . Allocate objects, not mere functionality.

. . Add "pack and ship; receive and route" infrastructure.

\- Within an existing system

. Use an object model to understand what's really going on.

. Tag each service with its location; tag each attribute with who is using it.

[Establishing responsibilities / what I do](/establishing-responsibilities-what-i-do.html)

[Strategies for building object models](/strategies-for-building-object-models.html)
