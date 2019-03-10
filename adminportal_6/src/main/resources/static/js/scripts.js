/**
 * 
 */

function checkBillingAddress() {
	if($("#theSameAsShippingAddress").is(":checked")) {
		$(".billingAddress").prop("disabled", true);
	} else {
		$(".billingAddress").prop("disabled", false);
	}
}

function checkPasswordMatch() {
	var password = jQuery("#txtNewPassword").val();
	var confirmPassword = jQuery("#txtConfirmPassword").val();
	
	if(password == "" && confirmPassword =="") {
		jQuery("#checkPasswordMatch").html("");
		jQuery("#updateUserInfoButton").prop('disabled', false);
	} else {
		if(password != confirmPassword) {
			jQuery("#checkPasswordMatch").html("Passwords do not match!");
			jQuery("#updateUserInfoButton").prop('disabled', true);
		} else {
			jQuery("#checkPasswordMatch").html("Passwords match");
			jQuery("#updateUserInfoButton").prop('disabled', false);
		}
	}
}

$(document).ready(function(){
	$(".cartItemQty").on('change', function(){
		var id=this.id;
		
		$('#update-item-'+id).css('display', 'inline-block');
	});
	$("#theSameAsShippingAddress").on('click', checkBillingAddress);
	$("#txtConfirmPassword").keyup(checkPasswordMatch);
	$("#txtNewPassword").keyup(checkPasswordMatch);
});

$(".delete-book").click(function(){
	
	var path = 'remove';
	var id = $(this).attr('id');
	bootbox.confirm({
		size: "small",
		message: "Are you sure, you want to delete this book?",
		callback: function(result){
			//your code here
			if(result){
				$.post(path, {'id': id}, funcion(res){
					location.reload();
				});
			}
		}
	});
});


