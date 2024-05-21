const showPopupBtn = document.querySelector(".btn-login");
const hidePopupBtn = document.querySelector(".form-popup .close-btn");
const loginSignupLink = document.querySelectorAll(".form-box .bottom-link a");
const formPopup = document.querySelector(".form-popup");

  var swiper = new Swiper('.mySwiper-1', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // Puedes agregar más configuraciones aquí según tus necesidades
  });



showPopupBtn.addEventListener("click", () => {
  // CHANGE THE CLASS NAME WHEN THE LOGIN BUTTON IS CLICKED
  document.body.classList.toggle("show-popup");
});


hidePopupBtn.addEventListener("click", () => {
  // CHANGE THE CLASS NAME WHEN THE CLOSE BUTTON IS CLICKED
  document.body.classList.remove("show-popup");
});


loginSignupLink.forEach(link=>{
    link.addEventListener("click", (e) => {
        e.preventDefault();
        // CHANGE THE CLASS NAME WHEN THE SIGNUP LINK IS CLICKED
        formPopup.classList[link.id === "signup-link" ? 'add' : 'remove']("show-signup");
    })
})

