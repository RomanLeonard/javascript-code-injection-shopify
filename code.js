function execute_code(){
  console.log('--- init code execution ---');
  
  function alert_one(){ alert('one'); }
  function alert_two(){ alert('two'); }
   
  document.guerySelectors(".product-form__submit").addEventListener('click', function(e){
    alert('123')
  });

}

execute_code();
