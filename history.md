---
layout: page
---
{% assign blogPosts = site.posts %}

<div class="headline">
  <h1>post index</h1>
  <h2>List of posts from Date.now() to 0</h2>
</div>

{% for blogPost in blogPosts %}
  <div>
    <a class="condensed" href="{{ blogPost.url }}">
      <h3><span class="diff">{{ blogPost.title }}</span> <span class="tag">{{ blogPost.type }}</span></h3>
      <p>{{ blogPost.date | date: "%d.%m.%y" }}</p>
      <p>{{ blogPost.description }}</p>
    </a>
  </div>
{% endfor %}
