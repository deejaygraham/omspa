---
title: #7. &quot;Transaction - Subsequent Transaction&quot; Pattern // transaction
patterns
layout: default
---



# Patt#7. &quot;Transaction - Subsequent Transaction&quot; Pattern // transaction
patterns 

 

Typical object interactions 

 howMany --&gt; calcForMe 

 howMuch --&gt; calcForMe 

 calcOverSubsequentTransactions --&gt; calcForMe 

 rankSubsequentTransactions --&gt; rateMe 

Examples

 Transaction: agreement, assignment, authorization, contract, delivery, deposit,
incident, inquiry, order, payment, problem, report, purchase, refund, registration,
rental, reservation, sale, shift, shipment, subscription, time charge, title, withdrawal. 

 Transaction - subsequent transaction: application-issue; intermediate result - final
result; order-shipment; purchase-payment; reservation-sale; traffic citation - payment. 

Combinations 

Patt#3. &quot;Participant-Transaction&quot; 

Patt#4. &quot;Place-Transaction&quot; 

Patt#5. &quot;Specific Item - Transaction&quot; 

Patt#6. &quot;Transaction - Transaction Line
Item.&quot; 

Notes 

 Work out transactions in time sequence (the order they usually occur in). 

 If subsequent transaction and its line item objects correspond 1-to-1 with
transaction and its line item objects, combine them. 

Related strategies: 

#17. &quot;Select Transactions&quot; Strategy 

#54. &quot;Establish Transaction Attributes&quot;
Strategy 

#76. &quot;Establish Transaction Object
Connections&quot; Strategy 

#96. &quot;Establish Transaction Services&quot;
Strategy 

Transaction patterns

Patterns for building object models



