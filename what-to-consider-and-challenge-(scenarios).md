---
title: What to consider and challenge (scenarios)
layout: default
---



What to consider and challenge (scenarios)


*Str#132. &quot;Don't Ask 'What Kind?'&quot; Strategy // working out dynamics
with scenarios (consider and challenge) 

 Don't ask &quot;What kind of object are you?&quot;--and then follow-up with a
second message, telling that object what you want it to do. 

 Just say &quot;do it&quot; -- and let it get the job done. 

 If you discover that the receiving object needs a case statement, then specialize the
classes of those objects, so an object already knows what kind it is. Then send one
message and let that object do its thing. 

Str#132a. &quot;More Than 'Get A Value'&quot; Strategy // working out dynamics with
scenarios (consider and challenge) 

 Don't send &quot;get value&quot; without first considering: 

. What question do I really want answered? 

. What calculation result do I need? 

. Can I pass an argument to that object and have it do something useful for me? 

 Why: this strategy helps you distribute both attributes and services, using
problem-domain classes as a more stable, more understandable organizational framework. 

Str#133. &quot;Search then Interact&quot; Strategy // working out dynamics with
scenarios (consider and challenge) 

 If you need to traverse multiple object connections in search for an object you
want to interact with: 

. search for it 

. then interact with it. 

 Reason: simpler objects in between. 

Str#134. &quot;Act, Rather than Poll&quot; Strategy // working out dynamics with
scenarios (consider and challenge) 

 For each object that recognizes that something needs to be done, let it initiate
that work. 

 Don't let a manager poll that object, asking for a status change. Reason: no need for
that extra managing activity (adds complexity, weakens encapsulation). 

Str#135. &quot;Get Values Only When You Need Them&quot; Strategy // working out
dynamics with scenarios (consider and challenge) 

 Pass an object as a parameter. Get values from that object only at the point you
are ready to use those values. 

 Why: better encapsulation; better localization of interface details. 

Str#136. &quot;Take Extra Work Out of the Loop&quot; Strategy // working out
dynamics with scenarios (consider and challenge) 

 Check each loop within a scenario. Pull work outside of a loop, whenever you can.


 Why: easier to understand (and ultimately, better performance). 

Str#137. &quot;Consistent Object Model and Scenario Views&quot; Strategy // working
out dynamics with scenarios (consider and challenge) 

 Services in a scenario view should correspond with services in the object model. 

. Note: some services in a scenario view are not normally shown in a object model,
namely: get, set, add, remove, delete, and create. 

 An object in a scenario view needs to know 'to whom to send a message&quot; -- either
directly (an object connection in an object model) or indirectly (passed as a parameter to
a specific service). 

Str#138. &quot;Reduce Interactions&quot; Strategy // working out dynamics with
scenarios (consider and challenge) 

 Look at interactions that require a lot of messaging--or interactions that
require going through many &quot;middle men&quot; to get what you want done, done. 

 Consider adding object connections to reduce traffic--and simplify your model. 

 Consider the cost: the extra overhead of establishing and maintaining additional
object connections. 

Str#139. &quot;Reduce Cascading Messages&quot; Strategy // working out dynamics with
scenarios (consider and challenge) 

 If you send a message to an object, and it sends a message to its collection of
objects, whose objects in turn sends a message to its collection of objects: send the
message directly to the last object in the cascading message sequence (you might need to
add another object connection, so you know to whom to send the message). 

 Why: fewer messages makes it easier to understand (and more efficient to implement,
too). 

 (If the object connections continually change, check out the dynamics of those object
connections with scenarios. Then, apply this strategy only if you can keep the object
connections in-sync. Sometimes, a few extra object interactions might be simpler after
all.) 

Str#139a. &quot;Watch Out For Double Dipping&quot; Strategy // working out dynamics
with scenarios (consider and challenge) 

 Watch out for this shape: 

--n---&gt; 

--n---&gt; 

 Likely problem: 

--n---&gt; qualify 

--n---&gt; do the qualified action 

 Better approach: 

--n---&gt; do it (qualify myself -- and if qualified, take action) 

 In this way, an object, once it qualifies itself, simply carries out the appropriate
action. 

. Benefits: reduced object interactions; simpler interface (1 service, rather than 2);
stronger cohesion (from decreased distance between recognition and action); better overall
performance. 

 Related strategy: Str#132 &quot;Don't Ask Why&quot; 

Str#140. &quot;Object Creation and Deletion&quot; Strategy // working out dynamics
with scenarios (consider and challenge) 

 Look at scenarios that create (and initialize) and delete the objects you work
with. 

 Ask, &quot;Who is responsible for creating (and initializing) that object? Who is
responsible for deleting it?&quot; 

Str#141. &quot;Responsive Data Acquisition and Control Objects&quot; Strategy //
working out dynamics with scenarios (consider and challenge) 

 If data acquisition and control are done by one actual object, then model them
with one object. 

 Otherwise: 

. For each control object: 

. . Add a collection of data acquisition objects. 

. . The control object takes care of itself -- and behavior across the collection. 

. For each data acquisition object: 

. . Each data acquisition object takes care of itself, as much it can do with what it
knows (for example, reading values and detecting something from those values). 

Working out dynamics with scenarios

Strategies for building object models
*
