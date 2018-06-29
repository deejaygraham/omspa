---
title: What to consider and challenge (what I do): responsibilities
layout: default
---



What to consider and challenge (what I do): responsibilities


*Str#118. &quot;Watch Out for Control Objects and Data Objects&quot; Strategy //
establishing responsibilities / what I do (consider and challenge) 

 Watch out for grouping by control objects and data objects. 

 Keep data and the actions on that data -- together. 

 Distribute the work, using Str#86 (action upon becomes action on) and Patt#1
(collection-worker). 

 Why: better encapsulation, stronger cohesion, lower coupling, fewer objects, and
fewer object interactions. 

Related strategy: #86 &quot;Do I Myself&quot; 

Related pattern: Patt#1 &quot;Collection-Worker&quot;


Str#119. &quot;Watch Out for Excessive Behavior&quot; Strategy // establishing
responsibilities / what I do (consider and challenge) 

 Watch out for objects that interact with nearly all other objects in the model. 

 Try adjusting responsibilities (what I know, who I know, what I do). 

 Apply the collection-worker pattern, too. 

Str#119a. &quot;Watch Out for 'Workaholic - Data Holder'&quot; Strategy //
establishing responsibilities / what I do (consider and challenge) 

 &quot;Workaholic - Data Holder&quot; is a pattern that points to trouble. 

. The workaholic makes all the decisions and does all of the work. 

. The data holder just holds values -- and provides &quot;gets&quot; and
&quot;sets&quot; for working with those values. 

 Corrective action: instead of asking the data holder for a value, ask it a question
or ask it to calculate a result, based upon what it knows, who it knows, and arguments you
might pass to it. Then reduce the workaholic's workload, accordingly. 

Establishing responsibilities / what I do

Strategies for building object models
*
