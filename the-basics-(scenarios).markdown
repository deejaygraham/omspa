---
title: The basics (scenarios)
layout: default
---



The basics (scenarios)


*Str#127. &quot;Select Key Scenarios&quot; Strategy // working out dynamics with
scenarios 

 Work out and demonstrate the satisfaction of a system feature. 

. Include scenarios that get you to work through the object interactions that are
required to deliver a feature of the system under consideration. 

. Consider using subscenarios, to make a scenario easier to work with and easier to
understand. 

 Stretch the model, examining it for completeness. 

. Include scenarios that really stretch your object model; use them to check out the
overall completeness of your model. 

 Examine key object interactions within your model. 

. Include scenarios that let you investigate dynamics for important services in your
model. 

Str#128. &quot;Where to Begin a Scenario&quot; Strategy // working out dynamics with
scenarios 

 Begin with a PD object's service, an HI object's service, or an SI object's
service. 

Str#129. &quot;Act It Out&quot; Strategy // working out dynamics with scenarios 

 Act out the interactions. 

. Each person plays a role. 

. Each object does its job -- no more, no less. 

. . &quot;What I know; who I know; what I do.&quot; 

. . &quot;I know enough; I have the arguments I need; I know to whom to send messages;
and I send messages to other objects, to get work done on my behalf.&quot; 

 Discover and refine both objects and responsibilities, all along the way. 

 Check it out. 

. Look at what arguments each object needs to know enough to get its job done. 

. Look at who creates and who eventually deletes the objects. 

. Look at objects that dominate the overall functionality; apply patterns to help you
better distribute responsibility. 

. Look at objects that ask other objects for values, yet insist on doing all of the
work; again, apply patterns to help you better distribute responsibility. 

Str#130. &quot;Two-Pass Scenario Development&quot; Strategy // working out dynamics
with scenarios 

 Once you have an initial object model in place, use a two-pass approach to
developing scenarios. 

 Why: this two-pass strategy supports making an explicit decision regarding how much
detail you need or want in a specific scenario. 

 First pass: work out a scenario using the objects in your model, adding no new
objects (or very few new objects). 

 Second pass (when you need additional understanding of dynamics and the additional
detail that goes with it): consider each participating service; look for what other
objects it needs to call upon, to get that service accomplished. Add objects,
responsibilities, and interactions, as needed. 

Working out dynamics with scenarios

Strategies for building object models
*
