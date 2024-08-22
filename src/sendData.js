function sendData() {
    $.ajax({
        type: "POST",
        url: "https://nodeback-4zha.onrender.com/",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        data: JSON.stringify({ text: document.getElementById("input").value }),
        success: () => {
            createDataShow();
            document.getElementById("input").value = "";
            window.alert("Data sent successfully");
        },
        error: function(textStatus, errorThrown) {
            console.error("Error:", textStatus, errorThrown);
            window.alert("Error sending data");
        }
    });
}

function createDataShow() {
    const dataShow = document.createElement("div");
    const div = document.createElement("div");
    const updateBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");
    const span = document.createElement("span");

    div.setAttribute("class", "buttons");
    updateBtn.setAttribute("class", "update");
    deleteBtn.setAttribute("class", "delete");
    span.setAttribute("class", "getText");

    updateBtn.innerHTML = "U";
    deleteBtn.innerHTML = "D";
    span.innerHTML = document.getElementById("input").value;

    div.appendChild(updateBtn);
    div.appendChild(deleteBtn);
    dataShow.appendChild(div);
    dataShow.appendChild(span);

    $.ajax({
        type: "GET",
        url: "https://nodeback-4zha.onrender.com/",
        Headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        success: function(response) {
            dataShow.setAttribute("id", response[response.length - 1]._id);
            document.getElementById("allData").appendChild(dataShow);
        },
        error: function(textStatus, errorThrown) {
            console.error("Error:", textStatus, errorThrown);
        }
    });
}

document.getElementById("send").addEventListener("click", () => {
    sendData();
});

document.body.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        sendData();
    }
});