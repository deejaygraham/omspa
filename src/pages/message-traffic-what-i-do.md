---
title: 'Message traffic (what I do)'
---

**

Message traffic (what I do)

**

_Str#113. "Batch Up Immediate Results" Strategy // establishing responsibilities /what I do (message traffic)_

\- Excess message traffic can make an object model harder to understand and harder to implement, too.

\- Here's what to do about it: "Batch up" immediate results. Add attributes that hold intermediate results, to reduce message traffic. In effect, you are moving a repeated calculation "outside of the (iteration) loop." A classic example: adding a "total" attribute along with a "calcTotal" service.

_Str#114. "Traveling Object" Strategy // establishing responsibilities / what I do (message traffic)_

\- Pass an object (or object ID) as a parameter, allowing it to travel along a series of message sends. At the end of the series, the last object can send the result directly to the originator (a short cut, rather than waiting for all the message sends to work back to the originator. (The [caller - dispatcher - caller-back pattern](/30-caller-dispatcher-caller-back-pattern-interaction-patterns.html) is a good example of this.)

_Str#115. "Sender, Intermediary, Receiver" Strategy // establishing responsibilities / what I do (message traffic)_

\- To loosely couple a sender, use a "pass-through" intermediary.

\- To simplify an intermediary, use a "lookup" intermediary.

\- (Refer to the ["sender-pass through-receiver"](/28-sender-pass-through-receiver-pattern-interaction-patterns.html) and ["sender-lookup-receiver"](/29-sender-lookup-receiver-pattern-interaction-patterns.html) patterns.)

[Establishing responsibilities / what I do](/establishing-responsibilities-what-i-do.html)

[Strategies for building object models](/strategies-for-building-object-models.html)
