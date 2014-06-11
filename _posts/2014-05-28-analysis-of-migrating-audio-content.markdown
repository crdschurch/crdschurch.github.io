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
# To get all audio content from mediacontent table

SELECT * FROM
mediacontent WHERE 
HighQFilePath IS NOT NULL AND (ContentTypeID = 2)
AND (HighQFilePath LIKE '%mp3') AND HighQFilePath != ''
```
3 . The job of collecting and reading all audio content is actually happening at the below legacy URL

* [http://www.crossroads.net/my/media/music.php](http://www.crossroads.net/my/media/music.php)

<!--4 . This script could be reviewed at the below given github repository

https://github.com/crdschurch/crossroads-legacy/blob/master/includes/documents/pages/my/media/messages.php

NOTE : - its a private repo link you might need to request access to see that-->


