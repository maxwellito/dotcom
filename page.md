---
layout: page
title: ''
pagination: 
  enabled: true
---
{% for post in paginator.posts %}
	<div class="post">
		{% include post_core.html post=post %}
		<a href="{{ post.url }}" class="diff">permalink</a>
	</div>
{% endfor %}

{% if paginator.total_pages > 1 %}
<p class="links float-container">
  {% if paginator.previous_page %}
    <a class="diff" href="{{ paginator.previous_page_path | prepend: site.baseurl }}">&laquo; newer</a>
  {% endif %}
  {% if paginator.next_page %}
    <a class="diff right" href="{{ paginator.next_page_path | prepend: site.baseurl }}">older &raquo;</a>
  {% endif %}
</p>
{% endif %}