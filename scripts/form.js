var resume_form = {};
resume_form.load = function(doc){
        $(".control_holder").on('click', function(e){
            $('form').toggleClass('editing');
            $('input').removeAttr('disabled');
        })

};
$('button.cancel').on('click', function(event){
    event.preventDefault();
    $('form#contact_info')[0].reset();
    $('form').toggleClass('editing');
    $('input').attr('disabled','disabled');
    return false
});
$('form').submit(function(event){
    event.preventDefault();
    var formData = $('form').serialize();
    $('form').toggleClass('editing');
    $('input').attr('disabled','disabled');
    $.ajax({
        type: 'POST',
        url: $(form).attr('action'),
        data: formData
    }).done(function(response){
        //show the success message
        $('.message_area.success').text("You successfully updated the information");
        $('.message_area.success').toggleClass('show_message').delay("1000").queue(function(){
            $(this).toggleClass("show_message").dequeue();
        });

    }).fail(function(data){
        if (data.responseText !== '') {
            $('.message_area.error').text(data.responseText);
        } else {
            $('.message_area.error').text('Oops! An error occured and your message could not be sent.');
        }
        $('.message_area.error').text = "You successfully updated the information";
        $('.message_area.error').toggleClass('show_message').delay("1000").queue(function(){
            $(this).toggleClass("show_message").dequeue();
        });

    })
})
