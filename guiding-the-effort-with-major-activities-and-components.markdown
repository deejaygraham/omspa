---
title: Guiding the effort with major activities and components
layout: default
---



# Activities and model components 


*Str#1. &quot;Four Major Activities, Four Major Components&quot; Strategy //
activities and model components*
* Organize your work around four major activities, within four major components:


* Four major activities:


. Standard: Identify purpose and features, select objects, establish responsibilities,
work out dynamics with scenarios.

. Variation 1: You may find it helpful to focus on working out dynamics with scenarios,
establishing responsibilities along the way. This is especially suitable for real-time
applications.

. Variation 2: You may find it helpful to select transaction, aggregate, and plan
objects, then use the corresponding patterns to guide you through selecting additional
objects, establishing responsibilities, and working out dynamics with scenarios.

* Four major components:


. Standard: Problem domain, human interaction, data management, system interaction.

. Variation 1: You may find it helpful to begin with human interaction, followed by
problem domain, data management, and system interaction. This is especially suitable when
your domain experts want to talk in terms of human interaction from the very start.

. Variation 2: You may find it helpful to begin with problem domain and system
interaction, followed by human interaction and data management. This is especially
suitable for real-time applications, when your domain experts are keenly interested in the
data acquisition and control aspects of the system under consideration.


*Str#1a. &quot;Build an Initial Object Model, then Proceed Feature-by-Feature&quot;
Strategy // activities and model components 

*
* Here is a very helpful path for building object models.


* Identify purpose and features.


. Purpose statement. Prioritized list of features.

* Build an initial object model, working with domain experts.


. Select initial objects (using strategies; include participants, transactions, places,
items, specific items).

. Establish initial responsibilities (using strategy #86 and the stereotypical
responsibilities expressed by object-model patterns).

* Work out dynamics with scenarios, feature-by-feature.


a. Develop a scenario view for the feature.

b. Add objects and responsibilities that you need for the scenario.


*Str#1b. &quot;Use Feature Milestones&quot; Strategy // activities and model
components 

*
* Use your prioritized features list to plan, build, and measure.


* Early in the development effort, use your prioritized features list day-by-day, while
developing an initial object model and scenario views (one scenario view for each
feature).


* For the rest of the development effort, use your prioritized features list to plan,
build, and measure what you produce -- namely, the frequent, tangible, working results.


* Some notes:


. How frequent is &quot;frequent&quot;?

. . Each week, each month, or each quarter -- depends upon the size of the project and
the amount of added effort required to make working results available to others.

* Why use features milestones -- and measure features completed, using frequent,
tangible, working results?


. In two words: risk reduction.

* How do you estimate percent completion?


. Take the features list, assign a weight to each feature (based upon level of
difficulty, relative number of lines of code, and level of skill of the person who will do
the work), and then make your estimates.

. Your estimates will improve over time, as you deliver more and more tangible results
along the way.


*Str#1c. &quot;Take Multiple Paths&quot; Strategy // activities and model components 

*
* For each outcome, consider multiple paths for reaching that goal. Travel down one
of those paths. When your progress slows somewhat, move to another path, for awhile.


* &quot;All features, all classes, then the top ten classes&quot;


. features -&gt; classes -&gt; top 10 classes -&gt; responsibilities, scenarios for the
top 10

* &quot;One feature at a time&quot;


. feature -&gt; small object model -&gt; scenario view

* &quot;Key players first&quot;


. 1-2 participants + 1-2 transactions + line items, items -&gt; responsibilities,
scenarios

* &quot;Key transactions first&quot;


. transaction - subsequent transaction - subsequent transaction -&gt; participants,
line items, items -&gt; attributes, services


*Str#1d. &quot;Invest an Hour&quot; Strategy // activities and model components 

*
* Rather than philosophize endlessly, invest an hour in each of several different
ways of modeling a particularly challenging area. Compare your results -- and decide which
way to go (based upon actual results, rather than the outcome of a multiweek debate).



*Str#1e. &quot;Consider the Domain First, Artifacts After That&quot; Strategy //
activities and model components 

*
* Build an object model with a domain expert first. Then add-in content that you
can extract from artifacts (existing data models, source code, whatever).


* Reason why: you need the benefit of the former (fresh insights, new ideas) to help
you grapple with the latter (what to include, what to exclude).



*Str#1f. &quot;Extract Useful Content From An Existing Data Model&quot; Strategy //
activities and model components 

*
* Yes, it can be done.


* Best practice: build an initial object model with a domain expert first. Then use
that model to help you filter out the classes and attributes (in an previous data model)
that are no longer needed. Why: the added domain understanding will help you do a better
job leaving unneeded things behind, rather than dragging everything from the past along
with you once again.


* For the entities:


. List them. Delete correlation tables. Delete (or revise) names that do not fit the
problem domain vocabulary (words that a domain expert uses and understands). Collapse
supertypes-subtypes that do not express domain-based generalization-specialization.

* Then, when you work on attributes:


. List them. Delete (or revise) names that do not fit the problem domain vocabulary
(words that a domain expert uses and understands). Delete flags, indicators, sequence
numbers, and unique keys -- nearly all of which are simply leftover implementation
mechanisms from a previous system.


