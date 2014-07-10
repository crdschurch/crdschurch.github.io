---
layout: post
title:  "Analysis of migrating series content from crossroads"
date:   2014-07-18 12:32:29
categories: technical-specification
---

### Table of Contents

  * [Task](#task)
  * [Analysis/Work flow](#workflow)

<a name="task"/>
### Task
</a>
 Migrate all series content from crossroads legacy application to a collection (_series) in jekyll.
<a name="workflow"/>
### Analysis / Work flow
</a>
1 . Hierarchy of sries content in crossroads Database

![alt text](/flowcharts/migrate-series-content-flow-chart.svg "Series Content Migration flow chart")

2 . Queries used to migrate audio content

```
# Get all series content from series table

SELECT * FROM series ORDER BY StartDate DESC

```
3 . Series content YAML values include:

```
---
layout: series
series: "House of Hypocrites"
permalink: "/house-of-hypocrites/"
title: House of Hypocrites
date: 2002-08-17 00:00:00
endDate: 2002-09-01 00:00:00
description: "Hypocrisy is everywhere. Let's look at how we all help to build this house of hypocrites."
src: "http://s3.amazonaws.com/crossroads-media/images/legacy/content/House.jpg"
---
```
