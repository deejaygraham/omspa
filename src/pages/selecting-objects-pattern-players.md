---
title: 'Selecting objects -- pattern players'
---

**

Selecting objects -- pattern players

**

_Str#13. "Select Actors" Strategy // selecting objects (pattern players)_

\- Look for actors: people and organizations that act as participants within the system under consideration.

\- Examples: person, organization (agency, company, corporation, foundation).

Related pattern: [Patt#2.](/2-actor-participant-pattern-transaction-patterns.html) "Actor-Participant"

_Str#14. "Select Participants" Strategy // selecting objects (pattern players)_

\- Analyze how each actor participates, in ways that might be of interest to the system under consideration.

\- Why. Each actor participates in one or more ways through time. It's the same actor, just different ways of participating. People talk about wearing "different hats" during the day. That's exactly what such participation is all about.

\- Examples: agent, applicant, buyer, cashier, clerk, client, civilian, customer, dealer, delegate, distributor, donor, employee, investor, manufacturer, member, officer, official, order clerk, owner, participant, policy holder, professional, prospect, recipient, retailer, sales clerk, sales rep, shipper, student, subscriber, supervisor, supplier, suspect, teacher, wholesaler, worker.

Related patterns:

[Patt#2.](/2-actor-participant-pattern-transaction-patterns.html) "Actor-Participant"

[Patt #3.](/3-participant-transaction-pattern-transaction-patterns.html) "Participant-Transaction"

_Str#15. "Select Places" Strategy // selecting objects (pattern players)_

\- Look for places where things come to rest, places that contain other objects.

\- Examples: airport, assembly-line, bank, clinic, depot, garage, geographic entity, hangar, hospital, manufacturing site, plant, region, sales outlet, service center, shelf, station, store, warehouse, zone.

Related pattern: [Patt#4.](/4-place-transaction-pattern-transaction-patterns.html) "Place-Transaction"

_Str#16. "Select Tangible Things" Strategy // selecting objects (pattern players)_

\- Look for tangible objects, ones used in the problem domain.

\- Take a walk through the business. Select objects from the tangible ones around you.

\- Examples: account, cash box, cash drawer, item, plan, procedure, product, schedule, scheduled event.

Related patterns:

[Patt#9.](/9-item-line-item-pattern-transaction-patterns.html) "Item - Line Item"

[Patt#11.](/11-item-specific-item-pattern-transaction-patterns.html) "Item - Specific Item"

_Str#17. "Select Transactions" Strategy // selecting objects (pattern players)_

\- Look for transactions, "events remembered," events that the system must remember through time. A transaction is a moment in time (for example, a sale) or an interval of time (for example, a rental).

\- Look for an entry in a historical record or log, an entry that must be maintained. Why? To answer questions or to perform assessments.

\- Examples: agreement, assignment, authorization, contract, delivery, deposit, incident, inquiry, order, payment, problem report, purchase, refund, registration, rental, reservation, sale, shift, shipment, subscription, time charge, title, withdrawal.

\- Note: Nearly all transactions consist of a number of transaction line items.

\- Note: Where do these transactions come from? The possibilities are:

. A window (the event logged is based upon human interaction at some point in time)

. Another object, monitoring for a significant event, then logging that such an event occurred

. Another system, one that your system can interact with regarding events it logs.

Related patterns:

[Patt#3.](/3-participant-transaction-pattern-transaction-patterns.html) "Participant-Transaction"

[Patt#4.](/4-place-transaction-pattern-transaction-patterns.html) "Place-Transaction"

[Patt#5.](/5-specific-item-transaction-pattern-transaction-patterns.html) "Specific Item - Transaction"

[Patt#6.](/6-transaction-transaction-line-item-pattern-transaction-patterns.html) "Transaction - Transaction Line Item"

[Patt#7.](/7-transaction-subsequent-transaction-pattern-transaction-patterns.html) "Transaction - Subsequent Transaction"

[Patt#8.](/8-transaction-line-item-subsequent-transaction-line-item-pattern-transaction-patterns.html) "Transaction Line Item - Subsequent Transaction Line Item"

_Str#18. "Select Associates" Strategy // selecting objects (pattern players)_

\- Look for associates, objects that need to know each other, yet:

. have no need to capture information or provide services about that association

. have no need for history about that association.

\- Most often, this strategy applies to the interaction of objects, whose actual objects are closely related.

\- Examples: aileron-gyro; aircraft-runway; building-sensor; driver-vehicle, loading dock - order; order-tote; truck - loading dock.

Related pattern: [Patt#12.](/12-associate-other-associate-pattern-transaction-patterns.html) "Associate - Other Associate"

_Str#19. "Select Items and Specific Items" Strategy // selecting objects (pattern players)_

\- Look for items, descriptive objects with values that apply to some number of specific items and actions that apply across those specific items.

\- Examples: aircraft - specific aircraft, loan description - specific loan, job description - specific job, video description - videotape, price category item - specific item, tax category item - specific item.

Related patterns:

[Patt#9.](/9-item-line-item-pattern-transaction-patterns.html) "Item - Line Item" Pattern

[Patt#10.](/10-specific-item-line-item-pattern-transaction-patterns.html) "Specific Item - Line Item" Pattern

[Patt#11.](/11-item-specific-item-pattern-transaction-patterns.html) "Item - Specific Item" Pattern

_Str#19a. "Separate Definition from Usage" Strategy // selecting objects (pattern players)_

\- When you need to define something (standard parts of a plan, standard parts of a schedule, standard descriptions of a product) and then use it in some way ( a specific plan, a specific schedule for today, a specific thing you are putting together), -- include both description classes (each object is like a catalog entry) and usage classes (each object keeps track of things that are happening this special time) in your object model.

\- This is an example of [Patt#9 "Item - Specific Item,"](/9-item-line-item-pattern-transaction-patterns.html) repeatedly applied.

_Str#20. "Select Interacting Systems and Devices" Strategy // selecting objects (pattern players)_

\- Look for other systems, ones that your system is responsible for interacting with.

\- (Real-time systems) Look for devices, ones that your system needs for data acquisition and control.

\- Add it to the PD component. Example: sensor.

\- Add a companion SI class to the system interaction component. Example: SensorSI. (SI objects encapsulate the specific communication needs for interacting with another system or device.)

_Str#20a. "Add Outbound/Inbound Request" Strategy // selecting objects (pattern players)_

\- Yes, add both PD and SI objects, separating logical and physical system interaction needs.

\- For the PD side, add an OutboundRequest object (to keep track of a sending object and the request number -- so you can handle an outbound asynchronous request correctly).

\- Also for the PD side, add an InboundRequest object (to parse and route inbound a command from another systems -- and keep track of to whom to return the results of the request.)

_Str#21. "Select Collections of Objects" Strategy // selecting objects (pattern players)_

\- Look at each object as a worker in a collection. Name the collections.

\- Look at each object as a collection with workers. Name the workers.

\- Examples:

. Collections of participants: company, department, group, organization, squad, team.

. Collections of places: airport, campus, store chain.

. Collections of things: assembly, batch, collection, list, log, queue, pool.

Related patterns:

[Patt#1.](/1-collection-worker-pattern-the-fundamental-pattern.html) "Collection-Worker"

[Patt#17.](/17-assembly-part-pattern-aggregate-patterns.html) "Assembly-Part"

_Str#22. "Select Container Objects" Strategy // selecting objects (pattern players)_

\- Use a domain-based container, one that holds other objects.

\- Examples: airport, aircraft, aisle, bank, bin, building, cabinet, folder, garage, hangar, hospital, locker, room, safe, store, warehouse.

Related patterns:

[Patt#14.](/14-container-content-pattern-aggregate-patterns.html) "Container-Content"

[Patt#15.](/15-container-container-line-item-pattern-aggregate-patterns.html) "Container - Container Line Item"

_Str#23. "Select a Collection" Strategy // selecting objects (pattern players)_

\- What if you need a collection of objects, yet such a collection has no special name?

. Add a collection, using a plural form of the worker name. Example: authorization systems.

. Add a collection, using the worker name, followed by the word "collection" or "server." Example: authorization server.

_Str#24. "Select the Smallest Applicable Collection "Strategy // selecting objects (pattern players)_

\- Use the smallest domain collection within the system's responsibility, to express responsibility across that collection--expressing appropriate scope.

\- Examples: bin, aisle, warehouse; city, county, state, country; team, department, organization, company, industry.

[Selecting objects](/selecting-objects.html)

[Strategies for building object models](/strategies-for-building-object-models.html)
