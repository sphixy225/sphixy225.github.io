//moblie menu
const BurgerIcon = document.querySelector("#burger")
const navbarMenu = document.querySelector("#navbar-links")
 
BurgerIcon.addEventListener("click" , () => {
    navbarMenu.classList.toggle("is-active")
    console.log("e")
})



// tabs
const tabs = document.querySelectorAll('.tabs li');
const tabContentBoxes = document.querySelectorAll('#tab-content > div');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(item => item.classList.remove('is-active'));
   tab.classList.add('is-active');

    const target = tab.dataset.target;
     //console.log(target);
    tabContentBoxes.forEach(box => {
      if (box.getAttribute('id') === target) {
        box.classList.remove('is-hidden');
      } else {
        box.classList.add('is-hidden');
      }
    })
  })
})


//modal
const modal = document.querySelector(".modal")
const modalBg = document.querySelector(".modal-background")
const ReservationButton = document.querySelector("#reservation")


ReservationButton.addEventListener("click", ()=> {

  modal.classList.add('is-active');
})



modalBg.addEventListener("click", ()=> {

  modal.classList.remove('is-active');
})