let activeSpan = document.querySelectorAll('nav > span');

activeSpan.forEach((element) => {
    element.addEventListener('click', function () {
        activeSpan.forEach((el) => {
            el.classList.remove('active');
        });

        element.classList.add('active');
    });
});