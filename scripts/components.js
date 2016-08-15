$('document').ready(function() {
    $('#close-message').click(function() {
        closeMessage();
    });
})

function closeMessage() {
    $('.message-container').hide();
}

function openMessage(type, message) {
    $('.message-container').removeClass('fail')
    $('.message-container').removeClass('success')
    $('.message-container').addClass(type)
    $('.message-container span').text(message)
    $('.message-container').show();
}
