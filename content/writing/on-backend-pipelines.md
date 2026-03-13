---
title: Notes on high-throughput ingestion
date: Mar 2025
description: Patterns for building reliable data pipelines at scale — lessons from three years of enterprise SaaS.
---

Most pipeline problems aren't performance problems. They're reliability problems that look like performance problems until you've spent a day tracing a bug to a timezone assumption made in 2019.

I spent three years at ScienceLogic working on ingestion infrastructure for enterprise monitoring. The platform processes telemetry for Fortune 500 networks — millions of data points, continuous collection, alerts that need to fire within seconds of threshold breach. This is not the most glamorous part of software engineering. It is, I've found, the part that teaches you the most.

## The fan-out problem

High-throughput ingestion usually involves some shape of fan-out: one inbound event that needs to trigger multiple downstream processes. The naive implementation puts everything in a single transaction. This works until a downstream consumer is slow, and then your queue backs up, and then you have a production incident at 2am.

The pattern that works better: decouple producers from consumers aggressively. Each consumer should be able to fall behind without affecting the others. This means more infrastructure — more queues, more workers, more things to monitor — but the failure modes are isolated and recoverable.

## On schemas

Spend more time on schemas than you think you need to. In a multi-tenant environment, schema changes compound in unexpected ways. A field you add for one customer's use case becomes an assumption in another customer's integration six months later.

We used a combination of strict versioning and migration scripts with full rollback capability. The rollback was wrong 40% of the time. The fact that it existed anyway mattered — it forced discipline in how we wrote migrations.

> Correctness is not a property of code. It's a property of code in the context of its constraints. The constraints change.

## Testing pipelines

Unit tests for pipelines are necessary and insufficient. You need to test the shape of data across the full pipeline — what comes in, what transformations happen, what goes out — at sufficient volume to surface race conditions and ordering assumptions.

We built a test harness that replayed production traffic against a staging environment. This caught more bugs than all our unit tests combined. It was also the most expensive thing we maintained, in terms of engineering time. Worth it.

## Observability

You don't know what your pipeline is doing until you can watch it in real time. Logs help. Metrics are better. Distributed traces are best and also the hardest to get right.

The thing I'd tell past-me: instrument before you need it. Adding observability to a pipeline that's already misbehaving in production is a specific kind of unpleasant that's entirely avoidable.
