---
title: #29. &quot;Sender-Lookup-Receiver&quot; Pattern // interaction patterns
layout: default
---



# Patt#29. &quot;Sender-Lookup-Receiver&quot; Pattern // interaction patterns 


 ![Strpat00000034.gif](/Strpat00000034.gif) 

# Typical object interactions 

* sender.selectNextReceiver --&gt; lookup.selectReceiver, followed by . . .


* sender.invokeReceiver --&gt; receiver.executeRequest


# Examples

* saleAnalysisWindow.lookupLineItem --&gt; sale.lookupLineItem, followed by . . .


* saleAnalysisWindow.calcLineItemProfit --&gt; sale.calcProfit




# Combinations 

* Superimpose upon participant - transaction - transaction line item.
* Superimpose upon three (or more) interacting pattern players.


# Note 

* This approach keeps lookup object simpler.
*  [Interaction patterns](/interaction-patterns.html) 
*  [Patterns for building object models](/patterns-for-building-object-models.html) 



