$(document).ready(function () {
    // Init
    $('.image-section').hide();
    $('.loader').hide();
    $('#result').hide();

    // Upload Preview
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
                $('#imagePreview').hide();
                $('#imagePreview').fadeIn(650);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#imageUpload").change(function () {
        $('.image-section').show();
        $('#btn-predict').show();
        $('#result').text('');
        $('#result').hide();
        readURL(this);
    });

    // Predict
    $('#btn-predict').click(function () {
        var form_data = new FormData($('#upload-file')[0]);

        // Show loading animation
        $(this).hide();
        $('.loader').show();

        // Make prediction by calling api /predict
        $.ajax({
            type: 'POST',
            url: '/withered_model/predict',
            data: form_data,
            contentType: false,
            cache: false,
            processData: false,
            async: true,
            success: function (data) {
                // Get and display the result
                $('.loader').hide();
                $('#result').fadeIn(600);
                $('#result').text(' Result:  ' + data);
                
                // $('#solution-div').text("SOLUTION:\n")
                if(data === 'Low Withered - Below Best'){
                  //  alert('Disease is Sigatoka');
                     $('#solution-div').text("ABOUT:\n");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("\n<br/>");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("SYMPTOMS:\n");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("\n<br/>");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("SOLUTION:\n");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("\n<br/>");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("REFERENCE LINK: ");
                     //$('#solution-div').attr('style','color:red;');
                }else if(data === 'Low Withered - Best'){
                     $('#solution-div').text("ABOUT:\n");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("\n<br/>");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("SYMPTOMS:\n");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("\n<br/>");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("SOLUTION:\n");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("\n<br/>");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("REFERENCE LINK: ");
                     //$('#solution-div').attr('style','color:green;');
                }else if(data === 'Low Withered - Poor'){
                     $('#solution-div').text("ABOUT:\n");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("\n<br/>");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("SYMPTOMS:\n");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("\n<br/>");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("SOLUTION:\n");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("n<br/>");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("REFERENCE LINK: );
                     //$('#solution-div').attr('style','color:yellow;');
                }
                
                console.log('Success!');
            },
        });
    });

});
