$(function() {
  $( "#boton-entrar" ).click(function() {
    $( "#boton-entrar" ).addClass( "onclic", 250, validate);
  });

  function validate() {
    setTimeout(function() {
      $( "#boton-entrar" ).removeClass( "onclic" );
      $( "#boton-entrar" ).addClass( "validate", 450, callback );
    }, 2250 );
  }
    function callback() {
      setTimeout(function() {
        $( "#boton-entrar" ).removeClass( "validate" );
      }, 1250 );
    }
  });