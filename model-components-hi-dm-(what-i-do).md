---
title: Model components--HI, DM (what I do)
layout: default
---



Model components--HI, DM, SI (what I do)


*Str#99. &quot;Establish HI Services&quot; Strategy // establishing
responsibilities / what I do (model component) 

 For a window: include the actions for that window, actions that can be carried
out by an object that window knows. For a report: &quot;generate&quot; is a good service. 

 Add action-initiating services. Let the PD objects do all the real work. (Why: so you
can change the HI objects and not lose application smarts.) 

 Examples: activate, commit, delete, initiate, log, total, save, send, terminate. 

Str#100. &quot;Establish DM Services&quot; Strategy // establishing responsibilities
/ what I do (model component) 

 For data management objects, include these services: search, save, load. 

Str#100a. &quot;Add System Interaction (SI) Responsibilities&quot; Strategy //
establishing responsibilities / what I do 

 Include a &quot;logical&quot; representation, expressing the role the other
system plays, in the problem domain component. Typical services: actions that name the
desired result. Example: AuthorizationSystem, with an &quot;authorize&quot; service. 

 Include a &quot;physical&quot; representation, expressing the interaction details, in
the SI component. Typical services: logon, connect, exchange, disconnect, logoff. Example:
AuthorizationSystemSI, with &quot;logon, sendRequest, receiveResponse, logoff&quot;
services. 

 Consider various activation paths, too. 

. On demand by a user: HI to PD to SI. 

. On demand from another system: SI to PD to SI. 

. On a schedule: PD to SI. 

. Or by &quot;sneaker net:&quot; such interaction is outside the scope of your object
model; no SI object needed for this. 

Establishing responsibilities / what I do

Strategies for building object models
*
