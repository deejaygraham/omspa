---
title: '#2. "Actor-Participant" Pattern // transaction patterns'
---

_

Patt#2. "Actor-Participant" Pattern // transaction patterns

![Strpat00000005.gif](/img/Strpat00000005.gif)

_

**Typical object interactions**

\- howMany --> calcForMe

\- howMuch --> calcForMe

\- calcOverParticipants --> calcForMe

\- rankParticipants --> rateMe

\- getName< -- getName

\- getAddress <-- getAddress

**Examples**

\- Actor: person, organization (agency, company, corporation, foundation)

\- Participant: agent, applicant, buyer, cashier, clerk, client, civilian, customer, dealer, delegate, distributor, donor, employee, investor, manufacturer, member, officer, official, order clerk, owner, participant, policy holder, professional, prospect, recipient, retailer, sales clerk, sales rep, shipper, student, subscriber, supervisor, supplier, suspect, teacher, wholesaler, worker

\- Additional examples: anything used for different missions, such as aircraft-civilian mission, aircraft-military mission.

**Combinations**

**[](/3-participant-transaction-pattern-transaction-patterns.html)**[Patt#3.](/3-participant-transaction-pattern-transaction-patterns.html) "Participant-Transaction"

[Patt#2.](/2-actor-participant-pattern-transaction-patterns.html) "Actor-Participant", again (for example, customer - gold customer, for a customer who may participate as a gold customer, at least while he qualifies).

Related strategies:

[Str#13.](/selecting-objects-pattern-players.html) "Select Actors" Strategy

[Str#14.](/selecting-objects-pattern-players.html) "Select Participants" Strategy

[Str#52.](/pattern-players-what-i-know.html) "Establish Actor and Participant Attributes" Strategy

[Str#74.](/pattern-players-who-i-know.html) "Establish Actor and Participant Object Connections" Strategy

[Str#94.](/pattern-players-what-i-do.html) "Establish Actor and Participant Services" Strategy

[Transaction patterns](/transaction-patterns.html)

[Patterns for building object models](/patterns-for-building-object-models.html)
