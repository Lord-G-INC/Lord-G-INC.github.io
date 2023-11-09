let modDatabase = [];

function findEntry (entryToFind) {
    return modDatabase.find((currentEntry) => currentEntry["modName"] == entryToFind);
}
function fetchDatabase () {
    $.ajax({
        type: "GET",
        url: "database.json",
        success: function (response) {
            console.log(response);
            modDatabase = JSON.parse(response);
            requestPage(localStorage.getItem("requestedPage"));
        }
    });
}
function requestPage (pageToGet) {
    const page = findEntry(pageToGet);
    var galleryHtml = "";

    $("#modName").text(page.modName);
    $("#authorName").text(page.authorName);
    $("#modRatings").text(page.ratingInfo);
    $("#modLogo").attr("src", page.logoSrc);
    // Formatting through HTML allowed
    $("#modDescription").html(page.description);
    $("#modInformation").html(page.information);
    $("#modDownload").html("<a href=\"" + page.downloadUrl + "\">" + page.versionInfo + "</a>");
    $("#modCredits").html(page.creditInfo);
    $("#modGalleryText").html(page.galleryInfo);

    for (currentImg of page.galleryImages) 
        galleryHtml += "<img src=\"" + currentImg + "\">";
    $("#modGalleryContainer").html(galleryHtml);
}