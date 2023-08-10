$(document).ready(function(){
    $("#sendForm").validate({
        rules:{
            input1:{
                required:true,
                minlength:4
            }

        }
    })
})
