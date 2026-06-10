---
title: 'Interaction patterns'
---

<p>Interaction patterns are patterns of how objects work with each other. Overlay these patterns on players in other patterns.</p>

<p>The interaction patterns are:</p>

<ul>
{% for pattern in patterns %}
{% if pattern.tags[0] == "interaction patterns" or pattern.tags[0] == "device patterns" %}
<li><a href="/pattern/{{ pattern.id | lower | replace('#', '-') }}.html">{{ pattern.id }}.</a> {{ pattern.name }}</li>
{% endif %}
{% endfor %}
</ul>

<p><a href="/patterns-for-building-object-models.html">Patterns for building object models</a></p>
