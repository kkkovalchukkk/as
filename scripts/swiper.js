document.querySelector('.project-section__swiper') &&
  new Swiper('.project-section__swiper', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 20,
    navigation: {
      nextEl: '.project-section__swiper-navigation-btn-right',
      prevEl: '.project-section__swiper-navigation-btn-left',
    },
  });
  if(window.innerWidth > 525){
    document.querySelector('.detail-section__gallery') &&
      new Swiper('.detail-section__gallery', {
        slidesPerView: 'auto',
        spaceBetween: 20,
      });
  }
