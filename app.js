// ===============================================================------------------- For Active  ---------------=======================
// script.js
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav-link");

  // Function to set the active link based on URL hash or local storage
  const setActiveLink = () => {
    const currentHash =
      window.location.hash || localStorage.getItem("activeLink");

    links.forEach((link) => {
      if (link.getAttribute("href") === currentHash) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  };

  // Set the active link on initial load
  setActiveLink();

  // Add event listeners to all links
  links.forEach((link) => {
    link.addEventListener("click", function () {
      // Save the active link in local storage
      localStorage.setItem("activeLink", this.getAttribute("href"));
      setActiveLink();
    });
  });

  // Update active link on hash change
  window.addEventListener("hashchange", setActiveLink);
});

// ============================================================------------- Product component popup  -------==============================

document.querySelector(".p-img").addEventListener("click", function () {
  document.querySelector("#comp").classList.add("active");
});

//   document
//   .querySelector(".pro1 .close-btn")
//   .addEventListener("click", function () {
//     document.querySelector(".pro1").classList.remove("active");
//   });

// ============================================================------------- For Dropdown  -------==============================

// document.querySelector("#show-login").addEventListener("click", function () {
//     document.querySelector(".popup").classList.add("active");
//   });

//   document
//     .querySelector(".popup .close-btn")
//     .addEventListener("click", function () {
//       document.querySelector(".popup").classList.remove("active");
//     });




// =========================================================-----------  Login popup 5s -----------==================================

// script.js
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("login-popup");
  const closeBtn = document.querySelector(".close-btn");

  // Function to show the modal
  const showModal = () => {
    modal.style.display = "block";
  };

  // Show the modal after 5 seconds
  setTimeout(showModal, 5000);

  // Close the modal when the user clicks on <span> (x)
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close the modal when the user clicks anywhere outside of the modal
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  // Prevent the form from submitting and close the modal
  document.getElementById("log-form").addEventListener("submit", (event) => {
    event.preventDefault();
    modal.style.display = "none";
    alert("Login form submitted!");
  });
});
