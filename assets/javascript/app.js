let tollTallyApp = {

    initialize : function() {
        $(document).ready(function() {
            $("#submitButton").click(function(){
                console.log($("#originInput").val().trim());
                console.log($("#destinationInput").val().trim());
                console.log($("#frequencyInput").val().trim());
                console.log($("#durationInput").val().trim());
                $("#inputContainer").hide();
                $("calculationContainer").show();
            }); 
        });
    },

    // origin input field related methods
    originInput : function() {
    // data validation / autocomplete for origin input
var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://google-maps-geocoding.p.rapidapi.com/geocode/json?language=en&latlng=40.714224%2C-73.96145",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "google-maps-geocoding.p.rapidapi.com",
            "x-rapidapi-key": "444b6fd3a1msh0e2e78d680fa660p1a1552jsn2fb3561232f6"
        }
    }
    
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
    
    },
    },

    // destination input field related methods
    destinationInput : function() {
    // data validation / autocomplete for destination input

    },

    // frequency input field related methods
    frequencyInput : function() {
    // JQueryUI dropdown for frequency

    },

    // total per input field related methods
    totalPer : function() {
    // JQueryUI calendar for for how long the frequency will occur

    },

    // status bar that shows progress of calculation
    statusBar : function() {
    // JQueryUI status bar while app is calculating
var counter_list = [10,10000,10000];
    var str_counter_0 = counter_list[0];
    var str_counter_1 = counter_list[1];
    var str_counter_2 = counter_list[2];
    var display_str = "";
    var display_div = document.getElementById("display_div_id");

  function incrementCount(current_count){
    setInterval(function(){
      // clear count
      while (display_div.hasChildNodes()) {
          display_div.removeChild(display_div.lastChild);
      }
      str_counter_0++;
      if (str_counter_0 > 99) {
        str_counter_0 = 0; // reset count
        str_counter_1++;    // increase next count
      }
      if(str_counter_1>99999){
        str_counter_2++;
      }
      display_str = str_counter_2.toString() + str_counter_1.toString() + str_counter_0.toString();
      for (var i = 0; i < display_str.length; i++) {
        var new_span = document.createElement('span');
        new_span.className = 'num_tiles';
        new_span.innerText = display_str[i];
        display_div.appendChild(new_span);
      }
    },1000);
  }
</script>
    },


}

tollTallyApp.initialize();








