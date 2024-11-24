    window.onscroll = function () {
        scrollFunction();
      };

      function scrollFunction() {
        var navbar = document.querySelector("nav");
        if (
          document.body.scrollTop > 50 ||
          document.documentElement.scrollTop > 50
        ) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      }
    