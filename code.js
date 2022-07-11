function execute_code(){
  console.log('--- init code execution ---');
  
  function alert_one(){ alert('one'); }
  function alert_two(){ alert('two'); }
  
  $('.product-form__submit').on('click', function(){
    alert('123')
  });

}

execute_code();
