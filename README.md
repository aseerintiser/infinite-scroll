# Infinite Scroll

In this project, I implemented the *infinite scroll functionality*.

This is something that happens on social media. As the user scrolls near the bottom of the page, another network request is made,
but it happens before you reach the bottom. So you don't see it, and it feels like you are seamlessly scrolling forever.

The images are photos fetched from the Unsplash API. 
I tracked the moment when all the images are loaded in order to dynamically hide the loading animation.

It is one long column of images. As we get closer to the bottom, the next network request is made and we're fetching more images.
But while scrolling, it is a totally seamless experience.

If we hover over an image, we can actually see the description.
And if we click on the image, we can view that image on the Unsplash website, so that we can see the author or download the photo if we want.

This project is mobile responsive as well.
