// Business Logic:

function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1/number2;
}

// User interface logic:

$(document).ready(function() {
    $("form#add").submit(function(event) {
      event.preventDefault();
      const number1 = parseFloat($("#add1").val());
      const number2 = parseFloat($("#add2").val());
      
      const result = add(number1, number2);
      $("#output").text(result);
    });

      $("form#subtract").submit(function(event) {
        event.preventDefault();
        const number1 = parseFloat($("#subtract1").val());
        const number2 = parseFloat($("#subtract2").val());
        
        const result = subtract(number1, number2);
        $("#output").text(result);

      });

        $("form#multiply").submit(function(event) {
          event.preventDefault();
          const number1 = parseFloat($("#multiply1").val());
          const number2 = parseFloat($("#multiply2").val());
          
          const result = multiply(number1, number2);
          $("#output").text(result);
        });

          $("form#divide").submit(function(event) {
            event.preventDefault();
            const number1 = parseFloat($("#divide1").val());
            const number2 = parseFloat($("#divide2").val());
            
            const result = divide(number1, number2);
            $("#output").text(result);
          });
  });


