---
layout: post
title:  "Analysis of migrating message posts from crossroads"
date:   2014-05-19 02:49:29
categories: technical-specification
---

### Table of Contents

  * [Problem Definition](#problem)
  * [Analysis](#analysis)
  * [Flowchart](#flowchart)


<a name="problem"/>
### Problem At Hand
</a>
Migrate all messages which are managed in crossroads legacy application as pages in jelkyll .

<a name="analysis"/>
### Analysis
</a>
1 . Hierarchy of message data  in crossroads Database

![alt text](/flowcharts/mediacontent.png "Message Migration flow chart")

2 . Queries used in migration

```
# To get all available series
select * from series order by `StartDate` DESC ;

# To get all messages for a particular series say seriesID = 2
select * from message where SeriesID = 2 order by date desc;

# To get all media content of all types for each message say messageId = 822


select
    mediacontent . *
from
    messagemediacontent
        inner join
    mediacontent ON mediacontent.mediacontentid = messagemediacontent.mediaid
where
    messageid = 822
        and (ContentTypeID = 5 OR ContentTypeID = 4
        OR ContentTypeID = 7
        OR ContentTypeID = 8)

```
3 . The job of collecting and reading all messages along with its associated media content is actually happening at the below legacy URL

http://www.crossroads.net/my/media/messages.php

4 . This script could be reviewed at the below given github repository

https://github.com/crdschurch/crossroads-legacy/blob/master/includes/documents/pages/my/media/messages.php

NOTE : - its a private repo link you might need to request access to see that

<a name="flowchart"/>
### Flowchart
</a>

 ![alt text](/flowcharts/messagemigrationflow.svg "Message Migration flow chart")