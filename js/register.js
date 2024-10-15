$(function() {
    $("#error-msg").hide();
    $('#signup').click(function(e) {


        e.preventDefault(); 


        var data = $('#signup-form').serialize(); 
        alert('called ');
       
        $.ajax({
            url: 'http://localhost:9000/php/register.php',
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

                errorMessage += '<div>' + res.msg + '</div>';


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