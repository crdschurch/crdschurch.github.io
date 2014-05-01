---
layout: post
published: true
title: When will it be done?
date: "2014-04-15 17:43:32 -0500"
comments: true
published: true
---

In the world of software development projects, the most common question from the client is "When will it be done?". I'd like to explain the problem with this question and why it's the most dreaded question a developer can hear. I'll also speak to a solution that gets to the objective behind this common question.

## The Problem

The reality here is that the developer nor the project manager know the answer to this question, they never will. It's usually asked early on in the project, shortly after the request has been made. In order to truly give an estimate, every detail of the request and every future action must be defined, and even then you're still only guessing. Estimates are the act of predicting the future and that's just silly. When a client request software, it's usually done in context of a general idea (eg. Our website needs profiles where users can update their information). The request is missing many assumptions, requirements, and expectations. It would be great to define those but realistically that is very difficult and time consuming, not to mention that requirements are usually negotiable depending on the solution. After the request has been clarified a bit, the developer then has to create a solution and a design for the software, there is usually many many ways to solve every problem, each having an impact on the timeline. Even after a solution has been defined and development has begun, life still happens. People get sick, things turn out to be more complex than expected, other organizational priorities come up, and requirements change along with the organization. The process of software development is empirical more than defined. We inspect along the way, learn as we go and adapt based on what we discover (similar to writing a book or doing creative design). Software can’t be defined up front and executed as a checklist like building construction or financial accounting. It’s been proven that planning a software project to a deep level of detail then building it does not work in software (this traditional method is called Waterfall).

Here is an analogy (The Problem):

Jim has been a lifelong car mechanic and knows a lot about how cars work and how they’re built. Sue ask Jim to hand build her a car like the [1969 Ford Mustang](http://www.autoblog.com/2012/11/30/retrobuilt-1969-mustang-fastback-first-drive-review/). Jim agrees to take on the job and so Sue ask how long it will take to build. Jim takes a guess and tells Sue 9 months. He gets to working on the car however he hits his first problem, the don’t sell carburetors like the 1969 Mustang used and needs to instead uses a fuel injection system. Jim doesn’t know much about using fuel injection so he has to learn how to build them, it takes him time to learn. He makes more progress and the car is nearly built, he shows it to Sue. After taking a look, she realizes he used cloth seats and she wanted leather seats instead, it takes Jim time to replace the seats. Things like this continue to happen dozens of times over. All of those circumstances add up to lots of delays in the time it took Jim to build the car.

## The Real Problem

Otherwise called the objective, this is the heart behind the question. People are anxious and naturally want to see the new shiny thing. Maybe the new system or feature is going to make a big impact to their work process, probably a huge impact. It's likely the reason for the urgency is so the client can plan for the operational change the new software is going to bring. Sounds reasonable right?

## The Solution

The project must include the client and they need to stay involved often along the life of the project. This type of software development is called [Agile Scrum](http://en.wikipedia.org/wiki/Scrum_(software_development)), which is an empirical process. The ides basically means software is built in 2 week iterations and demod to the client after each two weeks. This way, the client tells the developer if they’re on the right track in meeting their expectations of the software often and has an opportunity to course correct quickly if they change their mind. Not time is wasted planning up front and attempting to guess what the future will look like. In Agile Scrum, we jump right into developing software, based on the idea from the client and we inspect and adapt the software frequently based on the past and what we know with certainty.

This process is more efficient and leads to a lot less rework, however it doesn’t necessarily solve our problem. The client wants to know when the software will be complete. Well, honestly, since a developer can’t predict the future, they can’t likely solve this problem directly. This is however how we can meet the objective behind the original question "When will it be done".

1. The organization should never make plans based on software that is not yet complete. In the software industry, this type of software is called vaporware. Since no one can predict the time it will take to be "done" with software, it would be foolish to create dependencies on the software that doesn’t exist. Instead, wait until the system is built or the feature is complete, then make the organizational change based on the software.

2. The client gets to define "done". The client will prioritize all of the features and task so the most important things are done first. If we’re building the software in priority order and inspecting every two weeks, this gives the client the opportunity to call the software complete, thus controlling the timeline, by choosing to be done before or after every possible wish of the software is in place.

Here is an analogy (The Solution):

Jim shouldn’t have set the expectation of 9 months, truth was, he didn’t know how long it would take any better than Sue could guess. Instead, he would have been better to involve Sue often in making choices on the car’s features, and showing her progress along the way. This way, Sue could have controlled the timeline more by defining the features along the way and making choices to change features with full understanding of the impacts to the timeline.

## Conclusion

Developers can’t possibly predict the future or read the clients mind. Defining every detail up front is inefficient. Working in short iterations, inspecting often and reviewing with the client is a more effective method. The organization should not create dependencies on software that doesn’t exist (vaporware). The client get’s the control by scope and timeline by prioritizing and defining what "done" really means.

