$(function() {
    // Info log
    console.info("Info: Giga Pet loaded for " + pet_info.name);
    console.log("Log: Current pet info object ", pet_info);
})

    // Warning
    console.warn("Warning: energy is " + pet_info.energy + ", Momo needs sleep");

    // Error
    console.error("Error: Failure while saving")

    console.group("Pet stats");
    console.log("Name: " + pet_info.name);
    console.log("Weight: " + pet_info.weight);
    console.log("Happiness: " + pet_info.happiness);
    console.groupEnd();

    $('.debug-404').click(function(){
        $('<img>').attr('src', 'images/missing-toy.ping').attr('alt', 'missing toy').appendTo('.debug-panel');
        fetch('api/missing-pet-data.json').then(function(response) {
            console.log("Fetch finished with status: " + response.status);
        });
    });

    // TypeError: Reads undefined propertoes
    $('debug-typeerror').click(function) {
        var favoriteToy;               // undefined
        console.log(favoriteToy.name); // Throws typeError
    };

    // Violation handler
    document.querySelector('.debug-violation').addEventListener('click', function() {
        var start = Date.now();
        while (Date.now() - start < 400) {
        }
    });