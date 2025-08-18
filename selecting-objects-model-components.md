---
title: Selecting objects -- model components
layout: default
---



Selecting objects -- model components


*Str#25. &quot;Object-Model Components as a Guide&quot; Strategy // selecting
objects (model components) 

 Use object-model components as a working outline for organizing your search for
objects. 

. PD: problem domain 

. HI: human interaction . DM: data management 

. SI: system interaction 

. (and NT: not this time). 

Str#26. &quot;Feature, PD Objects, HI Objects&quot; Strategy // selecting objects
(model components) 

 Tabulate: feature, corresponding problem-domain objects, corresponding human
interaction objects. 

 Why: identify objects--and sort out who needs to collaborate with whom. 

Str#27. &quot;Select Windows: A First Cut&quot; Strategy // selecting objects (model
components) 

 Add windows for each problem-domain object that you are working with. 

 If an object has line items, model both with a single window. 

Str#28. &quot;Select Logon Window&quot; Strategy // selecting objects (model
components) 

 Add a logon window--if the system needs to know who is using the system, for
access control and accountability. 

 Examples: cashier logon window, customer logon window, order clerk logon window--or
simply a logon window. 

Str#29. &quot;Select Setup Windows&quot; Strategy // selecting objects (model
components) 

 Add system setup windows. 

. Create and initialize the objects you need, to get the system ready to go. 

. Add system administration services for adding users and privileges. 

 Add activate and deactivate actions. 

. Do this for whatever human interaction might be needed for activating or deactivating
an interacting system or device. 

. Put the actions with a window that knows objects that can carry those actions out. 

 Note: Don't include data entry &quot;nuts and bolts,&quot; such as screen, monitor
keyboard, mouse, magnetic-stripe reader, and the like. 

Str#30. &quot;Select Core Windows&quot; Strategy // selecting objects (model
components) 

 Consider who (audience) needs what (content), and why (purpose). 

 Add &quot;conducting business&quot; windows. 

. Include transaction windows. Examples: sale window, session window, payment window. 

 Add &quot;analyzing business results&quot; windows. 

 Consider combination windows, when content is closely related in time. 

. Examples: a transaction and its line items; a sale and payment window. 

Str#30a. &quot;Select HI Windows for PD Transactions&quot; Strategy // selecting
objects (model components) 

 For each PD transaction object: 

. add an HI list window and an HI detail window. 

 Example: Registration (PD); RegistrationsWindow (HI), RegistrationDetailWindow (HI). 

Str#31. &quot;Select Reports&quot; Strategy // selecting objects (model components) 

 Put together key summaries and specialized outputs, meeting specific legal or
business needs. 

 Look carefully at who (audience) needs what (content), and why (purpose). 

 Don't include every ad hoc query that someone might eventually ask; don't include
outdated batch reports. 

Str#32. &quot;Select DM Objects&quot; Strategy // selecting objects (model
components) 

 Add a DM object for each problem-domain class of objects that you want to be
persistent--stored between program invocations. 

 Why: use data management (DM) objects to encapsulate search and storage mechanisms
across all of the objects within a problem-domain class. 

 Examples: cashier DM, sale DM, sale line item DM, item DM. 

Str#33. &quot;Select Interacting Systems or Devices&quot; Strategy // selecting
objects (model components) 

 Select it. 

. Look for other systems and pieces of equipment that your system must interact with. 

. Look for interacting systems; look for devices needing data acquisition and control.
(Skip display or printing &quot;nuts and bolts.&quot;) 

 Examples: aileron, avionics system, controller, diverter, elevator, radar, rudder,
sensor, scanner. 

 Model it. 

. With a problem-domain object, and 

. With a corresponding system-interaction (SI) object, encapsulating low-level
communication detail. 

Selecting objects

Strategies for building object models
*
