---
layout: post
title:  "Analysis of migrating video content"
date:   2014-05-28 00:00:01
categories: technical-specification
---

### Table of Contents

  * [Task](#problem)
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

2 . Query used in migration

```
# To get all media content for a particular content type say ContentTypeId = 1 and gets only the mp4 type videos

SELECT * FROM mediacontent 
WHERE  ContentTypeID = 1 
AND ( iPodVideo IS NOT NULL AND iPodVideo != '') 
AND iPodVideo LIKE '%mp4';
```
3 . List of the existing video's can be depicted in the following URL

[http://www.crossroads.net/my/media/videos.php](http://www.crossroads.net/my/media/videos.php)
