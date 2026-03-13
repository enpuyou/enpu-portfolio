---
title: On building a read-it-later app
date: Dec 2025
description: Notes on async pipelines, semantic search, and why I keep building tools I already use.
---

I save more things than I read. This has always been true. At some point the browser tabs became a second inbox, one I opened with the same low-grade dread. There are good tools for this — Instapaper, Pocket, Matter — and I use them. Then I build my own anyway.

This is probably a mistake that more people should make.

## Why build it yourself

The reason isn't dissatisfaction. I like Instapaper. The reason is that building a reading tool forces you to think carefully about what reading actually is — not what the UX of reading is, but the substrate. What makes an article an article. How much of meaning lives in structure versus text. Why some pages extract cleanly and others fall apart.

Building *sed.i* (a name I chose too quickly and now live with) started as an excuse to use FastAPI properly and ended up somewhere more interesting.

## The pipeline problem

Full-text extraction is harder than it looks. Trafilatura is excellent — better than BeautifulSoup for most news and essay sites — but the long tail of weird page structures humbles you fast. Substack works. Random academic blogs don't. PDFs are their own purgatory.

The async shape of it — user submits URL, Celery worker picks it up, extracts, generates embeddings, indexes — feels right once you stop fighting it. The user shouldn't wait. The work should happen behind them.

> The insight that took longest to arrive: make the reading experience fast by doing everything else slow.

## Semantic search over your own reading

This part surprised me. I expected to use it to find things. Instead I find myself using it to understand what I've been thinking about. When you embed your highlights and surface connections across articles, you get a rough map of your attention over time. It's not a knowledge graph. It's closer to a mood ring.

Whether that's useful depends on what you think reading is for.

## What I'd do differently

Less clever, more reliable. The bionic reading mode was fun to build and I've never once turned it on. The TTS integration works but I've used it twice. These are features I added because they were interesting problems, not because I needed them.

The thing I use every day is the reader itself — quiet, full-width, no chrome. Which is the thing that took the least time to build.
