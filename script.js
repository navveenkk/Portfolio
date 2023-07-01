window.addEventListener('load', function homePage() {
    document.getElementById('homepage').click();
  });

  function showPage(page, links) {
    var i, mainContent, bgContent, idpage, mainlinks;
    mainContent = document.getElementsByClassName('main-content');
      for (i = 0; i < mainContent.length; i++) {
      mainContent[i].style.display = "none";
      }

    mainlinks = document.getElementsByClassName('navigation-menu-item');
      for (i = 0; i < mainlinks.length; i++) {
        mainlinks[i].classList.remove('active');
      }
      
    links.parentElement.classList.add('active');
    idpage = document.getElementById(page);
    idpage.style.display = "block";
  }

  function switchLight() {
    var bodySwitchMode = document.getElementById('mainpage');
    bodySwitchMode.classList.toggle('night-mode');

  }
