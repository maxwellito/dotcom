---
layout: post
type: blog
title: "Advertising gossip"
date: 2013-09-27 00:00:00 +0100
category: dev
description: "Data leak from your phone by apps you trust"
tags: "advertising tracking"
theme: bright
url: advertising-gossip
---
Advertising is an important part of the web. It’s a way to monetise the audience and get revenue. But sometimes I’m just a bit scared about the consequences of it. Not about the visual pollution (that’s another topic) but about the data given to these advertising company.

The example came from an iOS application, it was just a little banner at the top of the UI. With a simple packet analyser, I discovered the request to ‘generate’ a banner is made in a simple GET request in HTTP (not secure, of course, so sniff-able).

Here is one of the best points we can find :

Let’s begin by the general informations : your OS platform with version, your language, my career network, my current connection (3g/Wifi).

Then the dirty side : my exact position (altitude/latitude/longitude), my sexual orientation, then my Twitter ID and Facebook ID (as long as the app can have access to it).

Scary isn’t it?
What’s the point to give the exact position? A 'blurry’ one should be enough to purpose local advertising.

But the worst is to let transit this data in a non secure protocol. Let’s imagine you have a malicious app installed on your phone, it can know all these informations without asking your permission.

OK, it’s true, Facebook use your personal informations to generate advertising. But the difference is : they don’t give them to somebody else (except the NSA). And especially they don’t transmit them in clear in the nature.
