$(function() {
    $("#error-msg").hide();
    $('#update').click(function(e) {


        e.preventDefault(); 


        var data = $('#profile-form').serialize(); 

        $.ajax({
            url: 'http://localhost:9000/php/profile.php',
            type: "POST",
            data: data,
        }).done(function(res) {
            res = JSON.parse(res);
            if (res['status']) 
            {
                location.href = "index.html"; 
            } else {

                var errorMessage = '';
                console.log(res.msg);
                $.each(res['msg'], function(index, message) {
                    errorMessage += '<div>' + message + '</div>';
                });
                $("#error-msg").html(errorMessage);
                $("#error-msg").show();
                self.prop('disabled', false);
            }
        }).fail(function() {
            alert("error");
        }).always(function() {
            self.prop('disabled', false);
        });
    });
});