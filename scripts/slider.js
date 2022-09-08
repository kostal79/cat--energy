
document.addEventListener('mousedown', slide)

function slide(event) {
    let imgBefore = document.querySelector(".demonstration-box__bacground-cat--before")
    let imgAfter = document.querySelector(".demonstration-box__bacground-cat--after")
    if (event.target.className != "slider__range") return;
    else {
        document.addEventListener('mousemove', mouve);
        function mouve(event) {
            imgBefore.style.width = 100 - event.target.value + "%";
        }
        document.addEventListener('mouseup', function() {
            document.removeEventListener('mousemove', mouve)
        })
    }
}