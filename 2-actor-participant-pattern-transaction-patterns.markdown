---
title: #2. &quot;Actor-Participant&quot; Pattern // transaction patterns
layout: default
---

# Patt#2. &quot;Actor-Participant&quot; Pattern // transaction patterns


## Typical object interactions

 howMany --&gt; calcForMe

 howMuch --&gt; calcForMe

 calcOverParticipants --&gt; calcForMe

 rankParticipants --&gt; rateMe

 getName&lt; -- getName

 getAddress &lt;-- getAddress


## Examples

 Actor: person, organization (agency, company, corporation, foundation)

 Participant: agent, applicant, buyer, cashier, clerk, client, civilian, customer,
dealer, delegate, distributor, donor, employee, investor, manufacturer, member, officer,
official, order clerk, owner, participant, policy holder, professional, prospect,
recipient, retailer, sales clerk, sales rep, shipper, student, subscriber, supervisor,
supplier, suspect, teacher, wholesaler, worker

 Additional examples: anything used for different missions, such as aircraft-civilian
mission, aircraft-military mission.

## Combinations

Patt#3. &quot;Participant-Transaction&quot;

Patt#2. &quot;Actor-Participant&quot;, again (for
example, customer - gold customer, for a customer who may participate as a gold customer,
at least while he qualifies).

## Related strategies: 

#13. &quot;Select Actors&quot; Strategy

#14. &quot;Select Participants&quot; Strategy

#52. &quot;Establish Actor and Participant
Attributes&quot; Strategy

#74. &quot;Establish Actor and Participant Object
Connections&quot; Strategy

#94. &quot;Establish Actor and Participant
Services&quot; Strategy

Transaction patterns

Patterns for building object models
