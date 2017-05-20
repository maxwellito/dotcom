---
layout: post
type: blog
title: "When JavaScript make my life easier"
date: 2013-10-28 00:00:00 +0100
category: dev
description: "Generate triangles by hand is boring, generating them with JavaScript is funier."
tags: "javascript canvas fail"
theme: bright
url: when-javascript-make-my-life-easier
image: "/data/blog/triangulr.jpg"
---
For people who doesn’t know me, I’m a huge fan of vector drawing. A pure Adobe Illustrator addict. These last time I’m working on a pattern I’ve used few months ago : [triangles](http://maxwellito.com/post/triangles).

It’s looking nice and simple, but take fuckin ages. It’s like makin doodles, for a simple A4 page, it can take few evenings. And for my current illustration I need a background of random triangles in greyscale. But before to become bored and crazy, I realised it could be funnier to ask the help of JavaScript. Of course the following involve HTML5’s canvas and my favourite library of the moment : [two.js](https://two.js.org/)

How to start? That is the question.
At the start, if the triangles fit all together we should have the same pattern as.. what example I could give.. the scene of the Daft Punk during their 2007 tour (here is a [picture](https://www.flickr.com/photos/23842442@N02/2278373855) for in-cults). At the moment, it’s quite easy : you give the size of your map, and the line height (or triangle height if you prefer).

Once done, you just have to add one parameter which make all the magic : freedomArea. What is that? it simple, this parameter is an integer, it define the freedom area size around a point. At the moment the triangles are too regular, tro straight, and I want mess. So the idea is simple, I want the points to be free to move from their original position. And I limit them with the freedomArea parameter. Smaller is this param, more straights the triangles will be. Higher the value is, messier the triangles will be.

![](/data/blog/triangulr.jpg)

Happy of the result, I realised a problem I didn’t mention. How can I export this? The canvas is nice, but I want it in my Illustrator. Unfortunately, two.js doesn’t have an export function. So let’s do that in my dirty script, and thank God the SVG is XML. Once the map generated, the SVG dom is in my console, I just need to put this in a file and the magic is mine.

This make me realised that two.js would probably need an SVG export method. It’s probably time to give a fork.

**Update**: Well, I actually finished the script to realise stupidly that I can make a copy of the canvas content : it’s the SVG dom. F.A.I.L.
I would say my SVG code is cleaner (no useless attributes), but it’s a fail anyway.
