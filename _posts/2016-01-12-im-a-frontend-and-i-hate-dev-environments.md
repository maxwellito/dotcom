---
layout: post
type: blog
title: "I'm a frontend guy and I hate dev environments"
date: 2016-01-12 00:00:00 +0100
category: illustration
description: Dirty solution for people with bad Vagrant machines behind corporate proxies
tags: [javascript frontend "chrome extension"]
theme: bright
url: im-a-frontend-and-i-hate-dev-environments
image: "/data/001/status_code.png"
---
![](/data/blog/status_code.png)

Over the years and projects I had to use different environment setup, for work and personal projects. Usually, I hate it. It takes ages to set up, the procedure never works correctly. Sometimes your changes doesn't work on production only because the context is different.

I remember a project where the QA website was build every night and no developer had the access to run the build script during the day. Unfortunately, if a bug appear we had no other choice than commit a fix and wait the next build. It's awful when something work on your dev machine but not in the production context. The browser dev tools are amazing to debug scripts but sometimes it's easier to make changes with your IDE and relaunch the webapp.

So, I realised that a simple and silly hack could help me a lot. Let me explain, when you work on the frontend, there's no need to change the backend, you just want to edit the JS, CSS and HTML. So I started to write a Chrome extension to redirect production files to my local files. And it works so well.

Suddenly this little hack made my life so easy, and I tend to use it too often. For example, my Vagrant machine doesn't work and I don't want to spend the day on it, fine I use the dev website of my coworker (http://his-domain-instead-of-mine) and I redirect the javascript my local machine. Also same situation when my coworker is working on an API route and I need to use it for my new feature (because I'm too lazy to create mock data and I prefer to code the real context). This also can work on production websites, which make it easier to debug in some cases.

Now, when somebody ask me to debug a project but the process to set up en environment is a pain, I only ask where can I try the production or dev website, then set up the redirection rules in my extension.

If you want to try it, I published a [Chrome extension boilerplate called Shuntr](https://github.com/maxwellito/shuntr) on GitHub

Enjoy it, it has saved my life (and patience) many many times.
