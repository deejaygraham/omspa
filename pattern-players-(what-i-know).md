---
title: Pattern players (what I know)
layout: default
---



Pattern players (what I know)


*Str#52. &quot;Establish Actor and Participant Attributes&quot; Strategy //
establishing responsibilities / what I know (pattern players) 

 For actor, consider: name, address, phone. 

 For participants, include: number, date and time (perhaps an ending date and time),
password, authorization level. 

Related patterns: 

Patt#2. &quot;Actor-Participant&quot; 

Patt#3. &quot;Participant-Transaction&quot; 

Str#53. &quot;Establish Place Attributes&quot; Strategy // establishing
responsibilities / what I know (pattern players) 

 For location, include: number, name, address (perhaps latitude, longitude,
altitude). 

Related pattern: Patt#4._4_Place_Transaction_Pattern_transaction_patterns
&quot;Place-Transaction&quot; 

Str#54. &quot;Establish Transaction Attributes&quot; Strategy // establishing
responsibilities / what I know (pattern players) 

 For transactions, include: number, date, time, status. 

 For line items, include: quantity (if it knows an item, rather than a specific item),
status. 

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

Str#54a. &quot;Transaction Times&quot; Strategy // establishing responsibilities /
what I know 

 A transaction object corresponds to a moment in time (e.g., sale) or an interval
of time (e.g., rental). 

 A moment in time (dateTime, dateTimeOfBirth, dateTimeOfManufacture,
effectiveDateTime, plannedDateTime, actualDateTime) 

 An interval of time (interval, effectiveInterval, dateTime + duration) 

 An interval of time, expressed as a start/stop combination (dateTimeStart,
dateTimeEnd; dateTimeIn, dateTimeOut; dateTimeOut, dateTimeBack; effectiveDateTime,
expirationDateTime). Fine detail: the second attribute in these pairs belongs in a
transaction line item, when different values may apply to each line item. 

Str#54b. &quot;An Attribute? Or Something More?&quot; Strategy // establishing
responsibilities / what I know 

 Is a person's hobby (or hobbies) just an attribute? Or something more? 

 Value. Just need a current value, based upon an enumeration of values? Add an
attribute. Describe the enumeration of values in text. Example: Hobbyist, with a
&quot;hobbies&quot; attribute 

 Standard Catalog Description. Need standard catalog descriptions you can choose from?
Add a &quot;standard catalog description&quot; class with whatever descriptive attributes
you need. Each &quot;standard catalog description&quot; object captures attribute values
which may apply again and again. Example: Hobbyist -- Hobby (attributes: type, name,
description) 

 History. Need history? Add a transaction object, to remember intervals of activity.
Example: Hobbyist &#150; Hobby Activity &#150; Hobby 

Str#55. &quot;Establish Item and Specific Item Attributes&quot; Strategy //
establishing responsibilities / what I know (pattern players) 

 For items, include: name, description, dimensions, size, universal product code
(UPC), weight. 

 For specific items, include: serial number, purchase date. (It might know a custom
value, while an item might know a default value.) 

Related patterns: 

Patt#9. &quot;Item - Line Item&quot; 

Patt#10. &quot;Specific Item - Line Item&quot; 

Patt#11. &quot;Item - Specific Item&quot; 

Str#56. &quot;Establish Interacting System and Device Attributes&quot; Strategy //
establishing responsibilities /what I know (pattern players) 

 For another system or device, include: number, name, operational state. 

 For its companion object, in the system interaction component, include: logon name,
password, phone numbers, address. 

Establishing responsibilities / what I know

Strategies for building object models
*
