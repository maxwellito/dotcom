---
layout: post
type: blog
title: "WebRTC: Lost signal"
date: 2015-10-05 00:00:00 +0100
category: dev
description: Just a sad point about WebRTC
tags: [webrtc javascript complain web]
theme: bright
url: webrtc-lost-signal
---
Once again, I have to be french and complain again, sorry.

WebRTC, by definition, is amazing. It allow you to establish connections between browsers and have peer to peer connections. So after a little issue with my personal project Liwe (Rackspace crashed my server, impossible for them to restore it, so I moved to OpenShift which is free) I decided to start to implement WebRTC to it. I had to discover the API, which I was expecting more difficult, but still not that easy.

To establish a RTC connection here is the process:

- Browser A generate an offer
- Browser A send the offer to browser B via your server/infrastructure *(it's called signaling)*
- Browser B set the offer and generate an answer
- Browser B send the answer to Browser A via your server/infrastructure again
- Browser A set the answer
- Connection establish, let's go partying.

There's something I hate in this procedure: why we need to reuse signaling to send the answer to the browser A while we could use the information from the offer to establish the connection.

This force us to have a persistant connection between the browser A and the signaling server. Otherwise we could use a simple RESTful API to connect browsers. There's always a first which create the entry point, then the second computer would just need to grab the offer to make a connection.

Or I’m completely wrong. I wish I am completely wrong.
