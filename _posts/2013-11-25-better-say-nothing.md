---
layout: post
type: blog
title: "Better say nothing"
date: 2013-11-25 00:00:00 +0100
category: dev
description: "Some HTML5 specifications are acting a bit weird"
tags: "html5 video javascript"
theme: bright
url: better-say-nothing
---
Sometime I try to understand the choices of html5 implementation. Simply because of a function, which makes me laugh, it's '*canPlayType*'.
This method is made to check if the browser can read a specific video codec. It sounds useful, especially when the most popular format is not open source. The problem is what we get: three possibilities : "", "maybe" or "probably". Yay! That's very helpful, very helpful.

```
videoTag = document.createElement('video');
videoTag.canPlayType('video/webm; codecs="vp8.0, vorbis"');
> "probably"
```
