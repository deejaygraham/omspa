---
layout: base.njk
title: 'Selecting objects -- model components'
permalink: '/selecting-objects-model-components.html'
---

**

Selecting objects -- model components

**

_Str#25. "Object-Model Components as a Guide" Strategy // selecting objects (model components)_

\- Use object-model components as a working outline for organizing your search for objects.

. PD: problem domain

. HI: human interaction . DM: data management

. SI: system interaction

. (and NT: not this time).

_Str#26. "Feature, PD Objects, HI Objects" Strategy // selecting objects (model components)_

\- Tabulate: feature, corresponding problem-domain objects, corresponding human interaction objects.

\- Why: identify objects--and sort out who needs to collaborate with whom.

_Str#27. "Select Windows: A First Cut" Strategy // selecting objects (model components)_

\- Add windows for each problem-domain object that you are working with.

\- If an object has line items, model both with a single window.

_Str#28. "Select Logon Window" Strategy // selecting objects (model components)_

\- Add a logon window--if the system needs to know who is using the system, for access control and accountability.

\- Examples: cashier logon window, customer logon window, order clerk logon window--or simply a logon window.

_Str#29. "Select Setup Windows" Strategy // selecting objects (model components)_

\- Add system setup windows.

. Create and initialize the objects you need, to get the system ready to go.

. Add system administration services for adding users and privileges.

\- Add activate and deactivate actions.

. Do this for whatever human interaction might be needed for activating or deactivating an interacting system or device.

. Put the actions with a window that knows objects that can carry those actions out.

\- Note: Don't include data entry "nuts and bolts," such as screen, monitor keyboard, mouse, magnetic-stripe reader, and the like.

_Str#30. "Select Core Windows" Strategy // selecting objects (model components)_

\- Consider who (audience) needs what (content), and why (purpose).

\- Add "conducting business" windows.

. Include transaction windows. Examples: sale window, session window, payment window.

\- Add "analyzing business results" windows.

\- Consider combination windows, when content is closely related in time.

. Examples: a transaction and its line items; a sale and payment window.

_Str#30a. "Select HI Windows for PD Transactions" Strategy // selecting objects (model components)_

\- For each PD transaction object:

. add an HI list window and an HI detail window.

\- Example: Registration (PD); RegistrationsWindow (HI), RegistrationDetailWindow (HI).

_Str#31. "Select Reports" Strategy // selecting objects (model components)_

\- Put together key summaries and specialized outputs, meeting specific legal or business needs.

\- Look carefully at who (audience) needs what (content), and why (purpose).

\- Don't include every ad hoc query that someone might eventually ask; don't include outdated batch reports.

_Str#32. "Select DM Objects" Strategy // selecting objects (model components)_

\- Add a DM object for each problem-domain class of objects that you want to be persistent--stored between program invocations.

\- Why: use data management (DM) objects to encapsulate search and storage mechanisms across all of the objects within a problem-domain class.

\- Examples: cashier DM, sale DM, sale line item DM, item DM.

_Str#33. "Select Interacting Systems or Devices" Strategy // selecting objects (model components)_

\- Select it.

. Look for other systems and pieces of equipment that your system must interact with.

. Look for interacting systems; look for devices needing data acquisition and control. (Skip display or printing "nuts and bolts.")

\- Examples: aileron, avionics system, controller, diverter, elevator, radar, rudder, sensor, scanner.

\- Model it.

. With a problem-domain object, and

. With a corresponding system-interaction (SI) object, encapsulating low-level communication detail.

[Selecting objects](/selecting-objects.html)

[Strategies for building object models](/strategies-for-building-object-models.html)
