var data = [];

function teste() {
        $.ajax({
            type: "GET",
            url: "https://nodeback-4zha.onrender.com/",
            Headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            success: function(response) {
                console.log(response);
            },
            error: function(textStatus, errorThrown) {
                console.error("Error:", textStatus, errorThrown);
            }
        });
}

setTimeout(teste, 1000);

export default data;