function updateData() {
    const updateBtns = document.getElementsByClassName("update");

    for (let i = 0; i < updateBtns.length; i++) {
        updateBtns[i].addEventListener("click", (e) => {
            const target = e.currentTarget;
            const id = target.parentNode.parentNode.id;
    
            $.ajax({
                type: "PUT",
                url: "https://nodeback-4zha.onrender.com/" + id,
                crossDomain: true,
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "*/*",
                    "Access-Control-Allow-Origin": "*",
                },
                data: JSON.stringify({ text: "Updated!" }),
                success: function(response) {
                    target.parentNode.parentNode.children[1].innerHTML = "Updated!";
                    console.log("Record updated successfully:", response);
                },
                error: function(textStatus, errorThrown) {
                    console.error("Error:", textStatus, errorThrown);
                }
            });
        });
    }
}

setInterval(updateData, 1000);