---
title: 'The basics (scenarios)'
---

**

The basics (scenarios)

**

_Str#127. "Select Key Scenarios" Strategy // working out dynamics with scenarios_

\- Work out and demonstrate the satisfaction of a system feature.

. Include scenarios that get you to work through the object interactions that are required to deliver a feature of the system under consideration.

. Consider using subscenarios, to make a scenario easier to work with and easier to understand.

\- Stretch the model, examining it for completeness.

. Include scenarios that really stretch your object model; use them to check out the overall completeness of your model.

\- Examine key object interactions within your model.

. Include scenarios that let you investigate dynamics for important services in your model.

_Str#128. "Where to Begin a Scenario" Strategy // working out dynamics with scenarios_

\- Begin with a PD object's service, an HI object's service, or an SI object's service.

_Str#129. "Act It Out" Strategy // working out dynamics with scenarios_

\- Act out the interactions.

. Each person plays a role.

. Each object does its job -- no more, no less.

. . "What I know; who I know; what I do."

. . "I know enough; I have the arguments I need; I know to whom to send messages; and I send messages to other objects, to get work done on my behalf."

\- Discover and refine both objects and responsibilities, all along the way.

\- Check it out.

. Look at what arguments each object needs to know enough to get its job done.

. Look at who creates and who eventually deletes the objects.

. Look at objects that dominate the overall functionality; apply patterns to help you better distribute responsibility.

. Look at objects that ask other objects for values, yet insist on doing all of the work; again, apply patterns to help you better distribute responsibility.

_Str#130. "Two-Pass Scenario Development" Strategy // working out dynamics with scenarios_

\- Once you have an initial object model in place, use a two-pass approach to developing scenarios.

\- Why: this two-pass strategy supports making an explicit decision regarding how much detail you need or want in a specific scenario.

\- First pass: work out a scenario using the objects in your model, adding no new objects (or very few new objects).

\- Second pass (when you need additional understanding of dynamics and the additional detail that goes with it): consider each participating service; look for what other objects it needs to call upon, to get that service accomplished. Add objects, responsibilities, and interactions, as needed.

[Working out dynamics with scenarios](/working-out-dynamics-with-scenarios.html)

[Strategies for building object models](/strategies-for-building-object-models.html)
