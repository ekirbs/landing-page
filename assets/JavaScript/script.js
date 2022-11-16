let input = document.getElementById("email");
    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("send-button").click();
        }
    });