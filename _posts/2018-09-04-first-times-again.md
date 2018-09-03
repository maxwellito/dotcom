---
layout: post
type: blog
title: "First times again"
date: 2018-09-04 00:00:00 +0000
category: code
description: Panic times in Chromeland
tags: [bugreport browser opensource]
theme: bright
url: first-times-again
---
Recently, Vivus received few issues reporting glitchy animations on the latest Chrome. I decided to check the damages but couldn't find any issues from the demo page. It's only when a contributor posted detailed steps on how to reproduce it that I realised the damages. Vivus animations via SVG load did not work on the last version of Chrome. That was critical. Especially because Google ship updates that get seemlessly installed. Meaning all Chrome users are affected. Panic at the highest level.

The first thing that came to my mind was to find a backup solution to ship as quickly as possible. Thankfully I had a solution in the back of my mind that could fix another problems related to CORS. Until 0.4.3, Vivus was creating an `object` tag linked to the SVG to load. Once loaded, the `svg` tag would be extracted and moved to the main document. Then the animation could start.

The patch consisted to use `fetch` to download the SVG and append it to the main document.
From the few contributors testing it, the behavior was right and working: good enough for `npm publish`.

As part of the issue, the user [pixedelic](https://github.com/pixedelic) came to the conclusion that it was a browser bug that needs to be reported, and posted the link to the Chromium bug tracker. It's the platform where the maintainers of the browser keep track of all the reported bugs. Got scared, and slightly lazy to setup a demo stripped down from Vivus. But I understood that I had to grow up and take some responsabilities.

Late that night, my first [bug report on Chrome](https://bugs.chromium.org/p/chromium/issues/detail?id=852190) got posted. Yay!

Quickly after posting it, few maintainers labelled the ticket as valid and found the cause of the problem. It got patched very quickly and got shipped in the following version. All good then.

This experience slightly reminded me my first pull request on GitHub. The discovery of a new place you don't know. Some jargon you've never heard before. And the importance of starting tickets with a well documented and detailed message.