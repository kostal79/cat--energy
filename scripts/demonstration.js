document.addEventListener('click', slide);

function slide(event) {
    let demo = document.querySelector('.demonstration-box');
    let imgBefore = document.querySelector(".demonstration-box__bacground-cat--before")
    let imgAfter = document.querySelector(".demonstration-box__bacgroune-cat--after")
    let slider = document.querySelector('.slider__line');
    let range = document.querySelector('.slider__range');
    if (!event.target.closest('.slider__button')) return;
    else {
        if (event.target.closest('.slider__button').classList.contains('slider__button--before')) {
            demo.classList.remove('demonstration-box--after');
            demo.classList.add('demonstration-box--before');
            slider.classList.remove('slider__line--after');
            slider.classList.add('slider__line--before');
            imgBefore.style.width = "100%";
            // imgAfter.style.width = "0";
            range.value = 0;
        } else if (event.target.closest('.slider__button').classList.contains('slider__button--after')) {
            demo.classList.remove('demonstration-box--before');
            demo.classList.add('demonstration-box--after');
            slider.classList.remove('slider__line--before');
            slider.classList.add('slider__line--after');
            imgBefore.style.width = "0";
            // imgAfter.style.width = "100%";
            range.value = 100;
        }
    }
}

