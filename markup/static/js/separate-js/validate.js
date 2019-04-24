$(document).ready(function() {
    $('.form-query').each(function() {
        var it = $(this);
         it.validate({
			rules: {
				name: {
                    required: true,
                },
                phone: {
                    required: true,
                    minlength: 17,
                    maxlength: 17,
                }
			},

			errorPlacement: function (error, element) {
			},

			submitHandler: function() {
				$.ajax({
					success: function(){
                        $(".callPopup.thanx-open").trigger("click");
                        $('body').css('overflow-y', 'hidden');
                        
                        
                        //THE LAST LINES
                        $(".popup").find("input, textarea").val('');
                        it.find("input, textarea").val("");
                        it.find("input, textarea").removeClass("valid");
					}
				});
			},  
        });
    });
    $('.form-callback').each(function() {
        var it = $(this);
         it.validate({
			rules: {
				name: {
                    required: true,
                },
                phone: {
                    required: true,
                    minlength: 17,
                    maxlength: 17,
                }
			},

			errorPlacement: function (error, element) {
			},

			submitHandler: function() {
				$.ajax({
					success: function(){
                        $(".callPopup.thanx-open").trigger("click");
                        $('body').css('overflow-y', 'hidden');
                        //THE LAST LINES
                        $(".popup").find("input, textarea").val('');
                        it.find("input, textarea").val("");
                        it.find("input, textarea").removeClass("valid");
					}
				});
			},  
        });
    });
    $('.subscribe-form').each(function() {
        var it = $(this);
         it.validate({
			rules: {
				email: {
                    required: true,
                    email: true,
                },
			},

			errorPlacement: function (error, element) {
			},

			submitHandler: function() {
				$.ajax({
					success: function(){
                        $(".callPopup.subscribe-open").trigger("click");
                        $('body').css('overflow-y', 'hidden');
                        
                        
                        //THE LAST LINES
                        $(".popup").find("input, textarea").val('');
                        it.find("input, textarea").val("");
                        it.find("input, textarea").removeClass("valid");
					}
				});
			},  
        });
    });
    $('.calc-form').each(function() {
        var it = $(this);
         it.validate({
			rules: {
				name: {
                    required: true,
                },
                phone: {
                    required: true,
                    minlength: 17,
                    maxlength: 17,
                }
			},

			errorPlacement: function (error, element) {
			},

			submitHandler: function() {
				$.ajax({
					success: function(){
                        $(".callPopup.thanx-open").trigger("click");
                        
                        //THE LAST LINES
                        $(".popup").find("input, textarea").val('');
                        it.find("input, textarea").val("");
                        it.find("input, textarea").removeClass("valid");
					}
				});
			},  
        });
    });
});