---
title: Message traffic (what I do)
layout: default
---



Message traffic (what I do)


*Str#113. &quot;Batch Up Immediate Results&quot; Strategy // establishing
responsibilities /what I do (message traffic) 

 Excess message traffic can make an object model harder to understand and harder
to implement, too. 

 Here's what to do about it: &quot;Batch up&quot; immediate results. Add attributes
that hold intermediate results, to reduce message traffic. In effect, you are moving a
repeated calculation &quot;outside of the (iteration) loop.&quot; A classic example:
adding a &quot;total&quot; attribute along with a &quot;calcTotal&quot; service. 

Str#114. &quot;Traveling Object&quot; Strategy // establishing responsibilities /
what I do (message traffic) 

 Pass an object (or object ID) as a parameter, allowing it to travel along a
series of message sends. At the end of the series, the last object can send the result
directly to the originator (a short cut, rather than waiting for all the message sends to
work back to the originator. (The caller - dispatcher -
caller-back pattern is a good example of this.) 

Str#115. &quot;Sender, Intermediary, Receiver&quot; Strategy // establishing
responsibilities / what I do (message traffic) 

 To loosely couple a sender, use a &quot;pass-through&quot; intermediary. 

 To simplify an intermediary, use a &quot;lookup&quot; intermediary. 

 (Refer to the &quot;sender-pass through-receiver&quot;
and &quot;sender-lookup-receiver&quot; patterns.) 

Establishing responsibilities / what I do

Strategies for building object models
*
