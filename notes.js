/**
 
Having interactivity on a website is important for user experience


In this video we will cover 5 ways to add interactivity to your website using JavaScript 

Whether you’re just getting started or looking to spice up your webpage these suggestions could be perfect for you. 

Well cover event listeners, onClick method, dynamic content, form validation, and even a simple auto slideshow

<-eventlistener->


lets start with eventlistener

an event listener is function that wait for a specific event to occur, like a button click or a mouse hover.

 It’s often used to create dynamic user interfaces, respond to user actions, and manage user interactions in web applications.
 
 
 Our HTML includes a button with a class name my-button

 

the javascript includes a varialbe name button 

In our JavaScript, we’ll define a variable named button that uses querySelector to capture our button elemen

the document.querySelector() method is used to select the first element that matches the specified CSS selector. In this case, it finds the button with the class my-button

We’ll use the addEventListener method to listen for a 'click' event

The first argument is the event we’re interested in, 'click'. 

The second argument is a callback function that executes when the event occurs—in this case, it shows an alert.

<-onclick Method->
Next, let’s talk about the onclick method

he onclick method is a shorthand way to define a click event for an element. 

It’s often used for simplicity when handling click events directly in HTML.

Again, we use the same button

Here’s how we can use the onclick method to change the background color

We select the button element just like before.

Instead of addEventListener, we directly assign a function to the onclick property of the button.

When the button is clicked, the background color of the body changes to light green.

<-Dynamic Content Update->
Now, let’s explore dynamic content updates

This technique allows you to change what users see on the page without refreshing it. 

It’s great for real-time applications like chat apps or live notifications

We’ll use an input field to demonstrate this:

A p tag with class name output to display the content typed

with the javascript We can update the text instantly as the user types

start with a variable name input field using querySelector

The input event is triggered every time the value of the input changes. We listen for this event and execute the callback function.

 Inside the function, we retrieve the current value of the input using input.value and update the content of the paragraph element with the class output.

 <-Form Validation->
 Form validation is essential to ensure that users enter the correct data before submitting a form. 
 
 It enhances data integrity and improves the user experience.

 Certinaly there are other aprroachs to provide validation, i just want to demonstrate how to do it in javascript

 we will start with a form class name my-form

 in it include a input and button to capture the email & button to submit the request

 the javascript will provide the validation before submission

 variable form will use the queryselector to capture my-form
 
 the form will listen for the 'submit' event

 Inside the callback function, we prevent the default behavior of form submission using event.preventDefault()

 We retrieve the value from the email input field and check its format using a regular expression in the isValidEmail function.

 If the email is valid, we submit the form; otherwise, we alert the user.

 <-Simple Slideshow->
Lastly, let’s create a simple slideshow.

This technique is widely used to showcase images or content dynamically, enhancing the visual appeal of your site.

the html will include a parent div with a class of slideshow

for demonstration we include 3 divs with a classname of slide

we will also include set the initial display to none and dynamically display it using javascript

in hte javascript is where the magic happens

We use querySelectorAll to select all elements with the class slide

then define a variable currentSlide to keep track of the currently displayed slide.

The showSlide function hides the current slide and updates the currentSlide index. 

The modulo operator ensures that it wraps around when reaching the last slide.

We use setInterval to call showSlide every 3 seconds, creating an automatic slideshow effect.

And there you have it! Five methods to add interactivity to your website using JavaScript. Each of these techniques can enhance user experience and engagement on your site. 

leave your prefered ways to add interactivity to a website in the comments

also leave any suggestions in the comments as well



 */