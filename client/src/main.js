const nav = document.querySelector('.nav');
const openNav = document.querySelectorAll('.navbar .bx');
const makeRes = document.querySelector('header button');
const bookTable = document.querySelector('.book-table');
const navLink = document.querySelectorAll('.nav-link a');
const home = document.querySelector('#home');
const about = document.querySelector('#about');
const offers = document.querySelector('#offers');
const menu = document.querySelector('#menu');
const reservation = document.querySelector('#reservation');
const listFood = document.querySelectorAll('.menu li')
const menuImg = document.querySelectorAll('.menu-body .img img')
const menuHaeding = document.querySelectorAll('.menu-body h3')
const inputDate = document.querySelector('input[type="date"]');
const datePlace = document.querySelector('label[for="date"]');
const inputTime = document.querySelector('input[type="time"]');
const timePlace = document.querySelector('label[for="time"]');
//open navbar in smlei
let closet = true;
openNav[0].addEventListener('click', function() {
   if (closet) {
      nav.style = 'height: 450px;';
      this.classList.add('bx-menu-alt-right');
      this.classList.remove('bx-menu');
      closet = false;
   } else {
      nav.style = 'height: 0';
      this.classList.remove('bx-menu-alt-right');
      this.classList.add('bx-menu');
      closet = true;
   }
});
makeRes.addEventListener('click', () => bookTable.scrollIntoView());

function ovserver(section, link) {
   const addActive = function(entrise) {
      const [entry] = entrise;
      if (entry.isIntersecting) {
         //add class atcive
         active(link);
      }
   };
   const secOvserve = new IntersectionObserver(addActive, {
      root: null,
      threshold: 1,
   });
   secOvserve.observe(section);
}

ovserver(home, navLink[0]);
ovserver(about, navLink[1]);
ovserver(offers, navLink[2]);
ovserver(menu, navLink[3]);
ovserver(reservation, navLink[4]);

//scroll Into View
function scrollTo(sec, i) {
   i.addEventListener('click', function(e) {
      e.preventDefault();
      sec.scrollIntoView();
      //add class atcive
      active(i);
   });
}
scrollTo(home, navLink[0]);
scrollTo(about, navLink[1]);
scrollTo(offers, navLink[2]);
scrollTo(menu, navLink[3]);
scrollTo(reservation, navLink[4]);


//update data 
const newDate = {
   title1: [
         'Classic greek salad with shrimp',
         'Zucchini pesto sausage pizza with mozzarella',
         'Greek - style grilled chicken kabobs',
         'Orchard Harvest Salad with cherry balsamic vinaigrette'
         ],
   src1: ['image/lunch-01.jpg', 'image/lunch-02.jpg',
            'image/lunch-03.jpg', 'image/lunch-04.jpg'
            ],
   title2: [
      'Lebanese chicken fatteh dinner bowls',
      'Sheet pan lemon rosemary dijon chicken & potatoes',
      'Pan - seared salmon with dill sauce',
      'Classic mediterranean tuna salad'
      ],
   src2: ['image/dinner-01.jpg', 'image/dinner-02.jpg',
         'image/dinner-03.jpg', 'image/dinner-04.jpg'
         ],
   title3: [
            'Chocolate almond Caprese cake',
            'Sheet pan lemon rosemary dijon chicken & potatoes',
            'Pan - seared salmon with dill sauce',
            'Classic mediterranean tuna salad'
            ],
   src3: ['image/dessert-01.jpg', 'image/dessert-02.jpg',
         'image/dessert-03.jpg', 'image/dessert-04.jpg'
                  ],
   title4: [
            'The spicy watermelon margarita',
            'Mediterranean mint lemonade',
            'Fresh pineapple mojitos cocktail',
            'The mediterranean bloody mary'
            ],
   src4: ['image/drink-01.jpg', 'image/drink-02.jpg',
         'image/drink-03.jpg', 'image/drink-04.jpg'
         ]
}

function show(src, title) {
   menuImg.forEach(function(img, i) {
      img.src = newDate[src][i];
      menuHaeding[i].textContent = newDate[title][i]
   })
}
listFood[0].addEventListener('click', function() {
   show('src1', 'title1');
   //add class atcive
   activeMenu(this);
});
listFood[1].addEventListener('click', function() {
   show('src2', 'title2');
   //add class atcive
   activeMenu(this);
});
listFood[2].addEventListener('click', function() {
      show('src3', 'title3');
      //add class atcive
      activeMenu(this);
   }),
   listFood[3].addEventListener('click', function() {
      show('src4', 'title4');
      //add class atcive
      activeMenu(this);
   });

function activeMenu(e) {
   listFood.forEach((x) => {
      x.classList.remove('active');
   });
   e.classList.add('active');
}


//add class atcive
function active(i) {
   navLink.forEach((x) => {
      x.classList.remove('active');
   });
   i.classList.add('active');
}

function sendMail() {
   // body...
   let Table = {
      firstName: document.getElementById('firstname').value,
      lastName: document.getElementById('lastname').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      date: document.getElementById('date').value,
      time: document.getElementById('time').value,
      people: document.getElementById('people').value
   }
   emailjs.send("email", "table_reservation", Table);
   document.querySelectorAll('input:not(:last-of-type)').forEach(input => input.value = '');
   datePlace.style = "display: block";
   timePlace.style = "display: block";
   
}
document.querySelector('#send').addEventListener('click', () => sendMail());

//hidden imput date placeholder
function hade(input, place) {
   input.addEventListener('input', function() {
      place.style = "display: none";
   })
}
hade(inputDate, datePlace);
hade(inputTime, timePlace);