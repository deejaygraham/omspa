---
title: #31. &quot;Gatekeeper-Request-Resource&quot; Pattern // device patterns
layout: default
---



# Patt#31. &quot;Gatekeeper-Request-Resource&quot; Pattern // interaction patterns 


 ![Strpat00000036.gif](/Strpat00000036.gif) 

# Typical object interactions 

* - for gatekeeper and request

1. - - addRequest --&gt; create
1. - - selectRequest --&gt; rateMe
1. - - rankRequests --&gt; rateMe
1. - for gatekeeper and resource

1. - - sendRequestToResource --&gt; executeRequest
1. - - selectResource --&gt; rateMe


# Examples 

1. comm line gatekeeper - comm line request - comm line.


# Combinations 

*  [Patt#2.](/2-actor-participant-pattern-transaction-patterns) &quot;Actor-Participant&quot; (participant = gatekeeper)
*  [Patt#3.](/3-participant-transaction-pattern-transaction-patterns) &quot;Participant-Transaction&quot; (participant = gatekeeper)
*  [Patt#5.](/5-specific-item-transaction-pattern-transaction-patterns) &quot;Specific Item - Transaction&quot; (specific item = resource).
*  [Interaction patterns](/interaction-patterns) 
*  [Patterns for building object models](/patterns-for-building-object-models) 



