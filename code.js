function execute_code(){
  console.log('--- init code execution ---');
  
  function alert_one(){ alert('one'); }
  function alert_two(){ alert('two'); }
  
  var buyBtn = document.getElementsByClassName('product-form__submit');

  for ( const buy_btn in buyBtn){
    buy_btn.addEventListener('click', function (e) {
      alert('123')
    });
  }

}

execute_code();
