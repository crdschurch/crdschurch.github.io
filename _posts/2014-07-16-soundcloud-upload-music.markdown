---
layout: post
title:  "Sound cloud work flow to upload audio"
date:   2014-07-16 00:00:01
categories: technical-specification
---
### Table of Contents

  * [Installation](#inst)
  * [Flow chart](#flow)
  * [Authentication](#auth)
  * [Add track](#track)
  * [Playlist](#play)
  * [Embed URL](#embed)

<a name="inst"/>
### Installation
</a>
```
gem install soundcloud
```

<a name="flow">
![alt text](/flowcharts/soundcloud.svg "Sound cloud flow chart")
</a>

<a name="auth"/>
### Authentication
</a>
Create client object to access api's. It can be created with

```
require 'soundcloud'

client = SoundCloud.new({
     :client_id         => YOUR_CLIENT_ID,
     :client_secret:    => YOUR_CLIENT_SECRET,
     :username          => YOUR_USER_NAME,
     :password          => YOUR_PASSWORD
})
```

<a name="track"/>
### Adding audio to tracks
</a>
The uploaded audio will default to tracks i..e to user account. It lists all the tracks associated to the account.

```
track = client.post('/tracks', :track => {
    :title      => TRACK_TITLE,
    :description => TRACK_DESCRIPTION,
    :asset_data => File.new(FILE_NAME)
})

catch the response and store for future use
```
<a name="play">
### Creating a playlist and adding track to playlist
</a>
You can create a playlist as given in the snippet below

```
client.post('/playlists', :playlist => {
    :title    => YOUR_PLAYLIST_NAME,
    :sharing  => ACCESS_SPECIFIER (public, private)
})
```

To add the track to playlist. 

* [Get the playlist information](#getplay)
* [Get the track information](#gettrack)
* [Add to playlist](#addplay)

<a name="getplay">
#### Get playlist details
</a>

```
playlist = client.get('/me/playlists')
```
<a name="gettrack">
#### Get track details
</a>

```
track = client1.get('/resolve', :url => TRACK_URL)
```
<a name="addplay">
#### Add to playlist
</a>

```
"track_ids << [MULTIPLE TRACK ID's, Comma separated]"
OR single track id can be processed.

tracks = track_ids.map{|id| {:id => id}}
```
```
playlist = client.put('https://api.soundcloud.com/playlists/PLAYLIST_ID', :playlist => {
    :tracks => tracks 
})

```
<a name="embed">
### Embed information of the track
</a>

```
embed_info = client.get('/oembed', :url => TRACK_URL)

```
Store the relevant information in DB when ever it is appropriate for future references.

Repeat the process for adding multiple tracks 

