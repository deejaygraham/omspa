---
title: Model components -- HI, DM (who I know)
layout: default
---



Model components -- HI, DM (who I know)


*Str#79. &quot;Establish HI Object Connections&quot; Strategy // establishing
responsibilities / who I know (model components) 

 For a window or report, include an object connection (expressed as an attribute)
to: the contents of the window, the objects it knows directly, to get the content it needs
to do its job (note that a window can use those objects to get to other objects,
indirectly). 

Str#79a. &quot;Establish HI-PD Object Connections&quot; Strategy // establishing
responsibilities / who I know (model components) 

 For a window, show &quot;who I know&quot; in text: 

(a) A problem-domain container, to ask for a list 

(b) An object (or objects) selected from a list 

 For a PD object who needs to notify a window: 

. Inherit the attribute &quot;subscribers&quot; and the service &quot;publish&quot; --
from a PDObject class -- and notify your subscribers when a change occurs (up to each
subscriber to decide what to do from there). 

Str#80. &quot;Establish DM Object Connections&quot; Strategy // establishing
responsibilities / who I know (model components) 

 For a data management object, include an object connection (expressed as an
attribute) to the problem-domain objects (all of the objects in some problem-domain class)
that it is responsible for. 

Establishing responsibilities / who I know

Strategies for building object models
*
