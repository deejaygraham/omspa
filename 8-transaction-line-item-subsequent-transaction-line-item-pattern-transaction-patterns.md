---
title: #8. &quot;Transaction Line Item - Subsequent Transaction Line Item&quot; Pattern // transaction patterns
layout: default
---

# Patt#8. &quot;Transaction Line Item - Subsequent Transaction Line Item&quot; Pattern // transaction patterns 

 

Typical object interactions 

 howMany --&gt; calcForMe 

 howMuch --&gt; calcForMe 

 calcOverSubsequentLineItems --&gt; calcForMe 

 rankTransactions --&gt; rateMe 

Examples

 Transaction line items: agreement, assignment, authorization, contract, delivery,
deposit, incident, inquiry, order, payment, problem report, purchase, refund,
registration, rental, reservation, sale, shift, shipment, subscription, time charge,
title, withdrawal. 

 Transaction line item - subsequent transaction line item: order line item - shipment
line item; reservation line item - rental line item; shipment line item - delivery line
item. 

Combinations 

Patt#6. &quot;Transaction - Transaction Line
Item&quot; 

Patt#9. &quot;Item - Line Item&quot; 

Patt#10. &quot;Specific Item - Line Item.&quot; 

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



