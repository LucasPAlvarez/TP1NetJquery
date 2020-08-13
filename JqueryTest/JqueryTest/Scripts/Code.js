var i = 0;
var name = "diap_";

$(document).ready(function () {
    console.info("ready2");

    $("#arrowLeft").click(function () {
        if (i - 1 >= 0) {


            $("#" + name + i).show("slide", { direction: "left" }, 1000); 
            i -= 1;
            //$("#" + name + i).show();
            console.info("left_" + i);
            
        }
    });

    $("#arrowRight").click(function () {
        if (i + 1 < 7) {
            i += 1;
            $("#" + name + i).hide("slide", { direction: "left" }, 1000); 
            //$("#" + name + i).hide();
            console.info("right_" + i);
        }
    });
});



