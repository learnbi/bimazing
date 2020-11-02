---
title: How this blog is made
tags: ["meta", "how-to", "web", "i-made-thing"]
cover: paul_zoetemeijer_machinery.jpg
author: atte juvonen
---

<re-img
    src="paul_zoetemeijer_machinery.jpg"
    title="Photo by Paul Zoetemeijer on Unsplash"
    href="https://lh3.googleusercontent.com/fife/ABSRlIq9G7TTcHCHk4rWpi6hxtccAk1kMExAAu_2e_0B1duHnh99eRQtlCeXfVe_RFVJGoo6oYhZXiiIs82wySuDdyA41f8fj1WFfkRSIDDmBkc5JXiJ7F7CD_qxIBEr9TRAH8u600llZJ6_NnabFUTi0jiS6Ikyo6l2Fqh-e7fQnOvBGhFDAJDI2RhZxTqlvvdXSym1OdTsPSJR79bdP8iPDeaTt_ZfB3mrL_uy4oxVP1Dryfd7vatFq2mnx56jLXcF0YVvc3ux6MLcoH4A3ND2cQwoR23vqcYMkMXZe4w0kUk5SimuFoZg0DIiTVlQB1qX1z-9aslibiiaI0hCS7suK7TZMTdbklYRtps08LHfV7giwnKI-sodR6WPsqGWxJbeY5Txq_FgC60UbnWsEe6IMn5bRBY-wGWCX4lHGWmE6DxsabuL8fcF9gz2cPwD4z1hNBguIfVV0JhPqok4S4gZZUmZVJdoZce_RCxyApUOcrKaZmMFQgj9spq_6i4A6DPWIQO9okQw7vI9hs6Hqxxhm6MCslPu_WyKu4rLZGZ4HN6aSoeutPU4Bam5smzLmp62l-ahC69zxF0NCO-J-Fa-Lohklg4LuQZ5ca12nGIhCpHcej3-IacooGA7Kqt2gAaxhMyn-IX0maqRW1fGurmfij7_h79EEHekS2VPc2p5sSSb6UNP-wWNDYa7seEWhozbR04wyw3bHkjNQjY2vvRp6BqgWN_UdWw=s16383-w2400"
    >
</re-img>

I wanted to have the freedom to publish my thoughts and the freedom to tinker with their presentation - without being limited by corporate politics or technical constraints. I ended up creating my own blog with <a href="https://www.gatsbyjs.org/features/" target="_blank">GatsbyJS</a> and publishing it via my own domain. Behind that link is a concise comparison of Gatsby against typical website setups, in case you are thinking about starting your own blog. Next I will explain the motivation behind my tech choices, and then go over the actual setup for this blog.

### Medium is not a public square

A few years ago I wanted to out a particular company about bad stuff they were doing. I asked Medium if they will protect my freedom of speech when the company inevitably demands the content to be taken down. To my absolute surprise Medium said they will not, they will simply take down my content at the first sight of a legal threat. I decided not to publish the story. I haven't heard of any examples of Medium actually censoring people, so presumably they don't do this often. But the Internet is littered with examples of large corporations taking down speech they don't like. It's kind of what you'd expect, really: a large corporation will protect your freedom of speech as long as it costs them nothing and nobody powerful asks them not to.

Furthermore, Medium provides absolutely dreadful user experience. If you open a Medium article on mobile, more than half of your screen real estate will be covered by pop-ups. Why are you asking me to subscribe to an author before I've even had a chance to glimpse at their article? No I don't want to get notifications, why would anybody want those from a blogging site? No I don't agree to your user tracking, even though you only have an "agree" button as pseudo-GDPR-compliance. I just came here to read an article, can I just do that?

It's absolutely astonishing that Medium has become the de facto blogging platform in recent years.

### Wordpress is fine, I guess

If you just want to write, WordPress is not a bad choice. You can self-host. You can tinker a bit. If you want to tinker a lot, it's much easier to just create your own website. My main issue with CMS's like WordPress, Ghost, etc. is that while you theoretically own your own content, it's going to be in a format which will be difficult to move to another platform. Sure you can theoretically do it, and Gatsby actually has source plugins for WordPress and Ghost, but in practice you won't move. You'll be stuck with whichever limitations of WordPress annoy you. When you create your website by yourself instead of using a platform, you won't really have limitations other than the ones imposed by your own tech choices, which you can always change.

### Why this blog is statically generated

GatsbyJS is a static web site generator. This means that my blog is generated into HTML,JS,CSS at _build time_ and I don't have a costly server dynamically generating pages. The main advantages of a static site generator are:
- Hosting the blog **costs nothing** at providers like Netlify
- Improve loading times to most places on earth because assets can be **delivered by CDN** (instead of a single server in a single location, you have many servers in many locations and any request is routed to the nearest one).
- **No server maintenance** is required

I write my blog posts in **Markdown**. It's really easy to format and my content will not be married to any platform. For example, if I want to ditch Gatsby in the future and create my own static site generator, I can do that knowing that transforming Markdown isn't going to give me too much trouble.

### Why GatsbyJS specifically

There are many static web site generators out there. I didn't do a comparison. I like that Gatsby is made for React (instead of reinventing the wheel in that aspect). Their developer community seems active and friendly. But the main thing that attracted me to Gatsby was its promise of delivering performance out of the box. If you have any non trivial website and you want good performance, you have to do a ton of optimizations to get that. The idea that a framework can do those optimizations for you is really appealing. Gatsby does a lot of cool things, but this promise didn't really turn out to be true (I ended up spending a lot of time optimizing the performance and some things still don't work as they should. For example, Gatsby generates duplicates of some images, so when an image is used on multiple pages, the user downloads the same image multiple times from different paths without leveraging browser's cache). Despite its faults, this site now has pretty sweet performance with the help of Gatsby:
- The website is **visible and functional after only 1 round trip and ~20kB of data**.
- Internal links are prefetched on hover, giving the UX that **subsequent pageloads load instantly**.
- Autogenerated **tracedSVG image placeholders** are stylized to create a smooth look and transition as the image loads without the page jumping around.
- **Also works for users who have JS disabled**. A static version of the website is generated, which is rendered on first load, and then the page is hydrated into React (for users who have JS).

On one hand I want to try making my own static site generator after tinkering so much with Gatsby. On the other hand I'm really excited to see what the future holds for Gatsby and where the developers will take it within a few years.