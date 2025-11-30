 function toggleMobileMenu() {
      const menu = document.getElementById("mobileMenu");
      menu.classList.toggle("open");
      
    }

    function toggleMobileSubmenu(dropdown) {
      const content = dropdown.querySelector('.mobileDropdown-content');
      content.classList.toggle('open');
    }