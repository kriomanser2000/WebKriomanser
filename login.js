document.addEventListener("DOMContentLoaded", function() 
{
    var registrationLink = document.querySelector('.register a');
    registrationLink.addEventListener('click', function(event) 
    {
        event.preventDefault();
        window.location.href = 'registration.html';
    });
});
document.addEventListener("DOMContentLoaded", function() 
{
    var passLostLink = document.querySelector('.forget a');
    passLostLink.addEventListener('click', function(event) 
    {
        event.preventDefault();
        window.location.href = '1488.html';
    });
});
