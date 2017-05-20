---
layout: page
---
{% assign projects = site.posts | where: "type", "project" %}

<div class="headline">
  <h1>Projects</h1>
  <h2>Mostly coloured stuff</h2>
</div>

{% for project in projects %}
<div class="project-box">
  <a href="{{ project.url }}">
    <div class="project-box-picture small r5-2 frame">
      <div class="content">
        <img src="{{ project.midgetImage }}"/>
      </div>
    </div>
    <div class="project-box-content small condensed">
      <h3 class="diff">{{ project.title }}</h3>
      <p>{{ project.description }}</p>
      <p>{{ project.date | date: "%d.%m.%y" }}</p>
    </div>
  </a>
</div>
{% endfor %}
