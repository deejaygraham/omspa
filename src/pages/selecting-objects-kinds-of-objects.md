---
layout: base.njk
title: 'Selecting objects -- kinds of objects'
permalink: '/selecting-objects-kinds-of-objects.html'
---

**

Selecting objects -- kinds of objects

**

_Str#34. "Select Kinds of Objects" Strategy // selecting objects (kinds of objects)_

\- Use generalization-specialization (gen-spec) to find additional classes.

. Look at each class as a generalization. Name its specializations, ones that fit with system objectives.

. Look at each specialization. Name its generalizations, ones that fit within system objectives.

\- Use gen-spec for domain-based reuse within an application; use configuration management for reuse across multiple applications, even multiple problem domains.

\- Use gen-spec to show domain-based "what's the same, what's different," within an application.

\- Examples: equipment, kinds of equipment; participants, kinds of participants; transactions, kinds of transactions.

Related pattern: [Patt#3.](/3-participant-transaction-pattern-transaction-patterns.html) "Participant-Transaction"

_Str#34a. " Fits within a Specialization Class -- Forever" Strategy // selecting objects (kinds of objects)_

\- Use generalization-specialization (gen-spec) whenever you can classify an object as being within a specialization class -- and you know that it will stay in that class.

\- Otherwise, use Patt#3 "Actor-Participant" instead (referred to as "composition, instead of inheritance").

[Strategies for building object models](/strategies-for-building-object-models.html)
