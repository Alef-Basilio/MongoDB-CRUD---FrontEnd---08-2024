function showAllData() {
    const dataShow = document.createElement("div");
    const div = document.createElement("div");
    const updateBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");
    const span = document.createElement("span");

    dataShow.setAttribute("class", "dataShow");
    div.setAttribute("class", "buttons");
    updateBtn.setAttribute("class", "update");
    deleteBtn.setAttribute("class", "delete");
    span.setAttribute("class", "getText");

    $.ajax({
        type: "GET",
        url: "https://nodeback-4zha.onrender.com/",
        Headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        success: function(response) {
            if (response.length != document.getElementById("allData").childElementCount - 1) {
                for (let i = 0; i < response.length; i++) {
                    const dataShow = document.createElement("div");
                    const div = document.createElement("div");
                    const updateBtn = document.createElement("button");
                    const deleteBtn = document.createElement("button");
                    const span = document.createElement("span");
            
                    dataShow.setAttribute("id", response[i]._id);
                    div.setAttribute("class", "buttons");
                    updateBtn.setAttribute("class", "update");
                    deleteBtn.setAttribute("class", "delete");
                    span.setAttribute("class", "getText");
            
                    updateBtn.innerHTML = "U";
                    deleteBtn.innerHTML = "D";
            
                    span.innerHTML = response[i].text;

                    div.appendChild(updateBtn);
                    div.appendChild(deleteBtn);
                    dataShow.appendChild(div);
                    dataShow.appendChild(span);
                    document.getElementById("allData").appendChild(dataShow);
                }
            }
        },
        error: function(textStatus, errorThrown) {
            console.error("Error:", textStatus, errorThrown);
        }
    });
}

showAllData();
setInterval(showAllData, 1000);