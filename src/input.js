// icons
const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");
// theme vars
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

// icon toggling

const iconToggle = () => {
  moonIcon.classList.toggle("display-none");
 sunIcon.classList.toggle("display-none");

};

// Initial theme check

const themeCheck = () => {
  if(userTheme === 'dark' || (!userTheme && systemTheme)) {
    document.documentElement.classList.add('dark');
    moonIcon.classList.add('display-none');
    return;
  }
  sunIcon.classList.add('display-none');
};

// Manual theme switch

const themeSwitch = () => {
  if(document.documentElement.classList.contains('dark')){
    document.documentElement.classList.remove('dark');
    localStorage.setItem("theme" , "light");
    iconToggle();
    return;
  }
  document.documentElement.classList.add('dark');
  localStorage.setItem('theme', 'dark');
  iconToggle();
};

// call theme switch on clicking Button

sunIcon.addEventListener('click', () => {
  themeSwitch();
});

moonIcon.addEventListener('click', () => {
  themeSwitch();
});

// invoke theme check on initial load
themeCheck();



// toggle menu

// let btn = document.getElementById('menu-btn').addEventListener('click', clicked);
// let btn2 = document.getElementById('menu-cross-btn').addEventListener('click', ftn1);
// let navbar = document.getElementById('nav-bar');
// function clicked(){
//       if(btn.style.display != 'none'){
//         btn.style.display = "none";
//         btn2.style.display = 'block';
//         navbar.style.display = 'block';
//       }
//     else{
//         btn.style.display = "block";
//         btn2.style.display = 'none';
//         navbar.style.display = 'none';

//         }

// }; 

//  function ftn1(){
//   let btn = document.getElementById('theme-toggler');
//   let btn2 = document.getElementById('menu-cross-btn');
//   let navbar = document.getElementById('nav-bar');
//   if(btn2.style.display != 'none'){
//       btn2.style.display = "none";
//       navbar.style.display = "none";
//       btn.style.display = 'block';
      
//   }else{
//       btn2.style.display = "block";
//       navbar.style.display = "block";
//       btn.style.display = 'none';
//   }

//  }

let header = document.getElementById('header');
let  ChangeIcon = function(Icon){
  Icon.classList.toggle('fa-times');
  if(header.style.display == 'block') {
    header.style.display ="none";
  }
  else{
    header.style.display = 'block';
  }
};

function scrollFunction() {
  document.getElementById("header").style.visibility = "hidden";   //To hide the element.
}

window.onscroll = scrollFunction;














