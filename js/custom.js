document.addEventListener('DOMContentLoaded', () => {
  new App()
})

class App {
  constructor() {
    this.init()
  }
  
  init() {
    this.createTabsSlider()
    this.createTabs()
    this.createSlider()
  }
  
  createTabsSlider = () => {
    const container = document.querySelector('[data-slider-tabs]');
    if (!container) return;
    
    const mainSliderBlock = container.querySelector('[data-slider="main"]');
    const tabsSliderBlock = container.querySelector('[data-slider="tabs"]');
    
    if (!tabsSliderBlock || !mainSliderBlock) return;
    
    const thumbSlider = new Swiper(tabsSliderBlock.querySelector('.swiper-container'), {
      slidesPerView: 4,
      spaceBetween: 10,
    })
    
    const mainSlider = new Swiper(mainSliderBlock.querySelector('.swiper-container'), {
      slidesPerView: 1,
      watchSlidesProgress: true,
      pagination: {
        el: this.pagination,
        clickable: true,
      },
      thumbs: {
        swiper: thumbSlider,
      },
    })
  }
  
  createSlider = () => {
    const sliders = document.querySelectorAll('[data-slider="default"]');
    
    if (!sliders) return;
    
    sliders.forEach(slider => {
      const slidesCount = slider.getAttribute('data-slides');
      new Swiper(slider, {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
          prevEl: slider.querySelector('.swiper-btn--prev'),
          nextEl: slider.querySelector('.swiper-btn--next'),
        },
        breakpoints: {
          1300: {
            slidesPerView: slidesCount ? slidesCount : 1,
          }
        }
      })
    })
  }
  
  createTabs = () => {
    const tabsBlock = document.querySelector('[data-tabs]');
    if (!tabsBlock) return;
    const headerItems = tabsBlock.querySelectorAll('[data-tabs-header]');
    const contentItems = tabsBlock.querySelectorAll('[data-tabs-item]');
    
    headerItems.forEach((item, idx) => {
      item.addEventListener('click', () => {
        clearClasses()
        item.classList.add('active');
        contentItems.item(idx).classList.add('active');
      })
    })
    
    const clearClasses = () => {
      headerItems.forEach(item => item.classList.remove('active'))
      contentItems.forEach(item => item.classList.remove('active'))
    }
  }
}
