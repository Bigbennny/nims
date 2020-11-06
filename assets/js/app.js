const navSlide = () => {
    const burger = document.querySelector('.burger');
    const navi = document.querySelector('.nav-links');
    const navlinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', ()=> {
        navi.classList.toggle('nav-active');

        navlinks.forEach((link, index) => {
        
            if (link.style.animation) {
                link.style.animation = "";

            } else {
                var mn = index / 5;
                link.style.animation = 'navLinkfade 0.5s ease forwards 1s';
             
            }
            
        });

        //Burger animation...
        burger.classList.toggle('toggle');

    });
}

navSlide();