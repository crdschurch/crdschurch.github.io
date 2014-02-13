---
layout: post
title:  "AngularJS Glossary"
date:   2014-02-10 02:49:29
categories: angular
---

# <a name="toc"></a>AngularJS Glossary
 - [Promise](#promise)
 - [Controller](#controller)
 - [Service](#service)
 - [Directive](#directive)
 - [Scope](#scope)

TODO: Below are my notes on angular taken from various places.  Need to update this with a table of contents and resource section to contain all the links.

## Resources
 - [](http://www.youtube.com/watch?v=62RvRQuMVyg)
 - [](https://docs.google.com/file/d/0B4F6Csor-S1cNThqekp4NUZCSmc/edit)

Authorization
Active User Profile
When the application was small, they kept it on the client side.
1. Request index.html
2. Load index.html
a. Issue multiple requests for scripts, stylesheets, images, etc.
b. Parse all the javascript and stylesheets
c. Bootstrap the Angular app
3. Request the active user profile 
4. Store the user profile on the app scope and load the default route 
or - Redirect to the login page if the user is not authenticated.
ISSUES
Spent a lot of time loading and bootstrapping without knowing the user was authenticated
App scope was a dependency for all the inner scopes (makes testing harder)
Couldn’t pass the info to the services during configuration
Solution: Server Side rendering for the index.html
inject the Active User Profile into the index.html before it’s rendered on the client

Conditional features
Load only the code for features that the current user can access
Server side based on who is authenticated add or remove includes
Controllers and Views
Annotate with custom attributes.  data-keep=“RoleID”, data-omit=“RoleID” using response interceptors
https://gist.github.com/idosela/8421332

Code organization
Inheritance
Basic features that logically make sense in a shared parent
Don’t go too deep
Shared across controllers
Full example: http://jsfiddle.net/3dPpK/9/
Composition with Mixins
See slides - https://docs.google.com/file/d/0B4F6Csor-S1cNThqekp4NUZCSmc/image?pagenumber=22&w=800
Full Example: http://jsfiddle.net/dFNSW/11/
Composition with JavaScript objects [GOOD FOR PERFORMANCE!]
See slides - https://docs.google.com/file/d/0B4F6Csor-S1cNThqekp4NUZCSmc/image?pagenumber=24&w=800
Full example: http://jsfiddle.net/RQy8K/4/
Composition with Service
https://docs.google.com/file/d/0B4F6Csor-S1cNThqekp4NUZCSmc/image?pagenumber=26&w=800
Full example: http://jsfiddle.net/E2nyQ/8/
Composition with helper controllers

$resource wrapped in apiProvider
separate the code from the configuration

### <a name="promise"></a>Promise

http://www.youtube.com/watch?v=XcRdO5QVlqE
http://www.slideshare.net/xmlilley/postal-for-promises-20-min
Callbacks don’t scale
Callbacks become nested and complicated
If you fight the callback nesting you start dealing with boilerplate state
Promise pattern makes developers think more clearly
step1.then(step2).then(step3).then(step4)
If the Promise is the mailbox then the Deferred is the postman
{LOOK HERE} use interceptors to broadcast async loader graphics
Go deeper: http://www.slideshare.net/xmlilley/mastering-async-io-in-javascript-promises-async-190913

### <a name="controller"></a>Controller
No DOM manipulation (violates MVC)
Use view or custom directive
Talk through the $scope only

### <a name="scope"></a>Scope
Uses prototypes under the hood
If the requested item doesn’t exist on the inner most scope it goes up a level

$http
like jQuery ajax
low level
for ad-hoc APIs
$resource
promised based
predefined get, save, query, remove, delete
service
generic name for the rest of our code to use
controller is an example of a service
factory is one way to define a service
singletons
WAYS TO DEFINE SERVICE
service
very similar to factory
invoked with new keyword
uses this variable
don’t need to return anything, this is returned
factory
definition of a service
short hand method
recommended default
function, parameters, return values
provider
long hand
use when it needs to be configured by the consumer of the service
invoked with new
uses this (same as service)
$get is defined (return values from other two methods)
define configuration methods
use .config to pass in provider and call configuration methods
app.constant
never (ever) changes
app.value
override in unit tests
promise
represents a future value
did it succeed or fail
get it back right away, don’t need a callback
don’t have to worry about race conditions
has then call api
resolved or rejected
then called only once
Scope
uses watch internally
you can extend watch, i.e. add logging
uses digest loop if the values are different it calls watch
HMM, what’s the limit before items in digest loop cause performance issues?
apply has to be called when values changed i.e. setTimeout (angular as a timeout service that does the apply for you)
apply is implicitly called normally (ng-click, and other ng event handlers)
parent and child scopes, goes top down for watch… 
event broadcast to send messages to other scopes
ALWAYS CREATE AN INTERMEDIARY
model.value, not just model
### <a name="directive"></a>Directive
wrap up dom & manipulation code
scope
define a child scope for the directive
template
markup to insert
transclude
use element to bring the whole element
use true to bring the contents of the element
replace
use true to replace the whole element, not just the contents
link
this is where the magic happens
Event Broadcasting
$emit - name, parameters
goes through the scope hierarchy all the way up to the root
$rootScope.on - name, handler that takes event and parameters 
Animation
angular-animate.js
ngAnimate dependency
CSS controlled
ng-show/ng-hide ng-hide class

Jasmine Testing
stub out services 
