class Accordeon {
  constructor(el) {
    this.accordeonEl = el;
    this.accordeonContentEl = this.accordeonEl.querySelector(
      '.accordeon__content'
    );
    this.active = false;
    this.ACTIVE_CLASSNAME = 'active';
    this.registerEventListener();
  }

  toggle() {
    if (this.active) {
      this.accordeonEl.classList.remove(this.ACTIVE_CLASSNAME);
      this.accordeonContentEl.style.maxHeight = '0px';
      this.active = false;
    } else {
      this.accordeonEl.classList.add(this.ACTIVE_CLASSNAME);
      this.accordeonContentEl.style.maxHeight =
        this.accordeonContentEl.scrollHeight + 100 + 'px';
      this.active = true;
    }
  }

  registerEventListener() {
    this.accordeonEl.addEventListener('click', () => {
      this.toggle();
    });
  }
}

class AccordeonList {
  constructor(selector) {
    this.accordeonList = [];
    this.selector = selector;
    this.init();
  }

  init() {
    document.querySelectorAll(this.selector).forEach((acc) => {
      this.accordeonList.push(new Accordeon(acc));
    });
  }
}

const accordeonList = new AccordeonList('.accordeon');
