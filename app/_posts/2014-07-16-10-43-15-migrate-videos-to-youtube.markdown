---
layout: post
title:  "Migrate videos to YouTube"
date:   2014-07-16 10:43:15
categories: technical-specification
---

### Table of Contents
  * [Installation](#install)
  * [Register a project](#register)
  * [Task](#task)
  * [Analysis/Work flow](#analysis)
  * [Flowchart](#flowchart)
  * [Code samples](#code-samples)
  * [API References](#references)

<br/>
<a name="install"/>
#### Install google api client ruby gem
</a>

```
gem install google-api-client

```
<br/>
<a name="register"/>
#### Register a project
</a>
Go to google developer console [Google Developers Console](https://console.developers.google.com/project) and create a project to get client id, client secrete and API key.

To authorize a request and get the user access token [see](https://developers.google.com/youtube/v3/code_samples/ruby) YouTube data API ruby code samples .

<br/>
<a name="task"/>
#### Task
</a>

1.Get all message video and videos from DB

2.Migrate all video and message video to youTube.

3.Create playlist

4.Add all message videos to ``messaage`` playlist

<br/>
<a name="analysis"/>
#### Analysis & Work flow
</a>

Query used to get message videos from mediacontent table

```
# To get all available series
select * from series order by `StartDate` DESC ;

# To get all messages for a particular series say seriesID = 2
select * from message where SeriesID = 2 order by date desc;

# To get all message video content for each message say messageId = 822 from mediacontent table

SELECT * FROM mediacontent WHERE mediacontentid IN (
        SELECT messagemediacontent.mediaid FROM messagemediacontent 
        WHERE messageid = 822 )
        AND ( iPodVideo IS NOT NULL) AND (ContentTypeID = 4) 
        AND (iPodVideo LIKE '%mp4')  AND iPodVideo!='' ORDER BY RecordDate ASC;   
```
<br/>
Query used to get videos from mediacontent table

```
# To get all video content from mediacontent table

SELECT * FROM mediacontent 
WHERE  ContentTypeID = 1 
AND ( iPodVideo IS NOT NULL AND iPodVideo != '') 
AND iPodVideo LIKE '%mp4';

```
<br/>
<a name="flowchart"/>
#### Flow chart
</a>

1.Upload videos to youtube using youtube data API V3.

<br/>

![alt text](/flowcharts/upload-video-to-yt-flowchart.svg "Upload videos to youTube flow chart")

<br/>

2.Add message videos to youTube playlist.

![alt text](/flowcharts/add-videos-to-yt-playlist.svg "Add videos to playlist flow chart")
<br/>
<a name="code-samples"/>
### Code Samples
</a>

#### 1. uplolad video to youTube

```
 # get client and youtube object
 client, youtube = get_authenticated_service
 # api request body
 body = {
      :snippet => {
        :title => 'vidoe title',
        :description => 'description',
        :tags => 'tags',
        :categoryId => 'People and Blog',
      },
      :status => {
        :privacyStatus => 'public'
      }
    }
    
# send upload video request
videos_insert_response = client.execute!(
      :api_method => youtube.videos.insert,
      :body_object => body,
      :media => Google::APIClient::UploadIO.new('video filename', 'video/*'),
      :parameters => {
        :uploadType => 'resumable',
        :part => body.keys.join(',')
      }
    )

```

<br/>
#### 2. Create playlist

```
# get client and youtube object
client, youtube = get_authenticated_service
request_body = {
          :snippet => {
              :title => 'playlist titlt',
              :description => 'description',
              :publishedA => 'ublish_at]',
              :channelId => 'channel_id'
          },
          :status => {
              :privacyStatus => 'public'
          }
    }
# send create playlist request
playlist_response = client.execute!(
          :api_method => youtube.playlists.insert,
          :body_object => request_body,
          :parameters => {
              :part => request_body.keys.join(',')
          }
      )
```
<br/>

#### 3. Add video to playlist

```
 # get client and youtube object
 client, youtube = get_authenticated_service
 # create request body
 request_body = {
            :snippet=> {
                :channelId => channel_id,
                :playlistId => playlist_id,
                :resourceId => {
                    :kind => 'youtube#video',
                    :videoId => video_id,
                },
            }
        }
# send add video to playlist request
playlist_response = client.execute!(
        :api_method => youtube.playlist_items.insert,
        :body_object => request_body,
        :parameters => {
            :part => request_body.keys.join(',')
        }
    )
    
```
<br/>
<a name="references"/>
#### API References
</a>

* [https://developers.google.com/youtube/v3/code_samples/ruby#authorize_a_request](https://developers.google.com/youtube/v3/code_samples/ruby#authorize_a_request)

<br/>

