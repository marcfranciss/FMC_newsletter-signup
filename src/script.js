// jQuery
$(document).ready(function () {
  // jQuery methods go here...

  let timer;
  const emailRegEx = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
  const $inputType = $('input[type="email"]');
  const $btnValidate = $(".validation");
  const $btnReturn = $(".return");

  const validateInput = () => {
    $inputType.val() == "" || $inputType.val() == null
      ? isBlank("email", "error-message")
      : !emailRegEx.test($inputType.val())
      ? notValid("email", "error-message")
      : isValid("email", "error-message");
  };

  $inputType.on("input", () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      $inputType.val() == "" || $inputType.val() == null
        ? isBlank("email", "error-message")
        : !emailRegEx.test($inputType.val())
        ? notValid("email", "error-message")
        : ($(`#email`).removeClass("alert"),
          $(`.error-message`).addClass("isHidden"),
          $(`.error-message`).text(""),
          $(`.error-message`).attr("aria-hidden", "true"));
    }, 800);
  });

  const isBlank = (inputId, errorId) => {
    $(`#${inputId}`).addClass("alert");
    $(`.${errorId}`).removeClass("isHidden");
    $(`.${errorId}`).text("Valid email required");
    $(`.${errorId}`).attr("aria-hidden", "false");
  };
  const notValid = (inputId, errorId) => {
    $(`#${inputId}`).addClass("alert");
    $(`.${errorId}`).removeClass("isHidden");
    $(`.${errorId}`).text("Please enter a valid email address");
    $(`.${errorId}`).attr("aria-hidden", "false");
  };
  const isValid = (inputId, errorId) => {
    $(`#${inputId}`).removeClass("alert");
    $(`.${errorId}`).addClass("isHidden");
    $(`.${errorId}`).text("");
    $(`.${errorId}`).attr("aria-hidden", "true");
    showSuccess();
  };

  function showSuccess() {
    clearTimeout(timer);
    timer = setTimeout(() => {
      $(".success-container").removeClass("isHidden");
      $(".main-container").addClass("isHidden");
      $("#form-signup")[0].reset();
    }, 400);
  }

  $btnValidate.click((event) => {
    event.preventDefault();
    validateInput();
  });

  $btnReturn.click(() => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      $(".main-container").removeClass("isHidden");
      $(".success-container").addClass("isHidden");
    }, 400);
  });
});
