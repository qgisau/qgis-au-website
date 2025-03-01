---
layout: home
---

## QGIS Australia's mission is to engage, support and grow the QGIS community throughout Australia.
{: .intro-text}

QGIS Australia started as a Google Group in 2012, with the goal of connecting the QGIS community across Australia. The discussion list is still going strong, with hundreds of users posting questions, answers, and discussion on QGIS-related topics. We've run a few organised events over the years, and we're always looking for more we can do as a community.

Whether you're a casual user, a professional, a student, or just curious, we're always looking to connect, so please join us! We're Australia-focused, but anyone is welcome to participate. We're an active, welcoming group, here to help each other learn, share, and grow in our QGIS skills.

If you're interested in getting involved, join the <a href="https://groups.google.com/g/australian-qgis-user-group" target="_blank">QGIS Australia discussion list</a> and introduce yourself. We'd love to hear from you!

<div class="feature">
<h3>Shout out!</h3>
<p>This group wouldn't be here without the work of Andrew Jeffrey, Emma Hain, John Bryant, Nathan Woodrow, and Nyall Dawson, who've kept us going and helped build this community. We're looking forward to getting even more people involved in shaping QGIS Australia's future. </p></div>

<!-- If you're thinking about starting a QGIS group in your own country, we'd love to help you get started! -->

<div>
<h2>The QGIS Project</h2>
<p>This open source software initiative has evolved over the years, through community-driven development, governance, and a shared commitment to providing powerful, accessible, and free GIS tools for everyone.</p>
<p>Learn more:</p>
    <div class="resource-grid">
        <div class="grid md:grid-cols-3">
    {% for card in site.data.home_cards %}
            <a class="resource-card" target="_blank" href="{{ card.link }}">
              <img src="/assets/img/home/{{ card.thumbnail }}" />
              <div class="resource-card-text">
                <div class="resource-title">{{ card.title }}</div>
                <div class="resource-desc">{{ card.description }}</div>
              </div>
            </a>
    {% endfor %}
        </div>
    </div>
  </div>
