---
title: Support
layout: default
---

<div>
  <h2>Commercial support</h2>

  <p>The QGIS project maintains a register of recognised <a href="https://qgis.org/resources/support/commercial-support/" target="_blank">QGIS support providers</a>, including a few Australia-based companies.</p>

  <h3>Core Contributors</h3>

  <p>A QGIS Core Contributor is a developer or community member who actively contributes to the core development, maintenance, and improvement of the QGIS software.   We have two - Chartis,   and North Road</p>

  <h2>Current Australian QGIS Sustaining members</h2>
  <div class="icon-group mb-8">
    <h4>Medium</h4>
    <div class="grid grid-cols-4">
        {% assign seen_members = "" %}
        {% for member in site.data.sustaining.rss.channel.item %}
          {% assign member_key = member.title | append: member.member_url %}
          {% if member.member_country == "Australia" and member.member_level == "Medium" %}
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

  <div class="icon-group mb-8">
    <h4>Small</h4>
    <div class="grid grid-cols-5">
        {% assign seen_members = "" %}
        {% for member in site.data.sustaining.rss.channel.item %}
          {% assign member_key = member.title | append: member.member_url %}
          {% if member.member_country == "Australia" and member.member_level == "Small" %}
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
