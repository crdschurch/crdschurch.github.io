---
layout: post
title:  "Analysis of migrating video content"
date:   2014-05-28 00:00:01
categories: technical-specification
---

### Table of Contents

  * [Task](#task)
  * [Analysis/Work flow](#analysis)

<a name="task"/>
### Task involved
</a>
Migrate all video content from crossroads legacy application to a collection (_media) in jekyll.

<a name="analysis"/>
### Analysis & Work flow
</a>
1 . Hierarchy of message data for videos in crossroads Database.

![alt text](/flowcharts/video_content.svg "Message Migration flow chart")

2 . Queries used in migration

```
# To get all available series
select * from series order by `StartDate` DESC ;

# To get all messages for a particular series say seriesID = 2
select * from message where SeriesID = 2 order by date desc;

# To get all media content for a particular content type for each message say messageId = 495 and ContentTypeId = 1

SELECT * from mediacontent
	where mediacontentid in (
		select messagemediacontent.mediaid 
			from messagemediacontent 
			where messageid = 495
		) AND ( iPodVideo IS NOT NULL)

```
3 . List of the existing video's can be depicted in the following URL

[http://www.crossroads.net/my/media/videos.php](http://www.crossroads.net/my/media/videos.php)
