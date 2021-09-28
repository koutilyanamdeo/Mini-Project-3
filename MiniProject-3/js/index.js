const navSlide = () =>{
    const abc = document.querySelector(".burger");
    const nav = document.querySelector(".ul-container");
    const navLinks = document.querySelectorAll(".nav-links")
    console.log(abc);
    abc.addEventListener('click', () =>{
        //Toggle Nav
        nav.classList.toggle('nav-active');
    
        //animations Links
    navLinks.forEach((link, index) => {
    if(link.style.animation){
        link.style.animation ='';
    }else{
       link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.3}s`;
    }
    });
    //burger Animation
    abc.classList.toggle('toggle');
});
}
navSlide();