document.addEventListener("DOMContentLoaded", function() {
    console.log("Script loaded and DOM fully loaded.");
  
    const showPopupBtn = document.querySelector(".btn-login");
    const hidePopupBtn = document.querySelector(".form-popup .close-btn");
    const loginSignupLink = document.querySelectorAll(".form-box .bottom-link a");
    const formPopup = document.querySelector(".form-popup");
  
    if (!showPopupBtn) {
      console.error("Login button not found!");
      return;
    }
    if (!hidePopupBtn) {
      console.error("Close button not found!");
      return;
    }
    if (!formPopup) {
      console.error("Form popup not found!");
      return;
    }
  
    console.log("All necessary elements found.");
  
    showPopupBtn.addEventListener("click", () => {
      console.log("Login button clicked.");
      document.body.classList.toggle("show-popup");
    });
  
    hidePopupBtn.addEventListener("click", () => {
      console.log("Close button clicked.");
      document.body.classList.remove("show-popup");
    });
  
    loginSignupLink.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        console.log(`${link.id === "signup-link" ? "Signup" : "Login"} link clicked.`);
        formPopup.classList[link.id === "signup-link" ? 'add' : 'remove']("show-signup");
      });
    });
  });
  