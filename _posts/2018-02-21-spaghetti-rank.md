---
layout: post
type: blog
title: "SpaghettiRank"
date: 2018-02-21 00:00:00 +0100
category: code
description: HackerRank is broken, fix it, here is the code.
tags: [code interview]
theme: bright
url: spaghetti-rank
---
Part of many dev interviews require a session on HackerRank to test candidate capacities on algorithms.

Let's be honest, this is frustration at many levels. Many of us will stress about it and cannot show the best of themselves. On the other side, youngsters getting out uni are fully prepared for this after many years of theory. But the most important: it's not a good way to test a candidate. 

Nobody will spend most of their time writing any of these algorithms or similar. It might represent 3% of your job, at best. 

We need a better test. Something that will test what they gonna really do. Like dealing with out of date legacy code. Debbuging some crappy stuff. Facing technical issues in weird conditions.

Let me introduce *SpaghettiRank*. 

It works exactly like HackerRank except the exercise will show you some out of date code. The goal is to explain what it does, explain the choice of the author, and add new feature without breaking the existing ones. 

Putting people in front a piece of code they didn't write tell you more about your candidate than anything else. Their reaction to something badly designed will let you see if they try to understand author design choice or just shout how stupid the author was. Asking to add a feature reveal their feeling about following the existing logic (even if the conception is not ideal) to keep consistency or prefer to rewrite everything. These situations can also bring you to talk about their previous experiences and discover more about them. Having to work on a piece of code from the framework you use show you their experience with it in a very short time.

Because seriously, you know how to write a binary search tree? Well go debug an old Angular 1.2.14 directive without tests and docs that keeps creating undigestable errors logs that are longer than the bible!! [Undigestable.. Angular.. you get it? Ok, Im out]

In the meantime, you can still show a real pull request to a candidate ask them to analyse it. It should be good enough.