let menuActive = false;

function showMenu() {
  let el = document.querySelector('.header__nav');
  el.classList.add('active');
  el.classList.add('visible');
}

function hideMenu() {
  let el = document.querySelector('.header__nav');
  el.classList.remove('active');
  setTimeout(function() {
    el.classList.remove('visible');
  }, 300);
}

document.addEventListener('DOMContentLoaded', function() {

  document.querySelector('.header__burger').addEventListener('click', function() {
    showMenu();
    menuActive = true;
  });

  document.querySelector('.header__close-button').addEventListener('click', function() {
    hideMenu();
    menuActive = false;
  });

  document.querySelector('.header__search-button-open').addEventListener('click', function() {
    if (menuActive) {
      hideMenu();
    }
    document.querySelector('.header__container').classList.add('search_enabled');
  });

  document.querySelector('.header__search-button-close').addEventListener('click', function() {
    if (menuActive) {
      showMenu();
    }
    document.querySelector('.header__container').classList.remove('search_enabled');
  });

  const swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 5000,
    },
  });

  document.querySelectorAll('.our-job__tab').forEach((item) => {
    item.addEventListener('click', function(event) {
      const tab_id = event.currentTarget.dataset.id;

      document.querySelector('.our-job__tab.active').classList.remove('active');
      document.querySelector('.our-job__card.active').classList.remove('active');

      this.classList.add('active');
      document.querySelector(`[data-tab="${tab_id}"]`).classList.add('active');
    });
  });

  $(function() {
    $("#accordion").accordion({
      heightStyle: "content",
      collapsible: true,
      icons: false
    });
  });

  document.querySelectorAll('.qna__file-title').forEach((item) => {
    item.addEventListener('mouseover', function(event) {
      const file_id = event.currentTarget.dataset.faqtitle;
      this.classList.add('hovered');
      document.querySelector(`[data-faqtext="${file_id}"]`).classList.add('hovered');
    });
    item.addEventListener('mouseout', function(event) {
      const file_id = event.currentTarget.dataset.faqtitle;
      this.classList.remove('hovered');
      document.querySelector(`[data-faqtext="${file_id}"]`).classList.remove('hovered');
    });
  });

  document.querySelectorAll('.qna__file-text').forEach((item) => {
    item.addEventListener('mouseover', function(event) {
      const file_id = event.currentTarget.dataset.faqtext;
      this.classList.add('hovered');
      document.querySelector(`[data-faqtitle="${file_id}"]`).classList.add('hovered');
    });
    item.addEventListener('mouseout', function(event) {
      const file_id = event.currentTarget.dataset.faqtext;
      this.classList.remove('hovered');
      document.querySelector(`[data-faqtitle="${file_id}"]`).classList.remove('hovered');
    });
  });
});
