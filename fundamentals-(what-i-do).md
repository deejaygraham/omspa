---
title: Fundamentals (what I do)
layout: default
---



Fundamentals (what I do)


*Str#86. &quot;Do It Myself&quot; Strategy // establishing responsibilities /
what I do (fundamentals) 

 This is an aspect of a software object coming to life: &quot;I do those things
that are normally done to the actual object that I'm an abstraction of.&quot; 

 Here's why. &quot;Doing it myself&quot; encapsulates attributes with the services
that work on those attributes. That results in lower coupling and stronger cohesion. 

 If you are building a simulation system, then a software object will mimic what an
actual object does. In most systems, this is not so. Software objects do those things that
the system is responsible to do with regard to that object. 

Str#87. &quot;Put Services with the Attributes They Work On&quot; Strategy //
establishing responsibilities / what I do (fundamentals) 

 Put the services with the attributes they work on. 

 The result? Sensor objects that monitor themselves, customer objects that qualify
themselves, target objects that destroy themselves. 

 Why: better encapsulation, stronger cohesion, lower coupling, increased likelihood of
reuse. 

Str#88. &quot;Why, Why, Why&quot; Strategy // establishing responsibilities / what I
do (fundamentals) 

 Add value by asking &quot;why, why, why?&quot; 

. Why, why, does the system need this object anyway? 

. What useful questions can it answer? What useful actions can it perform? 

. What is done to an actual object, something that this object could do itself? 

Str#89. &quot;Basic Services&quot; Strategy / establishing responsibilities / what I
do (fundamentals) 

 The basic service, done by all, are not shown in an object model, except within
specific scenario views that might use them. 

 The basics: get, set; add (a connecting object), remove (a connecting object); create
(something a class does) and initialize, delete. 

 Note: attributes are private, by convention. In scenarios, use &quot;get
&amp;ltattribute name&gt;&quot; and &quot;set &amp;ltattribute name&gt;&quot; services to
access attribute values. 

 The basic DM services -- for data management objects -- are: search, load, and save. 

Str#90. &quot;Service as a Question&quot; Strategy // establishing responsibilities
/ what I do (fundamentals) 

 Ask: what questions can an object answer? 

 Some good starting words to choose from: has &amp;ltconnecting object&gt;, how many,
how much, includes &amp;ltconnecting object&gt;, is &amp;ltstatus value&gt;. 

 Why: stronger encapsulation, better partitioning of services; fewer objects that are
mere data holders. 

Str#91. &quot;Service as a Verb&quot; Strategy // establishing responsibilities /
what I do (fundamentals) 

 Some good service name verbs to choose from: 

. activate (initialize, initiate, open, start) 

. answer (reply, respond) 

. assess (appraise, assay, evaluate, value) 

. calculate (compute, count, estimate, rate, tally) 

. deactivate (close, end, shut down, terminate) 

. determine (decide, figure out, observe, resolve) 

. find (get, look for, pinpoint) 

. measure (bound, gauge, limit) 

. monitor (conduct, direct, manage, observe, operate, supervise, watch) 

. qualify (characterize, differentiate, discriminate, distinguish, mark) 

. select (choose, cull, elect, opt for, pick). 

 Append &quot;over interval&quot; for services that apply to different time intervals.


Str#92. &quot;What Can I Do for You&quot; Strategy // establishing responsibilities
/ what I do (fundamentals) 

 Ask, &quot;What can I do for you, based on what I know?&quot; 

 Ask, &quot;What can I do for you, based on whom I know?&quot; 

Str#93. &quot;Question, Calculation, Selection&quot; Strategy // establishing
responsibilities / what I do (fundamentals) 

 For an object, consider: 

. What questions can I answer? 

. What calculations can I do? What ongoing monitoring could I do? What
calculations across a collection could I make (letting each worker do its part)? 

. What selections across a collection could I make (letting each worker do its
part)? 

Establishing responsibilities / what I do

Strategies for building object models
*
