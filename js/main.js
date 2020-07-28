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