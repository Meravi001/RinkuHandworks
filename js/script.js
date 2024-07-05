$( document ).ready(function() {

    // hedding top fixed jquery
    if ($(window).scrollTop() >= 50) {
        $(".navbar").addClass("fixed-top");
    }
    $(window).scroll(function(){
        if ($(window).scrollTop() >= 50) {
            $(".navbar").addClass("fixed-top");
        }
        else {
            $(".navbar").removeClass("fixed-top");
        }
    });
    
    // Gallary Plugin Js
    $('.gallery-plugin').lbtLightBox({
        qtd_pagination: 6,
        pagination_width: "160px",
        pagination_height: "160px",
        custom_children: ".box img",
        captions: true,
        captions_selector: ".caption p",
    });

    // click to modal open in jquery
    $('#modalEnquire').modal('show');
    $(document).on("click",".enquirePopup",function() {
        $("#modalEnquire").find(".enquireNowForm").trigger("reset");
        $("#modalEnquire").modal('show');
    });
    
    // Enquire Form validation query

        // validatetion the comment form when it is submitted
        function isEmail(email) {
            var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return regex.test(email);
        }

        $(document).on("click",".submit",function() {
            $(this).closest(".enquireNowForm").find(".error").text("");
            if ($(this).closest(".enquireNowForm").find(".name").val() == "") {
                $(this).closest(".enquireNowForm").find(".name-error").text("Please enter your name");
            }
            if ($(this).closest(".enquireNowForm").find(".number").val() == "") {
                $(this).closest(".enquireNowForm").find(".number-error").text("Please enter your phone number");
            }
            else if($(this).closest(".enquireNowForm").find(".number").length > 0){
                if ($.isNumeric($(this).closest(".enquireNowForm").find(".number").val()) == false) {
                    $(this).closest(".enquireNowForm").find(".number-error").text("Please enter a valid phone number");
                }
            }
            if ($(this).closest(".enquireNowForm").find(".email").val() == "") {
                $(this).closest(".enquireNowForm").find(".email-error").text("Please enter your email address");
            }
            else if($(this).closest(".enquireNowForm").find(".email").length > 0){
                if (isEmail($(this).closest(".enquireNowForm").find(".email").val()) == false) {
                    $(this).closest(".enquireNowForm").find(".email-error").text("Please enter a valid mail id");
                }
            }
            if ($(this).closest(".enquireNowForm").find(".name").val() == "" || $(this).closest(".enquireNowForm").find(".number").val() == "" || $(this).closest(".enquireNowForm").find(".email").val() == "" || $.isNumeric($(this).closest(".enquireNowForm").find(".number").val()) == false || isEmail($(this).closest(".enquireNowForm").find(".email").val()) == false) {
                console.log("yes");
            }
            else {
                console.log("no");
                $(this).closest(".enquireNowForm").submit();
            }
        });



});