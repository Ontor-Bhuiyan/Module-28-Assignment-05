### Answer the following questions clearly:
1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Answer:
  *getElementById: It selects the element with a specific id from the HTML document.
  *getElementsByClassName: It selects all elements of a specific class from the HTML document.
  *querySelector: It selects the first matching element using CSS selector.
  *querySelectorAll: It selects all matching element using CSS selector.

2. How do you **create and insert a new element into the DOM**?
Answer:
  *create and insert a new element into the DOM: The "document.createElement()" method is used to create a new HTML element, and to add any Text or HTML content to this element "innerText" or "innerHTML" is used.

3. What is **Event Bubbling** and how does it work?
Answer:
  *Event Bubbling: When an event is triggered on a DOM element, the event begins to propagate upward through that elements parent element and  parent elements above it.

  *How does it work: Let's say a click event occurs on a "div" element. Normally you would attach an event handler to that "div" element, but due to event bubbling, that click event can reach the parent of that "div" element, the parent of the parent, and even the topmost element, unless you stop the propagation of the event.

4. What is **Event Delegation** in JavaScript? Why is it useful?
Answer:
  *Event Delegation: Instead of writing separate event handlers for each child element, the event handler id attached to a single parent element and form there the event is routed to the specific child element.

  *Why is it useful: Attaching and managing separate event handlers for multiple elements can be cumbersome. Event delegation provides a simple solution to this problem.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
Answer:
  *preventDefault(): This method stops the default action of an event.

  *stopPropagation(): When an event occurs on an element and it starts to propagate to the parent element, this propagation can be stopped by using "stopPropagation()" so that the event does not propagate upwards.
