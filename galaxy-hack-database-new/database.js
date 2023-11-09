let databaseJson = [];
function fetchDatabase () {
    $.ajax({
        type: "GET",
        url: "database.json",
        success: function (response) {
            databaseJson = JSON.parse(response);
            requestPage(localStorage.getItem("requestedPage"));
        }
    });
}
function requestPage (pageToGet) {
    
}