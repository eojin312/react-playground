const boxEl = document.querySelector('.box');

boxEl.addEventListener('click', function () {
    console.log('CLICK');

    boxEl.classList.add('active');
    console.log(
        boxEl.classList.contains('active')
    );
});

const boxEls = document.querySelectorAll('.box');

boxEls.forEach(function (boxEl, index) {
    boxEl.classList.add(`order-${index+1}`);
    console.log(boxEl, index);
});