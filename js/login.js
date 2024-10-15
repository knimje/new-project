$(function() {
    $("#error-msg").hide();
    $('#login').click(function(e) {
        e.preventDefault(); 
        var data = $('#login-form').serialize(); 
        var username = $('#email').val();
      var password = $('#password').val();
       
        $.ajax({
            url: 'http://localhost:9000/php/login.php',
            type: "POST",
            data: data,
        }).done(function(res) {
            res = JSON.parse(res);
            if (res['status']) 
            {
                localStorage.setItem('username', username);  
                localStorage.setItem('password', password);
                location.href = "profile.html"; 
            } else {

                var errorMessage = '';
                console.log(res.msg);
                $.each(res['msg'], function(index, message) {
                    errorMessage += '<div>' + message + '</div>';
                });
             
                $("#error-msg").html(errorMessage);
                $("#error-msg").show(); 
            }
        }).fail(function() {
            alert("error");
        }).always(function() {
            // self.prop('disabled', false);
        });
    });
});