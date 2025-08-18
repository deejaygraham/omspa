---
title: Pattern players (who I know)
layout: default
---



Pattern players (who I know)


*Str#74. &quot;Establish Actor and Participant Object Connections&quot; Strategy
// establishing responsibilities / who I know (pattern players) 

 For an actor, include an object connection to: its participants. 

 For a participant, include an object connection to: its actor, its transactions. 

Related patterns: 

Patt#2. &quot;Actor-Participant&quot; 

Patt#3. &quot;Participant-Transaction&quot; 

Str#75. &quot;Establish Place Object Connections&quot; Strategy // establishing
responsibilities / who I know (pattern players) 

 For a location, include object connections to objects which come to rest at a
location . . . or are contained by a location. 

 For a location, include object connections to transaction objects, to show that
location's participation in that transaction. 

Related pattern: Patt#4._4_Place_Transaction_Pattern_transaction_patterns
&quot;Place-Transaction&quot; 

Str#76. &quot;Establish Transaction Object Connections&quot; Strategy //
establishing responsibilities / who I know (pattern players) 

 For a transaction, include object connections to: participants, transaction line
items, a companion transaction, one that occurs at the same moment in time. 

 For a transaction line item, include object connections to: the transaction, a
companion &quot;item description&quot; object, a subsequent transaction line item. 

Related patterns: 

Patt#3. &quot;Participant-Transaction&quot; 

Patt#4. &quot;Place-Transaction&quot; 

Patt#5. &quot;Specific Item - Transaction&quot; 

Patt#6. &quot;Transaction - Transaction Line
Item&quot; 

Patt#7. &quot;Transaction - Subsequent
Transaction&quot; 

Patt#8. &quot;Transaction Line Item - Subsequent
Transaction Line Item&quot; 

Str#77. &quot;Establish Item and Specific Item Object Connections&quot; Strategy //
establishing responsibilities / who I know (pattern players) 

 For an item, include object connections to: specific item, transaction line item
(if specific item is not needed in the model), container line item (if specific item is
not needed in the model). 

 For a specific item, include object connections to: item, transaction line item,
container line item. 

Related patterns: 

Patt#9. &quot;Item - Line Item&quot; 

Patt#10. &quot;Specific Item - Line Item&quot; 

Patt#11. &quot;Item - Specific Item&quot; 

Str#78. &quot;Establish Interacting System or Device Object Connections&quot;
Strategy // establishing responsibilities / who I know (pattern players) 

 For an interacting system or device: 

. Include an object connection (expressed as attributes) between a PD object and is
corresponding system interaction (SI) object. 

Establishing responsibilities / who I know

Strategies for building object models
*
