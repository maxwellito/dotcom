---
layout: post
type: blog
title: "WhatsApp? I try to back up my history."
date: 2018-12-10 00:00:00 +0000
category: privacy
description: Your whole life in a black box
tags: [app data backup]
theme: bright
url: whatsapp
---
Over the last years, WhatsApp has been my most used app. The experience has always been fantastic. Focussed on performance and simplicity. It does one job but succeeds at it. Even when the 'Stories' feature got implemented, it didn't downgrade the overall experience, especially for people who don't give a fuck about it.

However, over the years, the storage allocated to WhatsApp on my phone kept growing. Deleting everything is tempting but reading back some of it in a few years will make me smile. Making a back-up before a fresh and clean reset would be perfect.

The first thought that came to my mind was to download my WhatsApp backup stored on Google Drive. But, inexplicably, it is impossible to download this backup. Get details or deleting it are the only available actions, making me feel powerless and confused.

After digging into the settings of WhatsApp, an option pop into my eyes: 'Export Chat'. This feature offers two options: 'Export with media' and 'Export without media'. Silly pictures and shameful videos are an essential foundation of my chats, so media is required. Then comes the choice of the destination: Mail or Google Drive (and more options). 

The exported data is a massive mess of pictures, audio files and videos, and a huge text file containing all the chat. Not really matching expectations of the user experience but the data was present. Reading a big text file is pretty awful, the reason why code editors got syntax colouration. The challenge was a good experience for writing a little parser that turns a text chat to pure HTML, something close to WhatsApp web.

The parser was interesting to write, mostly RegExp driven. There was a lot of use case to take care of, from finding the username to place the chat bubbles, use cases for media, message line breaks. It was also interesting to give life to HTML with only 70 lines of CSS.

But while checking a chat, a problem happens: the chat history wasn't complete. More than 400 texts were missing from the original conversation which contained 3000 messages. The source of the problem could be found on WhatsApp FAQ: `When sending with media, you can send up to 10,000 latest messages. Without media, you can send 40,000 messages. These constraints are due to maximum email sizes.`. Y THO?

The experience is not the same on iOS. Exports provide chat history in integrality — sad day for Android.

An alternative way came to my mind: the SD card storage. My previous phone had an SD card slot, and WhatsApp used to back it up on it. Unfortunately, my last phone is dead. After many failing attempts to connect a flash drive to my phone via USG OTG, I quit. The idea was to check if the app could recognise the stick as valid storage for local backup. 

Last try: contacting WhatsApp for help. The support was pretty reactive to respond. However, their solution was to update to the latest version and restart the phone. Obliged to admit my version wasn't up to date, but it didn't solve my problem. My reply to support explained the unsuccessful try and re-asked the question for more help but didn't redirected me to a solution.

In the meantime, digging into the file system of my Android phone let me discover a ton of DB files. These are simple SQLite files, but sadly (and thankfully) encrypted. The key can is available on rooted devices only. Another fail.

What about WhatsApp web? Trying to understand the communication between the device and the web browser is close to impossible. Everything is encrypted. There's still the solution to load a conversation from the top and export the DOM, but the medias will be a mess to extract.

After a few searches on Reddit, I realised I couldn't look further. Last hope would be to use a third party app to extract the most private and intimate data from my phone. I won't call.

So what?

Well, here I am, in front of my phone, feeling like I don't own my data — something that Google Drive can thoroughly enjoy. 