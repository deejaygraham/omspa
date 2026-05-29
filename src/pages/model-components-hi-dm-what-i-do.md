---
layout: base.njk
title: 'Model components--HI, DM (what I do)'
permalink: '/model-components-hi-dm-what-i-do.html'
---

**

Model components--HI, DM, SI (what I do)

**

_Str#99. "Establish HI Services" Strategy // establishing responsibilities / what I do (model component)_

\- For a window: include the actions for that window, actions that can be carried out by an object that window knows. For a report: "generate" is a good service.

\- Add action-initiating services. Let the PD objects do all the real work. (Why: so you can change the HI objects and not lose application smarts.)

\- Examples: activate, commit, delete, initiate, log, total, save, send, terminate.

_Str#100. "Establish DM Services" Strategy // establishing responsibilities / what I do (model component)_

\- For data management objects, include these services: search, save, load.

_Str#100a. "Add System Interaction (SI) Responsibilities" Strategy // establishing responsibilities / what I do_

\- Include a "logical" representation, expressing the role the other system plays, in the problem domain component. Typical services: actions that name the desired result. Example: AuthorizationSystem, with an "authorize" service.

\- Include a "physical" representation, expressing the interaction details, in the SI component. Typical services: logon, connect, exchange, disconnect, logoff. Example: AuthorizationSystemSI, with "logon, sendRequest, receiveResponse, logoff" services.

\- Consider various activation paths, too.

. On demand by a user: HI to PD to SI.

. On demand from another system: SI to PD to SI.

. On a schedule: PD to SI.

. Or by "sneaker net:" such interaction is outside the scope of your object model; no SI object needed for this.

[Establishing responsibilities / what I do](/establishing-responsibilities-what-i-do.html)

[Strategies for building object models](/strategies-for-building-object-models.html)
