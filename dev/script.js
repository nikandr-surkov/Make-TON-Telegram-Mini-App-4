$(function() {
    // Make components draggable
    $(".component").draggable({
        helper: "clone",
        revert: "invalid"
    });

    // Make drop area droppable
    $("#dropArea").droppable({
        accept: ".component",
        drop: function(event, ui) {
            const component = $(ui.helper).clone().removeClass('ui-draggable-dragging').addClass('dropped');
            $(this).append(component);
        }
    });

    // Craft button functionality
    $("#craftButton").click(function() {
        const droppedComponents = $("#dropArea .component").length;
        const requiredComponents = 6; // Total required components

        if (droppedComponents === requiredComponents) {
            $("#result").text("Congratulations! You've crafted a Card Skimmer!");
        } else {
            $("#result").text("Please drop all required components.");
        }
    });
});
telt