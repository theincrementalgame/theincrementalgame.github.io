function startgame(){
    data = {
        started: true,
        currency: 0
    }
    save(data);
    loadprogress();
}
function loadprogress(){
    data = load()
    var x = document.getElementById("startgame");
    if (data.started == true) {
        x.style.display = "none"
    }
}