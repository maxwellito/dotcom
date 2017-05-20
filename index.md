---
layout: page
---
{% assign projects      = site.posts | where: "type", "project" %}
{% assign mainProject   = projects | first  %}
{% assign otherProjects = projects | slice: 1, 4  %}
{% assign blogPost      = site.posts | where: "type", "blog" | first %}

<!-- Projects -->
<div class="project-box-main">
  <a href="{{ mainProject.url }}">
    <div class="project-box-main-picture r-cover">
      <div class="content">
        <img src="{{ mainProject.image }}"/>
      </div>
    </div>
    <div class="project-box-main-content condensed">
      <h2>{{ mainProject.title }}</h2>
      <p>{{ mainProject.description }}</p>
      <p>{{ mainProject.date | date: "%d.%m.%y" }}</p>
    </div>
  </a>
</div>

{% for project in otherProjects %}
  <div class="project-box">
    <a href="{{ project.url }}">
      <div class="project-box-picture r5-2 frame">
        <div class="content">
          <img src="{{ project.midgetImage }}"/>
        </div>
      </div>
      <div class="project-box-content condensed">
        <h3 class="diff">{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <p>{{ project.date | date: "%d.%m.%y" }}</p>
      </div>
    </a>
  </div>
{% endfor %}


<!-- Blog posts -->
<p class="links float-container">
  <a class="diff" href="/history">post index</a>
  <a class="diff right" href="/page">next page &raquo;</a>
</p>
