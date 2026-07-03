# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

Desktop design

![](./design/Desktop%20design.png)

Mobile design

![](./design/Mobile%20design.png)

### Links

- Repository URL: [Front-End-Mentor-FAQ-ACCORDION-challenge](https://github.com/isaiaslopes420/Front-End-Mentor-FAQ-ACCORDION-challenge.git)

- Live Site URL: [FAQ Accordion - FrontEnd Mentor Challenge](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow

### What I learned

- Using tags for acessibility

    It was my first time using tags for acessibility like: aria-expanded, aria-controls and area-hidden.

```html
<button class="accordion-toggle" aria-expanded="false" aria-controls="faq-answer1" id="faq-button1">

<img src="./images/icon-plus.svg" alt="" aria-hidden="true">

</button>

<div class="faq-item-text" id="faq-answer1">
    <p>...</p>
</div>
```

And also learning how to toggle it in the JavaScript:

```js
otherButton.setAttribute('aria-expanded', 'false');
```

### Continued development

Still wanna keep studying about Javascript and it's usage for Web development, better habits for HTML and CSS structure, acessibility on the website and file organization.

My first time using a Figma Professional Design on a website, still need to comprehend better the usage of variables, separate css files for organization and good practices in general.

## Author

- Frontend Mentor - [@Minionzinhos](https://www.frontendmentor.io/profile/Minionzinhos)

- Instagram - [@lamortavectoi](https://www.instagram.com/lamortavectoi/)


    