window.onload = function() {
  function openModal() {
    let modalTrigger = document.querySelectorAll('.js-modal-trigger');

    modalTrigger.forEach(function(trigger) {
      trigger.addEventListener('click', function(event) {
        const target = this.getAttribute('href').substr(1);
        console.log(target);
        const modalWindow = document.getElementById(target);
        console.log(modalWindow);
        closeModals();
        if (modalWindow.classList) {
          modalWindow.classList.add('open');
        }
        event.preventDefault();
      });
    });
  }
  function closeModals() {
    let modalTrigger = document.querySelectorAll('.modal');
    console.log(modalTrigger);
    modalTrigger.forEach(function(trigger) {
      trigger.classList.remove('open');
    });
  }
  closeModals();
  openModal();
};
