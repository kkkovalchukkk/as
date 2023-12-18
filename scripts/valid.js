window.addEventListener('DOMContentLoaded', () => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const inputEls = document.querySelectorAll('input');

  const registrationFormEl = document.querySelector('#form-registration');
  const registrationBtn = document.querySelector('#form-btn');
  const intranceFormEl = document.querySelector('#form-intrance');
  const footerFormEl = document.querySelector('#footer-form');
  const registrationNameInputEl =
    registrationFormEl?.querySelector('#form-name-input');
  const registrationSurnameInputEl = registrationFormEl?.querySelector(
    '#form-surname-input'
  );
  const registrationEmailInputEl =
    registrationFormEl?.querySelector('#form-email-input');
  const registrationTelInputEl =
    registrationFormEl?.querySelector('#form-tel-input');
  const registrationPasswordInputEl = registrationFormEl?.querySelector(
    '#form-password-input'
  );
  const registrationPasswordRepeatInputEl = registrationFormEl?.querySelector(
    '#form-password-input-repeat'
  );
  const intranceEmailInputEl =
    intranceFormEl?.querySelector('#form-email-input');
  const intrancePasswordInputEl = intranceFormEl?.querySelector(
    '#form-password-input'
  );
  const intranceErrorEl = intranceFormEl?.querySelector('.form__error');

  const telInputEls = document.querySelectorAll('input[name="tel"]');

  const checkInputValidity = (input) => input.value;

  const submitRegistrationForm = (e) => {
    e.preventDefault();

    [registrationNameInputEl, registrationTelInputEl].forEach((input) => {
      if (!checkInputValidity(input)) {
        input.parentElement.classList.add('invalid');
        return;
      } else {
        input.parentElement.classList.remove('invalid');
      }
    });

    !e.target.querySelector('.invalid') && registrationFormEl.submit();
  };

  [registrationNameInputEl, registrationSurnameInputEl].forEach((input) => {
    input?.addEventListener('input', () => {
      if (input.value.length < 2 || input.value.length > 30) {
        input.parentElement.classList.add('invalid');
        return;
      } else {
        input.parentElement.classList.remove('invalid');
      }
    });
  });

  [registrationEmailInputEl, intranceEmailInputEl].forEach((input) => {
    input?.addEventListener('input', () => {
      if (!emailRegex.test(input.value)) {
        input.parentElement.classList.add('invalid');
        return;
      } else {
        input.parentElement.classList.remove('invalid');
      }
    });
  });

  registrationTelInputEl?.addEventListener('input', () => {
    if (!registrationTelInputEl.value) {
      registrationTelInputEl.parentElement.classList.add('invalid');
      return;
    } else {
      registrationTelInputEl.parentElement.classList.remove('invalid');
    }
  });

  [registrationPasswordInputEl, intrancePasswordInputEl].forEach((input) => {
    input?.addEventListener('input', () => {
      if (input.value.length < 6) {
        input.classList.add('invalid');
        return;
      } else {
        input.classList.remove('invalid');
      }
    });
  });

  inputEls.forEach((i) =>
    i.addEventListener('focus', () => {
      !i.value && i.classList.add('focused');
    })
  );
  inputEls.forEach((i) =>
    i.addEventListener('blur', () => {
      !i.value && i.classList.remove('focused');
    })
  );

  telInputEls.forEach((i) => {
    i.addEventListener('input', () => {
      i.value = i.value.replace(/\D/g, '');
      console.log(i);
    });
  });

  registrationFormEl?.addEventListener('submit', submitRegistrationForm);
});
