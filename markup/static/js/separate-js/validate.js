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
                        $(".thanx-open").trigger("click");
                        
                        
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
                        $(".thanx-open").trigger("click");
                        
                        
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
                        $(".subscribe-open").trigger("click");
                        
                        
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
                        $(".thanx-open").trigger("click");
                        
                        
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