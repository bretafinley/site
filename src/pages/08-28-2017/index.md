---
path: '/first-post'
title: 'Gotta Start Somewhere'
subtitle: 'Having a good time, old sport?'
post_type: 1
post_date: 2017-08-28
published: true
subject_url: ''
image_url: ''
category: 'Editorials'
folder: 'Misc'
tags:
  - GatsbyJS
  - JavaScript
---

Every blog website needs a first post. One that sets the tone for the other blogs to come. But what should it be about? Well, the most appropriate thing I can think of is my experience with React, GatsbyJS, and actually building out this site. There’s still a lot to do in terms of overall polish and adding project and blog content, but as of now I’m happy enough to publish it.

Prior to writing this website I had no experience with React. In designing a personal website, I knew that I wanted a blog of some kind and some way to showcase different projects I was working on. As far as development goes, I wanted to work with a stack that would be simple to get up and running, but be able to learn a different technology along the way.

I had initially opted for an Angular 2 app with Spring Boot and MySQL for the backend. I have had previous experience with AngularJS and ServiceStack. I figured this stack would be similar enough to alleviate extra frustration, and different enough to provide a learning experience. I wanted to build an API using Spring that would allow me to query different subsets of projects and blogs. I set about designing the table schema for MySQL, as well as the routes for accessing posts by tag, folder, and date. This process alone was taking more time than I had originally wanted to spend getting the backend running. I tried to write a proof of concept Spring API and host it with AWS. This proved to be more complex than I intented, so I searched for a more efficient alternative. One that would allow me to get to designing the actual look of the site much faster.

After Angular 2, I started looking at static site generators. Rather than developing and maintaining a full backend, I decided that a static site would still allow me to publish content, but without the added complexity of a database and network layer. Documents wouldn’t need to be rendered on the server or the client, rather they would just be embedded within the HTML to begin with. I initially looked at the Jekyll site generator. Jekyll is a very popular site generator written in Ruby which uses markdown to generate static HTML content. This was a very appealing option, and the framework I initially decided to use. However, I discovered GatsbyJS from an episode of the Syntax podcast and never looked back.

GatsbyJS, like Jekyll uses markdown to generate HTML content. Unlike Jekyll, GatsbyJS uses React components for expressing document markup. Overall I found Gatsby to be more focused on customizing the look and feel of the site. I know Jekyll provides similar facilities, but I found it easier to get started with GatsbyJS. GatsbyJS also utilizes the up and coming GraphQL specification for “querying” markdown files. These “queries” can be executed with React components in order to “dynamically” generate new HTML pages. This was especially useful when implementing “tag” functionality. In a dynamic site, this would have taken the form of an API route which would have queried the database and returned posts which matched the queried tag. In GatsbyJS, every possible tag query generates its own index page. This would likely cause a problem for especially large blog websites with hundreds of tags, but is suitable for a personal blog such as this.

GatsbyJS is by no means perfect, yet I feel like I learned a lot from the experience of developing this website. GraphQL seems to be an interesting, if unrecognized technology. Also, the particular Gatsby starter I utilized for this site came with BabelJS out of the box, so I was able to utilize several interesting ES6 features during development. Overall, I really like Gatsby and what it can do, and am interested to see where the project goes from here.
