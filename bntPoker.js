// POP UP CONTACT FORM //

$(function () {
    function after_form_submitted(data) {
        if (data.result == 'success') {
            $('form#reused_form').hide();
            $('#success_message').show();
            $('#error_message').hide();
        }
        else {
            $('#error_message').append('<ul></ul>');

            jQuery.each(data.errors, function (key, val) {
                $('#error_message ul').append(' <li> ' + key + ' : ' + val + ' </li> ');
            });
            $('#success_message').hide();
            $('#error_message').show();

            //reverse the response on the button
            $('button[type="button"]', $form).each(function () {
                $btn = $(this);
                label = $btn.prop('orig_label');
                if (label) {
                    $btn.prop('type', 'submit');
                    $btn.text(label);
                    $btn.prop('orig_label', '');
                }
            });

        }//else
    }

    $('#reused_form').submit(function (e) {
        e.preventDefault();

        $form = $(this);
        //show some response on the button
        $('button[type="submit"]', $form).each(function () {
            $btn = $(this);
            $btn.prop('type', 'button');
            $btn.prop('orig_label', $btn.text());
            $btn.text('Sending ...');
        });


        $.ajax({
            type: "POST",
            url: 'handler.php',
            data: $form.serialize(),
            success: after_form_submitted,
            dataType: 'json'
        });

    });
});



// EMAIL VALIDATION //

function validateEmail($email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test($email);
}

function validateEmail(mailList) {
    var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    if (filter.test(mailList)) {
        return true;
    }
    else {
        return false;


    }
}

// MAILING LIST MYSQL // 

$(document).ready(function (e) {
    $('#sign-up').click(function () {
        
        var mailList = $('#exampleInputEmail2').val();
        if ($("#exampleInputEmail2").val() == "") {
            $("#exampleInputEmail2").css("border", "3px solid red");
         
        }

        if (validateEmail(mailList)) {
            $("#exampleInputEmail2").css("border", "none");
            $(".mailList,.knowMore").css("display", "none");
            $("#success").css("display", "block");
            $.ajax({
                url:'MailingList.php',
                type:'post',
                data:$('#myForm').serialize(),
                success:function(){
                   ;
                }
            });
      
  
            
        }
        else {
            $("#exampleInputEmail2").css("border", "3px solid #DD3D3D");
            $(".fa-times").css("display", "block");
            $(".tool").css("display", "block");

            e.preventDefault();
        }
    });
}
)


// TOOL TIP //

$(document).ready(function () {

    $('.tool').css('display', "none");


})


//  CANCEL SCROLL OPTION WHEN FORM IS OPEN //

$(document).ready(function(){
    $("#contactUs").click(function(){
       
       $('html').css("overflow-y","hidden");
        $("#myModal").modal({
            backdrop: 'static',
            keyboard: false
        });
    });
});

$(document).ready(function(){

$("#close").click (function(){

$('html').css("overflow-y","visible");
});
});

// RESET FORM //

function reset() {
    $("#reused_form,#myModal").trigger("reset");

}

// SCROLL TO TOP ON REFRESH //

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}