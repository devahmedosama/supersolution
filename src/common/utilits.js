export const accordion = () => {
  var acc = document.getElementsByClassName("mil-accordion-menu");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
      this.classList.toggle("mil-active");
      var panel = this.nextElementSibling;
      if (panel.style.height) {
        panel.style.height = null;
      } else {
        panel.style.height = panel.scrollHeight + "px";
      }
    };
  }
};

export const formInputs = () => {
  var inputs = document.querySelectorAll("input");

  inputs.forEach((input) => {
    input.addEventListener('blur', (event) => {
      if ( input.value !== ''  ) {
        input.classList.add('mil-keep');
      } else {
        input.classList.remove('mil-keep');
      }
    });
  });
};