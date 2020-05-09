function save(state) {
    localStorage.setItem("gamestate", JSON.stringify(state));
  }
function load() {
    return JSON.parse(localStorage.getItem("gamestate"));
}
function reset() {
    var state = {};
    save(state);
    location.reload();
}