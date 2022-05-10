console.log('It is working!');

function doStuff() {
    //go get that CTA button
    const cta = document.querySelector('.cta-button')
    // set the display property in style to "NONE" (hides it)
    cta.style.display = 'none';
    // cta.style.padding = '100px' // example
    // create a new paragraph element
    let message = document.createElement('p');
    // inside paragraph tag add this text
    message.innerHTML = 'Your order has been placed!';
    // find the <section> tag, and add to the end our new paragraph
    document. querySelector('section').appendChild(message);
}