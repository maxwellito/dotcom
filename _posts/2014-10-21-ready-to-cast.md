---
layout: post
type: blog
title: "Ready to cast"
date: 2014-10-21 00:00:00 +0100
category: design
description: "The day I started to play with the Chromecast API"
tags: [hack arte chromecast javascript]
theme: bright
url: ready-to-cast
image: "/data/blog/cast.png"
---
![](/data/blog/cast.png)

March 2014, the Chromecast is released in UK (and other European countries). I couldn't wait to buy this little cheap device to stream videos on my TV. My expectations were the one of a Google product: simple to use but hackable to do crazy things.

Then come disappointment. The device cannot stream videos from a local device, doesn't work offline, works only with compatible apps. So except enjoying YouTube and BBC player, there were nothing more to do with it. I'm exagerating, the carousel of the homescreen is pretty nice *(troll :)*.

At that point, I was quite bored of the Chromecast. Especially when you know it could do amazing things, the hardware is pretty good. Even on GitHub, I realised the v1 was easy to manipulate, but after the v2 update the party was over. FYI, the v2 was released month before the Chromecast release in UK.

Then they released the API. I had a look, it seemed pretty nice, especially the JavaScript API. I was already thinking about all these possible interactions, until I discovered an app key was required to enjoy the SDK.
***\*aaaarrrgg!!\**** the Chromecast was made to be a Google Play product, and nothing else... until yesterday.

What happen? I don't know for which reason but I wanted to use my [Arte hack](https://github.com/maxwellito/weluvarte) (which has been updated to something more interoperable..) to stream the videos to the Chromecast. In my head I couldn't accept Google choices to completely lock this lovely dongle. Then I was right, the Chromecast doesn't need a key to cast a video, there's a default one for simple streams : HOORAAAAAAYY!

Then after few tests I succeed to cast a video from Arte. At that point, you feel the xmas giggles, a sensation of surprise and happiness. I'm currently working to integrate the the script into my [welovearte](https://github.com/maxwellito/weluvarte) repo. It's great to implement features on a public website.

Oh, while playing with the API, I discovered something even better : the Chromecast works with URL from your local network. If you have videos on your machine, just start a http server then use a bit of Javascript to cast.
