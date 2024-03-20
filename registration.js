document.addEventListener("DOMContentLoaded", function() 
{
    var loginLink = document.querySelector('.login a');
    loginLink.addEventListener('click', function(event) 
    {
        event.preventDefault();
        window.location.href = 'login.html';
    });
});
