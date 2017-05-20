---
layout: post
type: blog
title: "Let's play a game.."
date: 2014-02-20 00:00:00 +0100
category: dev
description: "Catch me if you can"
tags: [arte geolocalisation github]
theme: bright
url: lets-play-a-game-with-arte
image: "/data/blog/tracks.png"
---
I knew that was supposed to come soon or later, but arte.tv has made some changes on their player making my extension completely out of order. DAMN! Welcome in the game of the cat and the mouse.

![](/data/blog/tracks.png)

They found a way to execute the script just after loading the geolocalisation informations. No way to find a little failure to inject some code. But after few hours of search, the light came. With the Chrome Extension you can execute a script at the start of the page loading, when the DOM is completely empty. That was my only chance to do something, because after, it's too late.

My little trick is easy, it's to wrap the XHR (XMLHttpRequest) object in a custom object. Like that, everytime they make an Ajax request I can execute a piece of script. The script of course is the override of geolocalisation functions. And TA-DAHH!! I can watch Tracks again!

Now the script is also making an extra request to load the JSON infos about the video. From this, we can get the http link of the video. The output is in the console.

If I have some time I'll try to find a way to download the HD version via RTMP but it looks difficult. But let see what I can do. And also a way to make automatic plugin update, but Chrome is not helping.

[Fork me on GitHub](https://github.com/maxwellito/plussept)
