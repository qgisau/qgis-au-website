---
layout: posts
title: Posts
permalink: /posts/
---

<div id="posts-container">
  {% for post in site.posts %}
    <div class="post" data-tags="{{ post.tags | join: ',' }}">
      <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
      <p>{{ post.date | date: "%e %b %Y"  }}</p>
      <p>Posted by: {{ post.author }}</p>
      <p>{{ post.excerpt }}</p>
      <p>Tags: {{ post.tags | join: ', ' }}</p>
    </div>
  {% endfor %}
</div>

