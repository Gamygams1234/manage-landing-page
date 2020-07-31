const testimonials = document.querySelectorAll('.card._testimonials');


    let slider = document.createElement('div');
    slider.classList.add('slider', '_testimonials')

    testimonials[0].parentNode.insertAdjacentElement('afterend', slider);

for (let i = 0; i < testimonials.length; i++) {

    let sliderCircle = document.createElement('div');

    if (testimonials[i].classList.contains('-active'))
        sliderCircle.classList.add('circle', '_slider', '-active');
    else
        sliderCircle.classList.add('circle', '_slider');

    slider.insertAdjacentElement('beforeend', sliderCircle);
}
/*
for (let i = 0; i < testimonials.length; i++) {
    delay(i);
}

function delay(i) {
    setTimeout(() => {
        console.log(i)
    }, 1000 * (i + 1));
}



for (var i = 0; i < 5; i++) {
    let k = i;
    setTimeout(function () {
        console.log('count ', k);
    }, 3000 * (k + 1));
}
*/
if (!(window.innerWidth < 1200)) {
    slider.style.display = 'none';
}










function formCheck(event) {
    for (let i = 0; i < formItem.length; i++) {
        console.log(formItem[i].checkValidity())
        if (!formItem[i].checkValidity()) {
            console.log(formItem[i].type)
            if (formItem[i].type == 'email') {
                formError[i].innerHTML = 'Looks like this is not an email';
            }
            formItem[i].oninvalid = function (e) {
                e.preventDefault();
            }

            if (!formError[i].classList.contains('-active')) {
                formError[i].classList.toggle('-active');
                formItem[i].classList.toggle('-error');
            }


            formItem[i].addEventListener('keydown', function () {
                formItem[i].style.color = 'rgb(0,0,0)';
            });
        } else {
            formItem[i].value = '';
            formError[i].classList.toggle('-active');
            formItem[i].classList.toggle('-error');
        }

    }
}