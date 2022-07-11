function execute_code(){
  console.log('--- init code execution ---');
  
  function alert_one(){ alert('one'); }
  function alert_two(){ alert('two'); }
  
  $('body').append('TEXT APPENDED')

  console.log('--- end code execution ---');
}

execute_code();
