---
title: #15. &quot;Container - Container Line Item&quot; Pattern // aggregate patterns
layout: default
---



# Patt#15. &quot;Container - Container Line Item&quot; Pattern // aggregate patterns 

 

Typical object interactions 

 howMany --&gt; calcForMe 

 calcOverLineItems --&gt; calcForMe 

 rankLineItems --&gt; rateMe 

Examples

 aircraft - aircraft line item; bin - bin line item; warehouse - warehouse line
item. 

Combinations 

Patt#9. &quot;Item - Line Item&quot; 

Patt#10. &quot;Specific Item - Line Item.&quot; 

 Also, when &quot;container&quot; is a participant, place, or specific item: 

Patt#2. &quot;Actor-Participant&quot; 

Patt#3. &quot;Participant-Transaction&quot; 

Patt#4. &quot;Place-Transaction&quot; 

Patt#5. &quot;Specific Item - Transaction&quot; 

Patt#11. &quot;Item - Specific Item.&quot; 

Notes 

 When working with containers within containers, apply this pattern to the
smallest container in that domain, within your system's responsibilities. 

Related strategies: 

#22. &quot;Select Container Objects&quot; Strategy


#103. &quot;Service in the Smallest Applicable
Container&quot; Strategy 

Aggregate patterns

Patterns for building object models



