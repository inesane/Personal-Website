// Example JavaScript to collect visitor information and send it to the server
function getVisitorInfo() {
    var visitorInfo = {
        ipAddress: '', // IP address will be filled by the server-side code
        browser: navigator.userAgent,
        referringPage: document.referrer,
        // Add more information as needed
    };

    // Function to get IP address and location information
    $.getJSON('https://api.ipify.org?format=json', function(data) {
        visitorInfo.ipAddress = data.ip;

        $.ajax({
            type: "POST",
            url: "store_visitor_info.php",
            data: visitorInfo,
            success: function(response) {
                console.log("Visitor information sent successfully.");
            },
            error: function(err) {
                console.error("Error sending visitor information: ", err);
            }
        });
    });
}

// Call the function when the page loads
$(document).ready(function() {
    getVisitorInfo();
});
