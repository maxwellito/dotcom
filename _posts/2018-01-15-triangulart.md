---
layout: post
type: project
title: triangulart
subtitle: Fusion of hipsters and pixel art
date: 2018-01-15 00:00:00 +0100
category: pwa vector drawing
description: 'Dummy graphic editor to make isometric illustrations'
quote: What? Is it a webapp?
tags: code javascript pwa game puzzle
theme: bright
midgetImage: "/data/triangulart/thumbnail.jpg"
url: triangulart
image: "/data/triangulart/cover.jpg"
blocs:
- type: image
  imageLink: "/data/triangulart/001.jpg"
  imageTitle: 'App icon'
  text: ''
- type: image
  imageLink: "/data/triangulart/002.jpg"
  imageTitle: 'Trinagulart mobile interface'
  text: ''
links:
- url: https://maxwellito.github.io/triangulart/
  title: Triangulart app
  alt: Triangulart app
  icon: globe
- url: https://github.com/maxwellito/triangulart
  title: Triangulart repository
  alt: Source code of Triangulart on GitHub
  icon: github
---
Triangulart is an old project that came up when I needed to build an illustration based on triangles. After spending too much time on Illustrator to figure out how to make it easy I realised I could build my own editor as a WebApp. It didn't represent a lot of efforts because most of the code was coming from _triangulr_ to generate the grid, then few UI elements and DOM event to build a basic editor. It was minimalist (even brutalist) but did the job pretty well. It was enough to waste few minutes on it. HackerNews proved it to me by keeping my link at the top for a good Friday afternoon.

After few months (or year?) it was time to improve the tool. Some missing features were crucial when a big project is done with it. The opportunity was perfect to learn VueJS which was used for the UI. 

As part of the new features:
- Undo: it's first time I had to code a stack to reverse operations on the canvas and it was pretty simple to do. This feature is probably the most important.
- ‎Selection tool: doodling something and lacking space was one of my biggest frustrations. I wanted to be able to select an area of triangles, move them, fill them or even delete them. It wasn't easy to implement but worth it!
- ‎Touch friendly: it wasn't the priority but ended up being the most amazing feature. Being able to use the app on old iPads is really enjoyable. It gave me please to reuse my outdated Nexus 7.
- ‎PWA (Progressive Web App): being able to play with it offline was a big plus. Not very complex to do, most of it was taken from _breaklock_. It was mostly designing icons.
- ‎Local Storage: got always scared that my browser crash and loosing all my work. Having an auto-save at regular intervals is very handy.
- ‎SVG output: to export artworks, it was available in two formats: JSON the editable version, the SVG the final output. So to make it less confusing, there's only one format: SVG. It contain all the required data and can also be used in graphical editors.

The interface and code is not perfect. There are some good code split to do, better routing, better menu layout..
Also, moving to canvas would be a huge performance gain for big workspaces.

I'm looking forward to see what users gonna make with it.

However, I thought back about the reasons I created this app to reach the conclusion that my life follow this pattern:
- Got an art project in mind
- ‎Start working on it
- ‎Realise that code could help me
- ‎Abandon research on the project to focus on code
- ‎Build a webapp
- ‎Expose it to the world
- ‎Polish it (maybe a v2)
- ‎Move on and never do the art project

[Try Triangulart](https://maxwellito.github.io/triangulart/)

