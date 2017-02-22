// This is where it all goes :)
window.onload = function() {
    var mainHeader = document.getElementById('mas-main-header');

    var body = document.getElementById('main-content');
    body.setAttribute('style', "margin-top: " + mainHeader.offsetHeight + "px;")
}