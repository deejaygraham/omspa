---
title: #12. &quot;Associate - Other Associate&quot; Pattern // transaction patterns
layout: default
---



# Patt#12. &quot;Associate - Other Associate&quot; Pattern // transaction patterns 

 

Typical object interactions 

 howMany --&gt; calcForMe 

 calcOverOtherAssociates --&gt; calcForMe 

 rankOtherAssociates --&gt; rateMe 

Examples

 aileron-gyro; aircraft-runway; building-sensor; driver-vehicle; loading dock -
order; order-tote; truck - loading dock. 

Combinations 

 any other pattern. 

Notes 

 Associates are objects that know each other, without a need for information about
that association or history about it. 

 In some pattern instances, an &quot;other associate&quot; may need to know some
number of associates. 

Related strategy: #18. &quot;Select
Associates&quot; 

Transaction patterns

Patterns for building object models



