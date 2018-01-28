---
layout: post
type: blog
title: "XSS: Gotta catch’em all"
date: 2014-11-10 00:00:00 +0100
category: design
description: "One day I will be XSS master"
tags: [xss javascript security hack firefox berghain]
theme: bright
url: xss-gotta-catch-em-all
image: "/data/blog/xss_berghain.png"
---
![](/data/blog/xss_berghain.png)

> *Cross-site scripting (XSS) is a type of computer security vulnerability typically found in Web applications. XSS enables attackers to inject client-side script into Web pages viewed by other users*
>
> [Wikipedia](https://en.wikipedia.org/wiki/Cross-site_scripting)

Recently I discovered a new way to have fun: find XSS vulnerabilities on websites. As a frontend developer, I should (and I do) care about it. But when you discover how it works, you’re questioning yourself about the quality of your code. The different ways to perform an attack are so various, a page list them on [OWASP](https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet), and it’s quite impressive. Once you see a possible failure, you do all your best to exploit it. Then after few minutes (or hours sometimes), when you see the browser executing your alert: you have a geekgasm.

My favourite type of attack is to inject script via URL, which I find quite dangerous because it’s the easiest to exploit. Your victim has to open your ‘trapped’ link, and it’s done. The damages can be crazy, depending on the website. For example I found one on the Berghain website, which is completely pointless because there’s no data to get (well actually I could get admin credentials and put Sponge Bob in the event calendar, huh!). But find one on Amazon, get the cookies of your victim, then you can make orders with his credentials (but I believe Amazon got a robust system to prevent it).

These kind of attacks made me discover how good browsers are. Most of modern browsers have implemented filters to prevent XSS attacks. For exemple, on Chrome, all injections via URL will be blocked and replaced by ‘**about:blank**’, with an error in the console saying : **The XSS Auditor refused to execute a script in "https://www.thevulnerablewebsite.com/you/try/to/attack" because its source code was found within the request. The auditor was enabled as the server sent neither an 'X-XSS-Protection' nor 'Content-Security-Policy' header.**

It’s great to see browsers being really involved in the security of their users. But the sad part is the only one who fail at this (but like litterally) is Mozilla Firefox. Even Internet Explorer (from version 8) and Safari prevent them. I find it disappointing in a way, because Firefox got this reputation of Open Source software, robust and protecting your privacy. Then you realise it can let pass attacks that even IE8 prevent.

The worst in this story is when you realise you’re not able to help Mozilla to implement an XSS Auditor. Simply because you sucks at C++ and you’re lost in the Firefox source code repo. The only thing I did was to contact them via a form on their website. Surprisingly, they replied in the following 30 minutes. Apparently, they didn’t knew about this feature in other browsers. A ticket in bugzilla is open, an implementation is in progress, let see how it goes.

To be continued...
