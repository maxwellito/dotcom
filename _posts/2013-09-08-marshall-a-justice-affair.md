---
layout: post
type: blog
title: "Marshall: a 'Justice' affair"
date: 2013-09-08 00:00:00 +0100
category: dev
description: "Another post about my addiction to Justice"
tags: "marshall justice airplay"
theme: bright
url: marshall-a-justice-affair
---
Few days ago, the famous Marshall brand has launched a brand new series of speakers: mini Stanmore.
After the headphones, they starts to make basic speakers with the legendary design of their amplificators. They are working with different sources: composite, jack and bluetooth.

This object reminds me a project I had in mind last year. As a big Justice fan (who doesn’t know?), I’m facinated by their Marshall amps from their last tour. For the live, they are part of the scene. But during the last tour they have added a new feature: they are now full of LEDs and be part of the light show. If you wonder how it look, [watch this](https://www.youtube.com/watch?v=PF6mE5TpNXM), and as reminder I tried to do the same thing with an [IKEA bookshelf](https://vimeo.com/43520704).

So, I had the idea to create a little AirPlay Marshall amplificator: a small Marshall amp (like the MG15), working with AirPlay/Bluetooth or jack, but with the panel of LEDs (like Justice). To make this, I would need an old second hand amp, a Raspberry Pi, good speakers, a panel of LEDs and a lot of free time.

![](/data/blog/justice_amp_plans.jpg)

You can see how it would work on this bad schema. The Raspberry would be the audio receptor, the communication between the user device and the speaker. At the time I thought I would need an Arduino to control the lights, but actually the Raspberry is able to to it via the I/O connector. And of course to make a program on the Raspberry able to generate animations (bases on audio analysis of the input).

I was really excited about this, but let’s face it. It’s not doable.
Just by having the LED panel in front of the speakers, the sound would be terrible. And second point, I haven’t found any LED panel for this, so it mean : building this by myself. If my electronics skills were good that would be alright, but it’s not the case.

That’s sad because I would have loved to see this in my room, playing ‘Stress’ with blinking red LEDs.
Well, it’s just another dream left in my notepad (except if somebody think that is possible, got the knowledge and is interested, let me know : I’m IN!).
