$(function () {

  // Slider

  $(document).ready(function () {
    $('.slider').slick({
      arrows: false,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1501,
          settings: {
            slidesToShow: 5
          }
        },
        {
          breakpoint: 1301,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 561,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 381,
          settings: {
            slidesToShow: 2
          }
        }
      ]
    });
  });

  //Tabs

  const tabs = () => {
    const tabHeader = document.querySelector('.catalog__tabs'),
      tab = tabHeader.querySelectorAll('.tab-link'),
      tabContent = document.querySelectorAll('.tabcontent');

    const toggleTabContent = (index) => {
      for (let i = 0; i < tabContent.length; i++) {
        if (index === i) {
          tab[i].classList.add('active');
          tabContent[i].classList.add('active');
        } else {
          tab[i].classList.remove('active');
          tabContent[i].classList.remove('active');
        }
      }
    }

    tabHeader.addEventListener('click', (e) => {
      let target = e.target;
      target = target.closest('.tab-link');

      if (target) {
        tab.forEach((item, i) => {
          if (item === target) {
            toggleTabContent(i);
          }
        })
      }
    })

  }
  tabs();

  // Popup

  const togglePopUp = () => {
    const tabcontent = document.querySelector('.catalog__tabcontent'),
      popUp = document.querySelector('.popup'),
      body = document.querySelector('body');

    tabcontent.addEventListener('click', e => {
      let target = e.target;
      target = target.closest('.card-btn');

      if (target) {
        popUp.classList.add('open');
        body.classList.add('lock');
      }
    })

    popUp.addEventListener('click', e => {
      let target = e.target;

      if (target.classList.contains('popup__close')) {
        popUp.classList.remove('open');
        body.classList.remove('lock');
      } else {
        target = target.closest('.popup__content');
        if (!target) {
          popUp.classList.remove('open');
          body.classList.remove('lock');
        }
      }
    })
  }
  togglePopUp();

});

