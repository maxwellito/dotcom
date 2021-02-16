---
layout: post
type: project
title: graxel
subtitle: It's like the gravel pattern in Japanese gardens but with pixels.
date: 2021-02-16 00:00:00 +0100
category: pixel art
description: Pocket pixel editor made to be shared
quote: For the first time, I managed to transform randomness into beauty, at every attempts.
tags: code javascript pixel
theme: bright
midgetImage: '/data/graxel/thumbnail.gif'
url: graxel-editor
image: '/data/graxel/cover.gif'
blocs:
  - type: image
    imageLink: '/data/graxel/cover.gif'
    imageTitle: 'Random patterns generated with graxel'
    text: ''
links:
  - url: https://maxwellito.github.io/graxel/
    title: graxel app
    alt: graxel app
    icon: globe
  - url: https://github.com/maxwellito/graxel
    title: graxel repository
    alt: Source code of graxel on GitHub
    icon: github
---

Over the course of a two evenings, an idea crossed my mind and had to be built. A mobile pixel editor to doodle and relax. The only originality about it are it's constraint: black and white only, 21 by 21, and an uneditable pattern of pixel. I introduce to you : Graxel.

The UI is very minimalist: the canvas and 3 actions.

The 'canvas' is a SVG, very similar to triangulart. Using SVG makes it easier to edit and get input events from the user. In order to make the editor looks perfect, it scales to the closest ratio where the pixels are a rounded number (not a float). Otherwise some black lines would appear between pixels.

The actions are very basic too:

- `reset`: clears the canvas
- `random`: fills the canvas randomly
- `share`: opens share UI

However let's have a closer look to the last two actions.

First, the random action. In the original version, it was filling the canvas with random values. It wasn't groundbreaking. So before releasing the project, this feature needed some work. I wanted to generate something pleasant at every hit. The idea was to fill only a 1/8 of the canvas with random values and repeat it by symmetry to the entire surface. This changes everything. It looks beautiful at every attempts. **But why?**

From my experience, I think I can explain why on two points:

- **The symmetry**. It's one of the basic principles to make something beautiful. In this case the symmetry is on 4 axis, probably the maximum reachable with the canvas constraints.
- **The principles of doodling**. I love doodling on my free time, it's something relaxing and satisfying. From an external point of view it looks difficult but it's the easier form of drawing. Due to the amount of details, you can easily make a mistake, nobody will notice. The secret of doodling resides in the content density. The drawing can be abstract, poor taste or badly drawn, but as long as the space is evenly balanced, the doodling will look good. This is exactly what's happening in this editor. Due to the base pattern, the canvas can be filled at 25% of the space when empty, or 75% when full. Providing an average ratio of 50% with an evenly balanced density. This is perfect.

![Steps representing the random workflow](/data/graxel/symmetry.png)

> Empty > Fill 1/8 randomly > Clone on all axis

Last, the share feature. Social media integrations have always been a no go for me. It makes the webpage heavier, poor design, user tracking, and not designed for all sharing possibilities. However, a fairly recent API changed everything: it's the [Share API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share). It fixes all the previously listed problems: no scripts to add, repect user data, design it the way your want, let you share on what the user uses. Sadly, it's mostly mobile, but it will come to desktop very soon. Providing the ability to share a URL with message directly from a JavaScript call is fantastic. Even better, on some browser (Chrome mobile only, obviously) you can share files. So when the `share` button is tapped on Chrome Android, the canvas is shared as picture so users can post their canvas directly on social medias or share it on messaging apps. The future is bright.

Also, the canavas data is stored in the URL hash, making it easy to share without the Share API.

Feel free to have a try at [graxel](https://maxwellito.github.io/graxel). As usual the source code is available on [GitHub](https://github.com/maxwellito/graxel).

_Last note, if you poke the `random` button too much, it might come alive._
