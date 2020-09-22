---
layout: post
type: blog
title: 'Life in the UK'
date: 2020-09-22 00:00:00 +0000
category: general
description: Never miss an opportunity to build a PWA
tags: [tech]
theme: bright
url: life-in-the-uk
---

I passed the _Life in the UK_ test. But my journey was to it way more interesting than it seems.

This test is one of the requirements to get the UK citizenship. The test consists in 24 questions about UK history and modern life. The pass mark is at 18, so 75% right answers to pass. There's an official book to practice, made by the Home Office, where all the questions are made from.

History class has never been my cup of tea. As far as I remember I litterally _sucked_ at history. So learning the one of the United Kingdom of Great Britain and Northern Ireland (yes, this is the official name) would be slightly tough.

Knowing some friends who previously passed the test, I asked for their advice. All of them were pretty clear: _crunch practice tests until you never fail_. There are tons of apps/websites with questions sets to practice. However, I wasn't very keen to install random apps on my phone and jump between them to not miss a single question. So I took the problem in a different way.

My plan:

- Looking at the most popular practice apps
- Download their APK
- Decompile them (sounds more tough than 'unzip')
- Look for the questions source
- Reformat them all for my own app.

It was a very fun night, seriously.

Parsing data from one format to another is actually amusing, because every app is using different format: CSV, SQLite, JSON, TXT. Then with a simple Node script, the raw data can be transformed to the format of your choice. Then you own a little base of 7000 questions. Sounds great, but it's not, because most of it are doublons. After implementing a very cheap way of detecting them, the output shrinked drastically, as you can see with the output above.

```bash
$ node main.js --stats
Base size: 3041
Tip count: 2939
Doubles: 4023
Same answers: 339
```

Most the these apps are simply reusing the same set of questions. For those who don't, they rephrase the questions. I bet all the original questions are from practice books, then been copied to apps, then rephrased (probably by fear of lawsuit) for copycats. Sadly my dataset is not as clean I would like, but it's good enough to play with.

After building a very basic PWA, and many UI tweaks, here is [Life in the UK](https://maxwellito.github.io/life-in-the-uk/) with the [source code](https://github.com/maxwellito/life-in-the-uk). This is very minimalist, no framework/build, the whole logic (HTML+CSS+JS) is in the `index.html` (~340 lines). Thanks to the PWA, it works offline. Also it keep track of the failed questions to make you practice them later.

Feel free to hack it, copy the questions for your own use, make PR to improve the app, sanitise the dataset... or just test it and see how knowledgable you are about Life in the UK.

PS: I think I'm ready for my first DMCA takedown, but I don't care I passed my test `¯\_(ツ)_/¯`
