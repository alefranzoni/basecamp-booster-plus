document.addEventListener('click', function () {
    browser.storage.local.get(['delay', 'maxLength']).then((result) => {
        let maxLength = result.maxLength || 100;
        let delay = result.delay || 500;

        setTimeout(function () {
            let elements = document.getElementsByClassName('input input--borderless input--unpadded input--boost');
            
            Array.from(elements).forEach(element => {
                element.setAttribute('maxlength', maxLength);
            });
        }, delay);
    });
});
