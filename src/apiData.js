var data = [];

function teste() {
    $.ajax({
        type: 'GET',
        url: 'https://nodetest-ybpt.onrender.com/',
        Headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Accept, X-Requested-With'
        },
        success: function(response) {
            response.forEach(element => {
                data.push(element);
            })
            console.log(response);
        },
        error: function(textStatus, errorThrown) {
            console.error('Error:', textStatus, errorThrown);
        }
    });
}

setTimeout(teste, 1000);

export default data;