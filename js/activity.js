$(document).ready(function() {
    $("table tbody td").each(function() {
        if (!$(this).text().includes("Not Available") && $(this).index() !== 0) {
            $(this).css("cursor", "pointer");
            $(this).on("click", function() {
                $(this).toggleClass("selected");
            });
        }
    });
});
