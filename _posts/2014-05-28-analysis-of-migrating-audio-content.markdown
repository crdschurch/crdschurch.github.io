---
layout: post
title:  "Analysis of migrating audio content from crossroads"
date:   2014-05-28 05:25:55
categories: technical-specification
---

### Table of Contents

  * [Task](#task)
  * [Analysis/Work flow](#workflow)

<a name="task"/>
### Task
</a>
Migrate all audio content from crossroads legacy application to a collection (_music) in jekyll.

<a name="workflow"/>
### Analysis / Work flow
</a>
1 . Hierarchy of audio content in crossroads Database

![alt text](/flowcharts/migrate-audio-content-flow-chart.png "Audio Content Migration flow chart")

2 . Queries used to migrate audio content

```
# To get all available series
select * from series order by `StartDate` DESC ;

# To get all messages for a particular series say seriesID = 2
select * from message where SeriesID = 2 order by date desc;

# To get all audio content for each message say messageId = 822

SELECT 
    *
FROM
    mediacontent
WHERE
mediacontentid IN (SELECT 
	messagemediacontent.mediaid
FROM
	messagemediacontent
WHERE
	messageid = 69)
AND (HighQFilePath IS NOT NULL)
```
3 . The job of collecting and reading all audio content is actually happening at the below legacy URL

* [http://www.crossroads.net/my/media/music.php](http://www.crossroads.net/my/media/music.php)

<!--4 . This script could be reviewed at the below given github repository

https://github.com/crdschurch/crossroads-legacy/blob/master/includes/documents/pages/my/media/messages.php

NOTE : - its a private repo link you might need to request access to see that-->


