const ACTIVE_OVERLAY_CLASSNAME = 'overlay--active';
const ACTIVE_POPUP_CLASSNAME = 'popup--active';
const NO_SCROLL_CLASSNAME = 'no-scroll';

const overlayEl = document.querySelector('.overlay');
const popupEls = document.querySelectorAll('.popup');
const videoPopupEl = document.querySelector('.popup--video');
const mapPopupEl = document.querySelector('.popup--map');
const toggleVideoPopupBtnEl = document.querySelector('#toggle-video-popup');
const vacancyPopupEl = document.querySelector('.popup--vacancy');
const toggleMapPopupBtnEl = document.querySelector('#toggleMap');
const toggleVacancyPopupBtnEls = document.querySelectorAll(
  '.free-section__table-row'
);

const makeActive = (el, classname) => el.classList.add(classname);
const makeInactive = (el, classname) => el.classList.remove(classname);

const offScroll = () => {
  document.body.classList.add(NO_SCROLL_CLASSNAME);
  document.documentElement.classList.add(NO_SCROLL_CLASSNAME);
};
const onScroll = () => {
  document.body.classList.remove(NO_SCROLL_CLASSNAME);
  document.documentElement.classList.remove(NO_SCROLL_CLASSNAME);
};

const closeActivePopup = () => {
  const activePopupEl = document.querySelector('.popup--active');
  makeInactive(activePopupEl, ACTIVE_POPUP_CLASSNAME);
  makeInactive(overlayEl, ACTIVE_OVERLAY_CLASSNAME);
  window.removeEventListener('keydown', closePopupByClickOnEsc);
  window.removeEventListener('click', closePopupByClickOnOverlay);
  document.querySelector('.player')?.querySelector('video') &&
    document.querySelector('.player')?.querySelector('video').pause();
  document.querySelector('.player') &&
    document.querySelector('.player').classList.add('paused');
  onScroll();
};

const closePopupByClickOnOverlay = (e) => {
  e.target === overlayEl && closeActivePopup();
};

const closePopupByClickOnEsc = (e) => {
  e.key === 'Escape' && closeActivePopup();
};

const toggleOnVideoPopup = () => {
  offScroll();
  makeActive(overlayEl, ACTIVE_OVERLAY_CLASSNAME);
  makeActive(videoPopupEl, ACTIVE_POPUP_CLASSNAME);
  window.addEventListener('keydown', closePopupByClickOnEsc);
  window.addEventListener('click', closePopupByClickOnOverlay);
};

const toggleOnMapPopup = () => {
  offScroll();
  makeActive(overlayEl, ACTIVE_OVERLAY_CLASSNAME);
  makeActive(mapPopupEl, ACTIVE_POPUP_CLASSNAME);
  window.addEventListener('keydown', closePopupByClickOnEsc);
  window.addEventListener('click', closePopupByClickOnOverlay);
};

popupEls.forEach((p) => {
  const closePopupBtnEl = p.querySelector('.popup__close-btn');
  closePopupBtnEl.addEventListener('click', closeActivePopup);
});

toggleVacancyPopupBtnEls?.forEach((btn) => {
  btn.addEventListener('click', () => {
    offScroll();
    makeActive(vacancyPopupEl, ACTIVE_POPUP_CLASSNAME);
    makeActive(overlayEl, ACTIVE_OVERLAY_CLASSNAME);
    window.addEventListener('keydown', closePopupByClickOnEsc);
    window.addEventListener('click', closePopupByClickOnOverlay);
  });
});

toggleVideoPopupBtnEl?.addEventListener('click', toggleOnVideoPopup);

toggleMapPopupBtnEl?.addEventListener('click', toggleOnMapPopup);
