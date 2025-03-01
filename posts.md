---
layout: posts
title: Posts
permalink: /posts/
---

<div id="posts-container">
  {% for post in site.posts %}
    <div class="post" data-tags="{{ post.tags | join: ',' }}">
      <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
        <p class="post-meta">
          <time class="dt-published" datetime="{{ post.date | date_to_xmlschema }}" itemprop="datePublished">
            {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
            {{ post.date | date: date_format }}
          </time>
          {%- if post.author -%}
            • <span itemprop="author" itemscope itemtype="http://schema.org/Person"><span class="p-author h-card" itemprop="name">{{ post.author }}</span></span>
          {%- endif -%}
        </p>
      <p>{{ post.excerpt }}</p>
      <p>
        {% for tag in post.tags %}
          <a href="/posts/#{{ tag }}" class="tag">{{ tag }}</a>
        {% endfor %}
      </p>
    </div>
  {% endfor %}
</div>