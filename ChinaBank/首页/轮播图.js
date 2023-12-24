var mySwiper = new Swiper('#swiper1', {
  //direction: 'vertical', // 垂直切换选项
  loop: true, // 循环模式选项

  // 如果需要分页器
  pagination: {
    el: '.swiper-pagination',
  },

  // 如果需要前进后退按钮
  // navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  // },

  // 如果需要滚动条
  // scrollbar: {
  //     el: '.swiper-scrollbar',
  // },

  autoplay: {
    delay: 2000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
  effect: 'fade',
})

var mySwiper1 = new Swiper('#swiper2', {
  direction: 'vertical', // 垂直切换选项
  loop: true, // 循环模式选项
  // effect: "flip",
  // 如果需要分页器
  // pagination: {
  //   el: '.swiper-pagination1',
  // },

  // 如果需要前进后退按钮
  // navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  // },

  // 如果需要滚动条
  // scrollbar: {
  //     el: '.swiper-scrollbar',
  // },

  autoplay: {
    delay: 1500,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
  // effect: 'fade',
})