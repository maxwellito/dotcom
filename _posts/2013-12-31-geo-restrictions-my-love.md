---
layout: post
type: blog
title: "Geo-restrictions, my love."
date: 2013-12-31 00:00:00 +0100
category: dev
description: "Internet is everywhere and nowhere"
tags: [arte replay chrome "script kiddle"]
theme: bright
url: geo-restrictions-my-love
---
Arte is a franco-german TV channel, not one of the most popular in France but certainly the most interesting one, my favorite. The problem is now, I live in London, so I cannot watch this channel anymore. Even if in France I wasn't watching it on TV but on demand on my computer. The problem is, like the BBC player for british people, outsite of the territory you cannot watch your TV shows because of geographic restrictions. This famous: "This video is not available in your country".

I do not like that, and nobody does.

The thing is, I know the position checking is never made by the video stream connection. I can guess the mess to manage that with RTMP connections, ouch! So something might be doable on the client side. In the worst case: with a proxy.

After some analysis of the arte player, I found what I was looking for: the geolocalisation.js script. This is loaded at the start via https and respond bloc of functions. These methods are returning data about the client : ip address, time restriction, request date and the geographic zone codes.

*geolocalisation.js*

```
function arte_geoip_ip() {
  return 'XXX.XXX.XXX.XXX';
}

function arte_geoip_country_code() {
  return 'GB';
}

function arte_geoip_country_name() {
  return 'United Kingdom';
}

function arte_geoip_zone_codes() {
  return new Array('SAT', 'ALL');
}

function arte_time_time() {
  return 'Tue, 31 Dec 2013 18:44:11 CET';
}

function arte_time_timestamp() {
  return 1388511851631;
}

function arte_time_protection() {
  return 'youth';
}
```

My first thought was : "Oh come on, that's too easy, it's not possible". My idea was to make this request from french IP address to see the differences (at that point you say thanks to your French nerdy friends, yay I'm too lazy to do it via a proxy). Not surprising, the array returned by arte_geoip_zone_codes contain more keys.

Time to test!
I put a simple breakpoint at the end of geolocalisation.js with devtools. Refresh the page. Inject the code from the french request, then continue. Ta-daahh! The player is workAt the moment, that was great, I could watch the latest 'Tracks' (a brilliant program from Arte). But if I have to do that all the time, for every video... no. As developer, I'm a lazy ass. If I have to repeat the same task, I build the thing which will automise everything. So that was the best occasion to try to make a Chrome extension. It's not that complicated, really powerful, and I don't need to push the app to their store to let people use it. My only mistake was to inject a script after geolocalisation.js in every player DOM via a script link. I didn't know the page had script origin restriction, but fortunately no one on inline scripts. So I've updated my code and the magic came.

You can have a look on [plussept](https://github.com/maxwellito/plussept) to see the code, even if it's small and far to be a good example. You can also check [http://extensionizr.com/](http://extensionizr.com/) to begin to build your own extension.
