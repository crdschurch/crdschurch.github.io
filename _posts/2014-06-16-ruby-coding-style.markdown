---
layout: post
title:  "Ruby coding standards followed in milacron project "
date:   2014-06-02 02:49:29
categories: style-guide
permalink : ruby-standards
---

## Ruby Coding Style

This is our internal style guide for Ruby. In milacron project we are using Ruby for automating migration from legacy website to milacron codebase . 

## Table of Contents

  * [Coding Style](#coding-style)
  * [Documentation](#documentation)
  * [Syntax](#syntax)
  * [Naming](#naming)
  * [Classes](#classes) 

## Coding Style
 * Use soft-tabs with a two space indent.
 * Keep lines fewer than 80 characters.
 * Never leave trailing whitespace.
 * End each file with a blank newline.
 * Please use underscore for function names and complete words for class names , never ever bring in camelcase . 
 * Use spaces around operators, after commas, colons and semicolons, around { and before }.

 ````Ruby
 sum = 1 + 2
  a, b = 1, 2
  1 > 2 ? true : false; puts "Hi"
  [1, 2, 3].each { |e| puts e }
  
 ```
 * No spaces after (, [ or before ], ).

 ````Ruby
 some(arg).other
 [1, 2, 3].length

 ```
 * No spaces after !.

 ```Ruby
 !array.include?(element)

 ```
 
* Indent `when` as deep as `case`. I know that many would disagree
  with this one, but it's the style established in both "The Ruby
  Programming Language" and "Programming Ruby".

  ```Ruby
  # bad
  case
    when song.name == 'Misty'
      puts 'Not again!'
    when song.duration > 120
      puts 'Too long!'
    when Time.now.hour > 21
      puts "It's too late"
    else
      song.play
  end

  # good
  case
  when song.name == 'Misty'
    puts 'Not again!'
  when song.duration > 120
    puts 'Too long!'
  when Time.now.hour > 21
    puts "It's too late"
  else
    song.play
  end
  ```
 * Use empty lines between defs and to break up a method into logical paragraphs.
 
  ````Ruby
  def some_method
    data = initialize(options)

    data.manipulate!

    data.result
  end

  def some_method
    result
  end
  ```
 
## Documentation
 * Please use ([Rdoc](http://en.wikibooks.org/wiki/Ruby_Programming/RubyDoc))  for best of your ability 
 
  ````Ruby
  # content class which defines various attributes and behaviours which are used in
  # migration
  #
  # Author::    Aravind Udayashankara  (mailto:aravind.udayashankara@gmail.com)
  # Copyright:: Copyright (c) 2012 Crossroads
  # License::   MIT
  #
  # Instantiating this class leads to migration
  #
  class Content
    
    #
    # This method clears old files by deleting the destination directory to recreate it
    #
    # * checks if the log files exists in the location and deletes only on exist
    # * validates the destination path
    # * if exists removes the directory
    # * logs the error message
    #
    # content.clean_old_files
    #
    def clean_old_files
     # your logic
    end
     
 ```
## Syntax 


 * Use `def` with parentheses when there are arguments. Omit the parentheses
   when the method doesn't accept any arguments

    ````Ruby
    def some_method
      # body omitted
    end

    def some_method_with_arguments(arg1, arg2)
      # body omitted
    end
    
    ```
 * Never use `for`, unless you know exactly why. Most of the time iterators
   should be used instead. `for` is implemented in terms of `each` (so you're
   adding a level of indirection), but with a twist - `for` doesn't introduce a
   new scope (unlike `each`) and variables defined in its block will be visible
   outside it

    ````Ruby
    arr = [1, 2, 3]

    # bad
    for elem in arr do
      puts elem
    end

    # good
    arr.each { |elem| puts elem }
    
     ```

 * Never use `then` for multi-line `if/unless`

    ````Ruby
    # bad
    if some_condition then
      # body omitted
    end

    # good
    if some_condition
        # body omitted
    end
     ```

 * Avoid the ternary operator except in cases where all expressions are
   extremely trivial. However, do use the ternary operator over
   `if/then/else/end` constructs for single line conditionals

    ````Ruby
    # bad
    result = if some_condition then something else something_else end

    # good
    result = some_condition ? something : something_else
     ```

 * Use one expression per branch in a ternary operator. This also means that
   ternary operators must not be nested. Prefer `if/else` constructs in these
   cases

    ````Ruby
    # bad
    some_condition ? (nested_condition ? nested_something : nested_something_else) : something_else

    # good
    if some_condition
      nested_condition ? nested_something : nested_something_else
    else
      something_else
    end
     ```

 * The `and` and `or` keywords are banned. It's just not worth it. Always use
   `&&` and `||` instead

 * Avoid multi-line ternary operator, use `if/unless` instead

 * Favor modifier `if/unless` usage when you have a single-line body

    ````Ruby
    # bad
    if some_condition
      do_something
    end

    # good
    do_something if some_condition
     ```

 * Never use `unless` with `else`. Rewrite these with the positive case first

    ````Ruby
    # bad
    unless success?
      puts 'failure'
    else
      puts 'success'
    end

    # good
    if success?
      puts 'success'
    else
      puts 'failure'
    end
     ```

 * Don't use parentheses around the condition of an `if/unless/while`

    ````Ruby
    # bad
    if (x > 10)
      # body omitted
    end

    # good
    if x > 10
      # body omitted
    end
     ```

 * Prefer `{...}` over `do...end` for single-line blocks. Avoid using `{...}`
   for multi-line blocks (multiline chaining is always ugly). Always use
   `do...end` for "control flow" and "method definitions" (e.g. in Rakefiles
   and certain DSLs).  Avoid `do...end` when chaining

    ````Ruby
    names = ["Bozhidar", "Steve", "Sarah"]

    # good
    names.each { |name| puts name }

    # bad
    names.each do |name|
      puts name
    end

    # good
    names.select { |name| name.start_with?("S") }.map { |name| name.upcase }

    # bad
    names.select do |name|
      name.start_with?("S")
    end.map { |name| name.upcase }
    ```

   Some will argue that multiline chaining would look OK with the use of `{...}`, 
   but they should ask themselves - is this code really readable and can't the 
   block's contents be extracted into nifty methods?

 * Avoid `return` where not required

    ````Ruby
    # bad
    def some_method(some_arr)
        return some_arr.size
    end

    # good
    def some_method(some_arr)
        some_arr.size
    end
     ```

 * Use spaces around the `=` operator when assigning default values to method
   parameters:

    ````Ruby
    # bad
    def some_method(arg1=:default, arg2=nil, arg3=[])
      # do something...
    end

    # good
    def some_method(arg1 = :default, arg2 = nil, arg3 = [])
      # do something...
    end
     ```

While several Ruby books suggest the first style, the second is much more 
prominent in practice (and arguably a bit more readable).

 * Using the return value of `=` (an assignment) is ok assignment with
   parenthesis

    ````Ruby
    # bad
    if (v = array.grep(/foo/)) ...

    # good
    if v = array.grep(/foo/) ...

    # also good - has correct precedence.
    if (v = next_value) == "hello" ...
     ```
     
 * Use `||=` freely to initialize variables

    ````Ruby
    # set name to Bozhidar, only if it's nil or false
    name ||= 'Bozhidar'
     ```
 * Don't use `||=` to initialize boolean variables (consider what would happen
   if the current value happened to be false)

    ````Ruby
    # bad - would set enabled to true even if it was false
    enabled ||= true

    # good
    enabled = true if enabled.nil?
     ```
 * Avoid using Perl-style special variables (like `$0-9`, `$`, etc. ). They are
   quite cryptic and their use in anything but one-liner scripts is
   discouraged. Prefer long form versions such as `$PROGRAM_NAME`

 * Never put a space between a method name and the opening parenthesis

    ````Ruby
    # bad 
    f (3 + 2) + 1

    # good 
    f(3 + 2) + 1
    ```
 * If the first argument to a method begins with an open parenthesis, always
   use parentheses in the method invocation. For example, write `f((3 + 2) +
   1)`

 * Use `_` for unused block parameters

    ````Ruby
    # bad
    result = hash.map { |k, v| v + 1 }

    # good
    result = hash.map { |_, v| v + 1 }
    ```
    
## Naming

* Use snake\_case for methods and variables
* Use CamelCase for classes and modules (keep acronyms like HTTP, RFC, XML
   uppercase)
* Use SCREAMING\_SNAKE\_CASE for other constants
* The names of predicate methods (methods that return a boolean value) should
   end in a question mark. (i.e. `Array#empty?`)
* The names of potentially "dangerous" methods (i.e. methods that modify
   `self` or the arguments, `exit!`, etc.) should end with an exclamation mark
   Bang methods should only exist if a non-bang method exists  ([more on
   this](http://dablog.rubypal.com/2007/8/15/bang-methods-or-danger-will-rubyist))

## Classes

* Avoid the usage of class (`@@`) variables due to their "nasty" behavior in
   inheritance

    ```Ruby
    class Parent
      @@class_var = 'parent'

      def self.print_class_var
        puts @@class_var
      end
    end

    class Child < Parent
      @@class_var = 'child'
    end

    Parent.print_class_var # => will print "child"
    ```
    
As you can see all the classes in a class hierarchy actually share one class
variable. Class instance variables should usually be preferred over class
variables.

* Use `def self.method` to define singleton methods. This makes the methods
   more resistant to refactoring changes

    ```Ruby
    class TestClass
      # bad
      def TestClass.some_method
        # body omitted
      end

      # good
      def self.some_other_method
        # body omitted
      end
      
    ```

