---
layout: post
type: blog
title: "Instagram videos and the mysterious streams"
date: 2013-08-29 00:00:00 +0100
category: dev
description: "Audio, Video, Data?"
tags: "ffmpeg vine instagram"
theme: bright
url: instagram-videos-and-the-mysterious-streams
---
Few days ago I wanted to compare the video quality between Instagram and Vine. I didn’t discover anything interesting. They are quite the same (video codec, audio codec, bitrate), except the resolution. But on the Instagram video, something got my attention. In a classical video you have two streams : one for video, the other one for audio. But on Instagram videos, there’s two others streams which contain data.

I tried to know what it contains, but I don’t know how to get it.

If somebody got informations about it, you’re welcome!

```
max@ThinkPad-Edge:~/Downloads$ ffmpeg -i f5ec04c40c5911e3880922000ae8030e_101.mp4
ffmpeg version 0.8.6-4:0.8.6-0ubuntu0.12.04.1, Copyright (c) 2000-2013 the Libav developers
  built on Apr  2 2013 17:00:59 with gcc 4.6.3
*** THIS PROGRAM IS DEPRECATED ***
This program is only provided for compatibility and will be removed in a future release. Please use avconv instead.
[mov,mp4,m4a,3gp,3g2,mj2 @ 0x87a9240] max_analyze_duration reached

Seems stream 0 codec frame rate differs from container frame rate: 59.94 (2997/50) -> 29.97 (2997/100)
Input #0, mov,mp4,m4a,3gp,3g2,mj2, from 'f5ec04c40c5911e3880922000ae8030e_101.mp4':
  Metadata:
    major_brand     : isom
    minor_version   : 512
    compatible_brands: isomiso2avc1mp41
    encoder         : Lavf54.63.104
  Duration: 00:00:15.11, start: 0.000000, bitrate: 1235 kb/s
    Stream #0.0(und): Video: h264 (Constrained Baseline), yuv420p, 640x640 [PAR 1:1 DAR 1:1], 1091 kb/s, 29.97 fps, 29.97 tbr, 11988 tbn, 59.94 tbc
    Stream #0.1(und): Audio: aac, 44100 Hz, mono, s16, 88 kb/s
    Stream #0.2(eng): Data: rtp  / 0x20707472, 39 kb/s
    Stream #0.3(eng): Data: rtp  / 0x20707472, 7 kb/s
At least one output file must be specified
```
