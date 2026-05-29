---
layout: base.njk
title: 'Model components -- HI, DM (who I know)'
permalink: '/model-components-hi-dm-who-i-know.html'
---

**

Model components -- HI, DM (who I know)

**

_Str#79. "Establish HI Object Connections" Strategy // establishing responsibilities / who I know (model components)_

\- For a window or report, include an object connection (expressed as an attribute) to: the contents of the window, the objects it knows directly, to get the content it needs to do its job (note that a window can use those objects to get to other objects, indirectly).

_Str#79a. "Establish HI-PD Object Connections" Strategy // establishing responsibilities / who I know (model components)_

\- For a window, show "who I know" in text:

(a) A problem-domain container, to ask for a list

(b) An object (or objects) selected from a list

\- For a PD object who needs to notify a window:

. Inherit the attribute "subscribers" and the service "publish" -- from a PDObject class -- and notify your subscribers when a change occurs (up to each subscriber to decide what to do from there).

_Str#80. "Establish DM Object Connections" Strategy // establishing responsibilities / who I know (model components)_

\- For a data management object, include an object connection (expressed as an attribute) to the problem-domain objects (all of the objects in some problem-domain class) that it is responsible for.

[Establishing responsibilities / who I know](/establishing-responsibilities-who-i-know.html)

[Strategies for building object models](/strategies-for-building-object-models.html)
