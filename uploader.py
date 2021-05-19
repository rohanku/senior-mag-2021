#!/usr/bin/env python3

import pypandoc
import os

import os

fstring = '''---
title: "%s"
image: %s
imageMeta:
  attribution: "%s"
  attributionLink:
featured: true
authors:
%s
date: %s
tags:
  - %s
---
%s
''' 

directory = 'to_upload'
for filename in os.listdir(directory):
    if filename.endswith('.docx'):
        filepath = os.path.join(directory, filename)
        docxFilename = filepath
        txtFilename = filepath[:-4]+'txt'
        output = pypandoc.convert_file(filepath, 'plain', outputfile=txtFilename)
        assert output == ""
        f = open(txtFilename)
        s = f.read().split("\n")
        headline = s.pop(0)
        s.pop(0)
        s.pop(0)
        s.pop(0)
        authors = "\n".join(map(lambda x: "  - "+x.lower().replace(" ", "-"), s.pop(0)[4:].split(" and ")))
        s.pop(0)
        s.pop(0)
        s.pop(0)
        image = s.pop(0)[7:]
        s.pop(0)
        attribution = s.pop(0)[13:]
        s.pop(0)
        article_id = s.pop(0)[4:]
        s.pop(0)
        date = s.pop(0)[6:]
        s.pop(0)
        tag = s.pop(0)[5:]
        s.pop(0)
        s.pop(0)
        s.pop(0)
        s.pop(0)
        s.pop(0)
        s.pop(0)
        s.pop(0)
        print(headline, authors, image, date, article_id)
        f = open(f"content/{article_id}.md", 'w')
        f.write(fstring % (headline, image, attribution, authors, date, tag, "\n".join(map(lambda x: x.strip(), s))))
        print(fstring % (headline, image, attribution, authors, date, tag, "\n".join(map(lambda x: x.strip(), s))))

