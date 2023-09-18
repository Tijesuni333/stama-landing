
//mobile nav
const barIcon = document.querySelector('.menubar');
const navlinks = document.querySelector('.nav__links');
const navlinkcontainer = document.querySelector('.navbarcontainer');


barIcon.addEventListener('click', ()=>{
    // navlinkcontainer.classList.toggle('appear');
    const navlinkcontainerHeight = navlinkcontainer.getBoundingClientRect().height;
    let navlinksHeight = navlinks.getBoundingClientRect().height;
    navlinksHeight = navlinksHeight + 30;

    if(navlinkcontainerHeight === 0){
        navlinkcontainer.style.height= `${navlinksHeight}px`;
    }else{
        navlinkcontainer.style.height= 0;
    }
});

// section__header'

const sectionHeader1 = document.getElementById('section__header1');
const sectionHeader2 = document.getElementById('section__header2');
const sectionHeader3 = document.getElementById('section__header3');
const sectionHeader4 = document.getElementById('section__header4');
const mobileh1= document.querySelector('.mobileh1');

window.addEventListener('DOMContentLoaded',()=>{
    sectionHeader1.classList.toggle('animateh2');
    sectionHeader2.classList.toggle('animateh2');
    sectionHeader3.classList.toggle('animateh2');
    sectionHeader4.classList.toggle('animateh2');
    mobileh1.classList.toggle('animateh2');
});
window.addEventListener('scroll',()=>{
    sectionHeader1.classList.toggle('animateh2');
    sectionHeader2.classList.toggle('animateh2');
    sectionHeader3.classList.toggle('animateh2');
    sectionHeader4.classList.toggle('animateh2');
    mobileh1.classList.toggle('animateh2');
});


// featured image and header image

const featuredImage =document.getElementById('pics');
const headerImg =document.getElementById('headerImg');
const headerImg2 =document.getElementById('headerImg2');

window.addEventListener('scroll',()=>{
    headerImg.classList.toggle('transimg');
    headerImg2.classList.toggle('transimg');
});
window.addEventListener('DOMContentLoaded',()=>{
    headerImg.classList.toggle('transimg');
    headerImg2.classList.toggle('transimg');
});

const buildingImg =[
    {
        img:"assets/pexels-expect-best-323705builllld.jpg",
    },
    { 
        img:"assets/pexels-paul-loh-233698 build.jpg",
    },
    {
        img:"assets/pexels-pixabay-273209build.jpg",
    },
    {
        img:"assets/pexels-pixabay-273209build.jpg",
    },
    {
        img:"assets/featured-1.jpg",
    },
  
]
let Start=0;

function slider(){
    const items = buildingImg[Start];
    featuredImage.src = items.img;

    Start++;
   if(Start >= buildingImg.length){
        Start=0;
    }
}
window.addEventListener('DOMContentLoaded', slider);
setInterval(slider,1500);

//business card

const businessCards = [
   
    {
        icon1:'<i class="ri-star-fill"></i>',
        icon2:'<i class="ri-star-fill"></i>',
        icon3:'<i class="ri-star-fill"></i>',
        icon4:'<i class="ri-star-fill"></i>',
        icon5:'<i class="ri-star-fill"></i>',
        name: 'Olusogo Emmanuel',
        title:'Property Manager',
        comments:' As a property manager, efficiency and clear communication are key. This platform delivers both.The real-time maintenance tracking has made my job so much easier. Kudos to the team!',
        img:"assets/IMG_6820.jpg",
    },
    {
        icon1:'<i class="ri-star-fill"></i>',
        icon2:'<i class="ri-star-fill"></i>',
        icon3:'<i class="ri-star-fill"></i>',
        icon4:'<i class="ri-star-fill"></i>',
        icon5:'<i class="ri-star-fill"></i>',
        name: 'Sam Adebanjo',
        title:'Real Estate Developer',
        comments:' I`ve tried multiple property management apps, but this one stands out.  The user interface is intuitive, and the dynamic room allocation is a game-changer.Highly recommended for both residents and administrators!',
        img:"assets/business-1.jpg",
    },
   
    {
        icon1:'<i class="ri-star-fill"></i>',
        icon2:'<i class="ri-star-fill"></i>',
        icon3:'<i class="ri-star-fill"></i>',
        icon4:'<i class="ri-star-fill"></i>',
        icon5:'<i class="ri-star-line"></i>',
        name: 'Ayo Sogbesan',
        title:'Civil Servant',
        comments:'Finally, an app that understands the needs of tenants! The personal dashboard is a breeze to use, and I love how transparent the entire process is.Reporting issues has never been this straightforward.',
        img:"assets/business-3.jpg",
    }
]

const title =document.querySelector('.title');
const comments =document.querySelector('.comment');
const image =document.getElementById('member');
const name = document.querySelector('.name');
const icon1 =document.getElementById('star1');
const icon2 =document.getElementById('star2');
const icon3 =document.getElementById('star3');
const icon4 =document.getElementById('star4');
const icon5=document.getElementById('star5');


const prevBtn = document.querySelector('.prevbtn');
const nextBtn = document.querySelector('.nextbtn');

let businessCard = 0;


const windowDisplay =()=>{
    const person = businessCards[businessCard];
    image.src = person.img;
    title.textContent= person.title;
    comments.textContent=person.comments;
    name.textContent= person.name; 
    icon1.innerHTML= person.icon1;
    icon2.innerHTML=person.icon2;
    icon3.innerHTML=person.icon3;
    icon4.innerHTML=person.icon4;
    icon5.innerHTML=person.icon5;

 }
window.addEventListener('DOMContentLoaded', windowDisplay);

nextBtn.addEventListener('click',()=>{
    businessCard++;
    if(businessCard >= businessCards.length){
        businessCard=0;
    }
   windowDisplay();
})

prevBtn.addEventListener('click',()=>{
    businessCard--;
    if(businessCard < 0){
        businessCard= businessCards.length - 1;
    }
   windowDisplay();
})


// using gsap
gsap.registerPlugin(ScrollTrigger);

gsap.from(".header__content", { 
    x: -200,
    duration:1,
    scrollTrigger:{
        trigger:".header__content",
        toggleActions:"restart none restart none",
    }
});

gsap.from(".featured__content", { 
    y: 200,
    duration:1,
    scrollTrigger:{
        trigger:".featured__content",
        toggleActions:"restart none restart none",
    }
});


gsap.from("#work1", { 
    x: -200,
    duration:1,
    scrollTrigger:{
        trigger:"#work1",
        toggleActions:"restart none restart none",
    }
});

gsap.from("#work2", { 
    y: 200,
    duration:1,
    scrollTrigger:{
        trigger:"#work2",
        toggleActions:"restart none restart none",
    }
});

gsap.from("#work3", { 
    x:200,
    duration:1,
    scrollTrigger:{
        trigger:"#work3",
        toggleActions:"restart none restart none",
    }
});



gsap.from("#business1", { 
    x: -200,
    duration:1,
    scrollTrigger:{
        trigger:"#business1",
        toggleActions:"restart none restart none",
    }
});

gsap.from("#business2", { 
    y: 200,
    duration:1,
    scrollTrigger:{
        trigger:"#business2",
        toggleActions:"restart none restart none",
    }
});

gsap.from("#business3", { 
    x:200,
    duration:1,
    scrollTrigger:{
        trigger:"#business3",
        toggleActions:"restart none restart none",
    }
});

gsap.from(".form", { 
    duration:1, 
    y:100,
    scrollTrigger:{
        trigger:".form",
        toggleActions:"restart none restart none",
    }
});

gsap.from(".footer__col", { 
    duration:2, 
    opacity:0,
    delay:.5,
    scrollTrigger:{
        trigger:".footer__col",
        toggleActions:"restart none restart none",
    }

});

gsap.from("#mobilebusinesscard", { 
    duration:1, 
    y:200,
    scrollTrigger:{
        trigger:"#mobilebusinesscard",
        toggleActions:"restart none restart none",
    }
});
gsap.from(".mobcom", { 
    duration:1, 
    y:200,
    scrollTrigger:{
        trigger:".mobcom",
        toggleActions:"restart none restart none",
    }
});




