import { useEffect } from 'react';
import Swiper from 'swiper';
import basicLightbox from 'basiclightbox';
import MoveTo from 'moveto';

// Import des styles si nécessaire
import 'swiper/css';
import 'basiclightbox/dist/basicLightbox.min.css';
const anime = window.anime;
const useTemplate = () => {

  const viewAnimate = () => {
    const blocks = document.querySelectorAll("[data-animate-block]");

    blocks.forEach(function(current) {
      const viewportHeight = window.innerHeight;
      const triggerTop = (current.offsetTop + (viewportHeight * .2)) - viewportHeight;
      const blockHeight = current.offsetHeight;
      const blockSpace = triggerTop + blockHeight;
      const scrollY = window.pageYOffset;
      const inView = scrollY > triggerTop && scrollY <= blockSpace;
      const isAnimated = current.classList.contains("ss-animated");

      if (inView && (!isAnimated)) {
        anime({
          targets: current.querySelectorAll("[data-animate-el]"),
          opacity: [0, 1],
          translateY: [100, 0],
          delay: anime.stagger(400, {start: 200}),
          duration: 800,
          easing: 'easeInOutCubic',
          begin: function(anim) {
            current.classList.add("ss-animated");
          }
        });
      }
    });
  }

  useEffect(() => {
    // IIFE provenant du main.js original, adapté pour React
    (function(html) {
      "use strict";
      
      html.className = html.className.replace(/\bno-js\b/g, '') + ' js ';

      /* Animations
       * -------------------------------------------------- */
      const tl = anime.timeline({
        easing: 'easeInOutCubic',
        duration: 800,
        autoplay: false
      })
      .add({
        targets: '#loader',
        opacity: 0,
        duration: 1000,
        begin: function(anim) {
          window.scrollTo(0, 0);
        }
      })
      .add({
        targets: '#preloader',
        opacity: 0,
        complete: function(anim) {
          document.querySelector("#preloader").style.visibility = "hidden";
          document.querySelector("#preloader").style.display = "none";
        }
      })
      .add({
        targets: '.s-header',
        translateY: [-100, 0],
        opacity: [0, 1]
      }, '-=200')
      .add({
        targets: ['.s-intro .text-pretitle', '.s-intro .text-huge-title'],
        translateX: [100, 0],
        opacity: [0, 1],
        delay: anime.stagger(400)
      })
      .add({
        targets: '.circles span',
        keyframes: [
          {opacity: [0, .3]},
          {opacity: [.3, .1], delay: anime.stagger(100, {direction: 'reverse'})}
        ],
        delay: anime.stagger(100, {direction: 'reverse'})
      })
      .add({
        targets: '.intro-social li',
        translateX: [-50, 0],
        opacity: [0, 1],
        delay: anime.stagger(100, {direction: 'reverse'})
      })
      .add({
        targets: '.intro-scrolldown',
        translateY: [100, 0],
        opacity: [0, 1]
      }, '-=800');

      /* Preloader
       * -------------------------------------------------- */
      const ssPreloader = function() {
        const preloader = document.querySelector('#preloader');
        if (!preloader) return;
        
        // Simuler l'événement load déjà passé en React
        setTimeout(() => {
          document.querySelector('html')?.classList.remove('ss-preload');
          document.querySelector('html')?.classList.add('ss-loaded');

          document.querySelectorAll('.ss-animated').forEach(function(item){
            item?.classList.remove('ss-animated');
          });

          tl.play();
        }, 100);
      };

      /* Mobile Menu
       * ---------------------------------------------------- */ 
      const ssMobileMenu = function() {
        const toggleButton = document.querySelector('.mobile-menu-toggle');
        const mainNavWrap = document.querySelector('.main-nav-wrap');
        const siteBody = document.querySelector("body");

        if (!(toggleButton && mainNavWrap)) return;

        toggleButton.addEventListener('click', function(event) {
          event.preventDefault();
          toggleButton.classList.toggle('is-clicked');
          siteBody.classList.toggle('menu-is-open');
        });

        mainNavWrap.querySelectorAll('.main-nav a').forEach(function(link) {
          link.addEventListener("click", function(event) {
            // at 800px and below
            if (window.matchMedia('(max-width: 800px)').matches) {
              toggleButton.classList.toggle('is-clicked');
              siteBody.classList.toggle('menu-is-open');
            }
          });
        });

        window.addEventListener('resize', function() {
          // above 800px
          if (window.matchMedia('(min-width: 801px)').matches) {
            if (siteBody.classList.contains('menu-is-open')) siteBody.classList.remove('menu-is-open');
            if (toggleButton.classList.contains("is-clicked")) toggleButton.classList.remove("is-clicked");
          }
        });
      };

      /* Highlight active menu link on pagescroll
       * ------------------------------------------------------ */
      const ssScrollSpy = function() {
        const sections = document.querySelectorAll(".target-section");

        // Add an event listener listening for scroll
        window.addEventListener("scroll", navHighlight);

        function navHighlight() {
          // Get current scroll position
          let scrollY = window.pageYOffset;
        
          // Loop through sections
          sections.forEach(function(current) {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 50;
            const sectionId = current.getAttribute("id");
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
              document.querySelector(".main-nav a[href*=" + sectionId + "]")?.parentNode.classList.add("current");
            } else {
              document.querySelector(".main-nav a[href*=" + sectionId + "]")?.parentNode.classList.remove("current");
            }
          });
        }
      };

      /* Animate elements if in viewport
       * ------------------------------------------------------ */
      const ssViewAnimate = function() {
        const blocks = document.querySelectorAll("[data-animate-block]");

        window.addEventListener("scroll", viewportAnimation);

        function viewportAnimation() {
          let scrollY = window.pageYOffset;

          blocks.forEach(function(current) {
            const viewportHeight = window.innerHeight;
            const triggerTop = (current.offsetTop + (viewportHeight * .2)) - viewportHeight;
            const blockHeight = current.offsetHeight;
            const blockSpace = triggerTop + blockHeight;
            const inView = scrollY > triggerTop && scrollY <= blockSpace;
            const isAnimated = current.classList.contains("ss-animated");

            if (inView && (!isAnimated)) {
              anime({
                targets: current.querySelectorAll("[data-animate-el]"),
                opacity: [0, 1],
                translateY: [100, 0],
                delay: anime.stagger(400, {start: 200}),
                duration: 800,
                easing: 'easeInOutCubic',
                begin: function(anim) {
                  current.classList.add("ss-animated");
                }
              });
            }
          });
        }
      };

      /* Swiper
       * ------------------------------------------------------ */ 
      const ssSwiper = function() {
        const swiperContainer = document.querySelector('.swiper-container');
        if (!swiperContainer) return;

        const mySwiper = new Swiper('.swiper-container', {
          slidesPerView: 1,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          breakpoints: {
            // when window width is > 400px
            401: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            // when window width is > 800px
            801: {
              slidesPerView: 2,
              spaceBetween: 32
            },
            // when window width is > 1200px
            1201: {
              slidesPerView: 2,
              spaceBetween: 80
            }
          }
        });
      };

      /* Lightbox
       * ------------------------------------------------------ */
      const ssLightbox = function() {
        const folioLinks = document.querySelectorAll('.folio-list__item-link');
        const modals = [];

        folioLinks.forEach(function(link) {
          let modalbox = link.getAttribute('href');
          let modalContent = document.querySelector(modalbox);
          
          if (!modalContent) return;
          
          let instance = basicLightbox.create(
            modalContent,
            {
              onShow: function(instance) {
                //detect Escape key press
                document.addEventListener("keydown", function(event) {
                  event = event || window.event;
                  if (event.keyCode === 27) {
                    instance.close();
                  }
                });
              }
            }
          );
          modals.push(instance);
        });

        folioLinks.forEach(function(link, index) {
          link.addEventListener("click", function(event) {
            event.preventDefault();
            modals[index].show();
          });
        });
      };

      /* Alert boxes
       * ------------------------------------------------------ */
      const ssAlertBoxes = function() {
        const boxes = document.querySelectorAll('.alert-box');
    
        boxes.forEach(function(box){
          box.addEventListener('click', function(event) {
            if (event.target.matches(".alert-box__close")) {
              event.stopPropagation();
              event.target.parentElement.classList.add("hideit");

              setTimeout(function(){
                box.style.display = "none";
              }, 500);
            }    
          });
        });
      };

      /* Smoothscroll
       * ------------------------------------------------------ */
      const ssMoveTo = function(){
        const easeFunctions = {
          easeInQuad: function (t, b, c, d) {
            t /= d;
            return c * t * t + b;
          },
          easeOutQuad: function (t, b, c, d) {
            t /= d;
            return -c * t* (t - 2) + b;
          },
          easeInOutQuad: function (t, b, c, d) {
            t /= d/2;
            if (t < 1) return c/2*t*t + b;
            t--;
            return -c/2 * (t*(t-2) - 1) + b;
          },
          easeInOutCubic: function (t, b, c, d) {
            t /= d/2;
            if (t < 1) return c/2*t*t*t + b;
            t -= 2;
            return c/2*(t*t*t + 2) + b;
          }
        };

        const triggers = document.querySelectorAll('.smoothscroll');
        
        const moveTo = new MoveTo({
          tolerance: 0,
          duration: 1200,
          easing: 'easeInOutCubic',
          container: window
        }, easeFunctions);

        triggers.forEach(function(trigger) {
          moveTo.registerTrigger(trigger);
        });
      };

      /* Initialize
       * ------------------------------------------------------ */
      (function ssInit() {
        ssPreloader();
        ssMobileMenu();
        ssScrollSpy();
        ssViewAnimate();
        viewAnimate();
        ssSwiper();
        ssLightbox();
        ssAlertBoxes();
        ssMoveTo();
      })();
      window.addEventListener('scroll', viewAnimate);
    })(document.documentElement);
    

    // Nettoyage lors du démontage du composant
    return () => {
      // Supprimer les écouteurs d'événements si nécessaire
      window.removeEventListener('scroll', null);
      window.removeEventListener('resize', null);
      window.removeEventListener('scroll', viewAnimate);
    };
  }, []);  // Le tableau vide assure que cela ne s'exécute qu'une fois au montage

  return viewAnimate;
};

export default useTemplate;