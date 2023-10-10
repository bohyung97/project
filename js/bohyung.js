const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction'
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const gnbBtn = document.querySelector('.gnbBtns');
const gnb = document.querySelector('.gnb');
const dark = document.querySelector('.dark');

gnbBtn.onclick=()=>{
  gnb.style = 'transform:translateX(0%)'
  dark.style.display = 'block'
}
dark.onclick = () => {
  gnb.style = 'transform:translateX(100%)';
  dark.style.display = 'none'
}

const TopBtn = document.querySelector('.scrollTop');

TopBtn.onclick = function(){
  window.scrollTo({ top:0, behavior:'smooth'})
}
