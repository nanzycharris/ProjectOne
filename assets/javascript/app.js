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

    },


}

tollTallyApp.initialize();








