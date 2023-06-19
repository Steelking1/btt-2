export class Menu_mobile {

    constructor(button, menu) {
        this.button = button;
        this.menu = menu;

    }

    toggle() {
        let button = document.querySelector('.' + this.button);
        let menu = document.querySelector('.' + this.menu);
        button.addEventListener('click', ()=> {
            menu.classList.toggle('active');
        })
    }
}

/**
 * @param {selector-up} scrollUp 
* @param {selector-down} scrollDown
 */
export class Menu_collant {
    /**
     * 
     * @param {selector-up} scrollUp 
     * @param {selector-down} scrollDown 
     */
    constructor(scrollUp, scrollDown) {
        this.scrollUp = scrollUp;
        this.scrollDown = scrollDown;
    }

    MenuCollant() { 
        const body = document.body;
        let lastScroll = 0;
      
        window.addEventListener('scroll', ()=>{
            const currentScroll = window.pageYOffset;
            if (currentScroll <= 0) {
                body.classList.remove(this.scrollUp);
                return;
            }
      
            if (currentScroll > lastScroll && !body.classList.contains(this.scrollDown)) {
                body.classList.remove(this.scrollUp);
                body.classList.add(this.scrollDown);
            } else if (currentScroll < lastScroll && body.classList.contains(this.scrollDown)) {
                body.classList.remove(this.scrollDown);
                body.classList.add(this.scrollUp);
            }
            lastScroll = currentScroll;
        })
      }
}

/**
     * Permet de faire un scrollspy; sections: les sections du scrollspy notamment par l'attribut ex: data-*
     * et anchorActive: la classe active des liens
     * @param {class String} anchorActive 
     * @param {class String} sections 
     */
export class ScrollSpy {
    /**
     * Permet de faire un scrollspy; sections: les sections du scrollspy notamment par l'attribut ex: data-*
     * et anchorActive: la classe active des liens
     * @param {class String} anchorActive 
     * @param {class String} sections 
     */
    constructor(anchorActive,sections) {
        this.anchorActive = anchorActive;
        this.sections = sections;
    }

    go() { 

        const ratio = .6;
        const spies = document.querySelectorAll(this.sections);
        const anchorA = this.anchorActive;        
      
        let observer = null;
      
        /**
         * @param {HTMLElement} el
         */
        const activate = function (el) {
          const id = el.getAttribute('id');
          const anchor = document.querySelector(`a[href="#${id}"]`)
      
          if (anchor === null) {
            return null;
          }
      
          anchor.parentElement
            .querySelectorAll('.' + anchorA)
            .forEach(node => node.classList.remove(anchorA));
      
          anchor.classList.add(anchorA);
        }
      
        /**
         * 
         * @param {IntersectionObserverEntry[]} entries 
         */
        const callback = function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              activate(entry.target)
            }
        })
      
        };
      
      
        /**
         * 
         * @param {NodeListOf.<Element>} elems 
         */
        const observe = function (elems) {
          if(observer !== null) {
            elems.forEach(el => observer.unobserve(el));
          }
          const y = Math.round(window.innerHeight * ratio);
          observer = new IntersectionObserver(callback, {
            rootMargin: `-${window.innerHeight - y -1}px 0px -${y}px 0px` 
          });
          spies.forEach(el => observer.observe(el));
        }
      
        /**
         * 
         * @param {Function} callback 
         * @param {number} delay 
         * @returns {Function}
         */
        const debounce = function (callback, delay) {
          let timer;
          return function(){
            let args = arguments;
            let context = this;
            clearTimeout(timer);
            timer = setTimeout(function(){
              callback.apply(context, args);
            }, delay)
          }
        }
      
        if (spies.length > 0) {
          observe(spies);
          let windowX = window.innerHeight;
          
          window.addEventListener('resize', debounce(function () {
            if (window.innerHeight !== windowX) { 
                observe(spies);
      
                windowX = window.innerHeight;
            }
          }, 600))
        }
      }
}

/**
     * 
     * @param {string classCss} reveal 
     */
export class apparitionOnscroll {
    /**
     * 
     * @param {string classCss} reveal 
     */
    constructor(reveal) {
        this.reveal = reveal;
        
    }
    
    go() {
        const revealClosure = this.reveal;

        const ratio = .1;
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: ratio
        }
      
        const handleIntersect = function (entries, observer) {
            
            entries.forEach(function(entry) {
                if (entry.intersectionRatio > ratio) {
                    entry.target.classList.remove(revealClosure)
                    observer.unobserve(entry.target)
                }
            })
        }
      
        document.documentElement.classList.add('reveal-loaded')
        const observer = new IntersectionObserver(handleIntersect, options)
        document.querySelectorAll('.' + this.reveal).forEach(function (r) {
            observer.observe(r)
        })
      }
}

export class backtoTop {
    constructor(classActive, selectorBtn) {
        this.classActive = classActive;
        this.selectorBtn = selectorBtn;
    }

    go() {
        let classActive = this.classActive;
        let selectorBtn = this.selectorBtn;
        let backtotop = document.querySelector('.' + selectorBtn);
        if (backtotop) {
            const toggleBacktotop = () => {
            if (window.scrollY > 100) {
                backtotop.classList.add(classActive)
            } else {
                backtotop.classList.remove(classActive)
            }
            }
            window.addEventListener('scroll', toggleBacktotop)
            // onscroll(document, toggleBacktotop)
        }
    }
}