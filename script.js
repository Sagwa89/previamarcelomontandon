document.querySelector('#lead-form').addEventListener('submit', function (event) {
  event.preventDefault();
  const status = this.querySelector('.form-status');
  status.textContent = 'Recebi seus dados. Em breve, você receberá o link para escolher o melhor horário.';
  this.reset();
});
