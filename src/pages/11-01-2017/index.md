---
path: '/coop'
title: 'COOP'
subtitle: 'Counterfeit Object Oriented Programming'
post_type: 2
post_date: 2017-11-01
subject_url: 'https://github.com/bretafinley/coop'
image_url: ''
category: 'Security'
folder: 'Stack'
tags:
  - Exploit
  - RILC
  - OO
---

In the Spring of 2016, I gave a 75 minute lecture to my Software Security class about the dangers of Counterfeit Object Oriented programming. This lecture was based on *It’s a TraP: Table Randomization and Protection against Function-Reuse Attacks*, published in Conference on Computer and Communications Security in 2015. This paper can be found in the [ACM Digital Library](https://dl.acm.org/citation.cfm?id=2813682]).

Counterfeit Object Oriented Programming is a security exploitation technique which utilizes classical inheritance to inject malicious code and take control of the program counter (PC). This is done by overriding trusted superclass methods with malicious “gadgets” and corrupting the subclass’s virtual table to inherit from the newly introduced class. This is a variation of the Return into LibC exploited which also uses injected malicious code to take control of the program counter. This paper introduced a new compilation technique which appends a suite of capabilities to the produced binary designed to defend against such injection techniques. These techniques include: table randomization, low level pointer replacement, and address trapping.

For more information, please refer to my presentation which can be found in the project repository.

