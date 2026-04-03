$(document).ready(function () {

        const visitorName = prompt("Hi there! What's your name?");
        if (visitorName && visitorName.trim() !== "") {
            document.getElementById("visitor-name").innerText = visitorName;
        }


    $('.view-more-btn').on('click', function() {

        const description = $(this).closest('.project-item').find('.project-description');
        
        description.toggleClass('show');
        

        if (description.hasClass('show')) {
            $(this).text("Close").addClass('active');
        } else {
            $(this).text("View More").removeClass('active');
        }
    });

    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        
        const nameInput = $('#userName').val();
        const messageInput = $('#userMessage').val();
        const feedback = $('#formFeedback');

        if (nameInput.trim() === "" || messageInput.trim() === "") {
            feedback.html('<span style="color: #ff4d4d;">Please fill out all fields! ❌</span>');
        } else {
            feedback.html('<span style="color: #D4AF37;">Thanks for reaching out, ' + nameInput + '! I\'ll get back to you soon. ✅</span>');
            $(this).trigger("reset"); 
        }
    });


    $('#userName').on('input', function() {
        let currentVal = $(this).val();
        if(currentVal) {
            $('#formFeedback').text('Typing as: ' + currentVal).css('color', '#888');
        } else {
            $('#formFeedback').text('');
        }
    });

});