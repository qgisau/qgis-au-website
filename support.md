---
title: Support
layout: default
---

<div>
  <h2>Community support</h2>
  <p>There are many free community resources available through mailing lists, YouTube videos, free tutorials and more! Check out our <a href="../resources">Resources</a> and the QGIS <a href="https://qgis.org/resources/support/" target="_blank">Contact and Support page</a> for more information.</p>

  <h2>Commercial support</h2>
  <p>If you need professional support, there are many options available. The QGIS project maintains a register of recognised <a href="https://qgis.org/resources/support/commercial-support/" target="_blank">QGIS support providers</a>. There are a few Australian companies on this list, including QGIS core contributors North Road and Chartis Technology.</p>

  <h2>Current Australian QGIS Sustaining members</h2>
  <p>Sustaining members are financial contributors to the QGIS project, providing about 2/3 of the total project budget.</p>

{% assign member_levels = "Medium,Small,Flagship,Large" | split: "," %}

{% for level in member_levels %}
  {% assign has_members = false %}
  
  {% for member in site.data.sustaining.rss.channel.item %}
    {% if member.member_country == "Australia" and member.member_level == level %}
      {% assign has_members = true %}
      {% break %}
    {% endif %}
  {% endfor %}

  {% if has_members %}
    <div class="icon-group mb-8">
      <h4>{{ level }}</h4>
      {% assign grid_class = "md:grid-cols-4" %}
      {% if level == "Small" %}
        {% assign grid_class = " md:grid-cols-5" %}
      {% endif %}
      <div class="grid grid-cols-2 sm:grid-cols-3 {{ grid_class }}">
        {% assign seen_members = "" %}
        {% for member in site.data.sustaining.rss.channel.item %}
          {% assign member_key = member.title | append: member.member_url %}  
          {% if member.member_country == "Australia" and member.member_level == level %}
            {% unless seen_members contains member_key %}
              <div class="sustaining-members">
                <a href="{{ member.member_url }}" target="_blank">
                  <img src="{{ member.image_url }}" alt="{{ member.title }}">
                </a>
              </div>
              {% assign seen_members = seen_members | append: member_key | append: "," %}
            {% endunless %}
          {% endif %}
        {% endfor %}
      </div>
    </div>
  {% endif %}
{% endfor %}


  <h3>QGIS Sustaining membership program</h3>
  <div class="mb-8">
      <p>
        The <a href="https://qgis.org/funding/membership" target="_blank">QGIS Sustaining membership program</a> provides a mechanism for individuals, businesses, and organisations to financially support the development and maintenance of QGIS.
      </p>
    <div>Contributions help support things like:
      <ul>
        <li>paying developers to fix bugs</li>
        <li>an annual grant programme that pays for substantial improvements to the QGIS project</li>
        <li>hosting fees for server infrastructure</li>
        <li>improvements to upstream libraries that QGIS depends on</li>
        <li>a full time web infrastructure maintainer</li>
        <li>a full time documentation writer</li>
      </ul>
    </div>
    <p>If your organisation uses QGIS, please consider <a href="https://qgis.org/funding/membership/#how-become-a-sustaining-member" target="_blank">becoming a sustaining member</a>. It's an inexpensive way to help ensure this incredible free software continues to thrive for many years to come.</p>
  </div>



</div>
