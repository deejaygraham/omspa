---
title: #28. &quot;Sender - Pass Through - Receiver&quot; Pattern // interaction patterns
layout: default
---



# Patt#28. &quot;Sender - Pass Through - Receiver&quot; Pattern // interaction patterns 

 

Typical object interactions 


 sender.invokeReceiver --&gt; passThrough.invokeReceiver --&gt; receiver.executeRequest 


Examples


 saleLineItem.qualForDiscount --&gt; sale.qualForDiscount --&gt; customer.qualForDiscount 


Combinations 


 Superimpose upon participant - transaction - transaction line item. 
 Superimpose upon any three (or more) interacting pattern players. 


Notes 


 Sender is loosely coupled to the other two. 



Interaction patterns
Patterns for building object models




