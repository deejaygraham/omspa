---
title: #1. &quot;Collection-Worker&quot; Pattern // the fundamental pattern
layout: layout.html
---

# Patt#1. &quot;Collection-Worker&quot; Pattern 

## Overview

Collection-worker is the fundamental object-model pattern. All other object-model
patterns are variations on this theme.

## Typical object interactions

 howMany --&gt; calcForMe - howMuch --&gt; calcForMe

 calcOverWorkers --&amp;gtcalcForMe

 rankWorkers --&amp;gtrateMe

## Other notes

* &quot;aboutMe&quot; helps one think about what other attributes might be needed
* &quot;calcForMe&quot; helps one think about what specific calculations might be needed
* &quot;rankMe&quot; helps one think about what ordering or comparison services might be
* &quot;rateMe&quot; helps one think about what self-assessment services might be needed

Related strategy: #21. &quot;Select Collections of Objects&quot; Strategy
