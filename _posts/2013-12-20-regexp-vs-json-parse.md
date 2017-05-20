---
layout: post
type: blog
title: "RegExp vs. JSON parse : FIGHT!"
date: 2013-12-20 00:00:00 +0100
category: dev
description: "JavaScript between two ways of doing something"
tags: "node.js regexp json i'm bored"
theme: bright
url: regexp-vs-json-parse
---
I'm using more and more nodejs as webserver. So easy to use and so lightweight. But when you need to execute a piece of script for a frequent request, you have to be performant.

My concerns were about the data verification from user. To explain, in my project, at some point the server is just a data relay between two machines. But to avoid any wrong use, I check if the data transmitted is correct. This data arrive as a json string, representing an object with a specific structure, it never change (and I don't want any malicious code or bad values included).

So I was wondering, what would be the most performant to check? Using a RegExp to check the json, or parse the json and check if the content is valid?

To test, I wrote the piece of code below. It's quite simple, it execute 20000 times both sceniarios. One half with correct data, an other one with invalid data. Then console.time help to display the execution time of each scripts.

```
/**
 * Perf test
 *
 */

// 0. Init
var i;
var correct_data = '{\"foo\":\"trololo\",\"bar\":42}';
var wrong_data = '{\"foo\":\"trololo\",\"bar\":42.0}';

// 1. The regexp
console.time('Regexp process');

var regexp_key = /^\\{\"foo\":\"[a-zA-Z]*\",\"bar\":[0-9]+\\}$/;
var regexp_obj = new RegExp(regexp_key);

for (i = 0; i < 10000; i++) {
  // regexp_obj = new RegExp(regexp_key);
  regexp_obj.test(correct_data);
}
for (i = 0; i < 10000; i++) {
  // regexp_obj = new RegExp(regexp_key);
  regexp_obj.test(wrong_data);
}

console.timeEnd('Regexp process');

// 2. The JSON parsing
console.time('JSON parsing process');

var jsonObj;
function checkObj(obj) {
  if (!obj) return false;
  if (!obj.foo || typeof obj.foo !== 'string') return false;
  if (!obj.bar || typeof obj.bar !== 'number') return false;
  return true;
}

for (i = 0; i < 10000; i++) {
  jsonObj = JSON.parse(correct_data);
  checkObj(jsonObj);
}
for (i = 0; i < 10000; i++) {
  try {
    jsonObj = JSON.parse(wrong_data);
    checkObj(jsonObj);
  }
  catch(e) {}
}

console.timeEnd('JSON parsing process');
```

You can try this code with Chrome, it's easy. Copy the code, open the 'Tools for developers', go to the tab 'Console', then paste the code and press Enter. The script will be executed and you'll see the output underneath.

On my machine, I got this. *(results may vary between machines)*

```
Regexp process: 17.889ms
JSON parsing process: 37.171ms
```

We can see the RegExp is quicker to execute. But there's a problem. In my case, we just create one instance of this RegExp, and it might not be the case in reality, it depends of the implementation. So let's make an other try with a new RegExp instance for each test (uncomment line 18 and 22).

```
Regexp process: 223.234ms
JSON parsing process: 39.507ms
```

Boom!

Here we are, the game has changed, and json parsing become the winner, by far!

Finally, always being careful of the context, it can change everything. And gosh damn! I didn't know creating RegExp was so heavy!
