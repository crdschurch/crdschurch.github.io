---
layout: post
title:  "Migration of CMS content from crossroads Analysis"
date:   2014-05-09 02:49:29
categories: technical-specification
---


## Problem At Hand

Migrate all managed content from crossroads legacy desktop webapplication to milacron codebase by creating folder tree based on the category name stored in the database with in page_category table .

## Analysis

1. 'file_path' column in the web_page table is the actual path with in the includes/documents folder
2. 'page_category' is the table which has to be reffered for category name
3. Some entries in 'file_path' has // slash for its own reasons so this has to be replaced because its not good for us .
4. If the 'file_path' entry has the string 'shortlinks' then during migration we need to add permalink to Jekyll front matter .
5. milacron_layout column in the page_category table has to be used as layout while adding jekyll front matter .


## Flowchart

   ![alt text](/flowcharts/ContentMigrationFlow.svg "Logo Title Text 1")


## Repository

These kind of tools are maintained in a seperate public repository called Utilities below.
[Click here to fork it and use](https://github.com/crdschurch/utilities "Crossroads Utilities")

