---
layout: default
title: Resources
permalink: /resources/
---

<div>
  {% for section in site.data.resources %}
    <div class="resource-grid">
      <h2>{{ section[0] }} </h2>
      {% assign section_data = section[1] %}
      <p>{{ section_data.description }}</p> 
      <div class="grid sm:grid-cols-2 md:grid-cols-4">
        {% for item in section_data.items %}
          <a class="resource-card" target="_blank" href="{{ item.link }}">
          {% if item.thumbnail %}
           <div>
              <img src="/assets/img/resources/thumbnails/{{ item.thumbnail }}" />
            </div>
          {% else %}
            <div>
              <img src="/assets/img/resources/thumbnails/default.png" />
            </div>
          {% endif %}
            <div class="resource-card-text">
              <div class="resource-title">{{ item.title }}</div>
              <div class="resource-desc">{{ item.description }}</div>
            </div>
          </a>
        {% endfor %}
      </div>
  </div>
  {% endfor %}
</div>