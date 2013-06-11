$(document).ready(function(){
	$("#submit").click(function(){
		var errors = [];
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		
		var nameVal = $("#mce-FNAME").val();
		if (nameVal == '' || nameVal == 'Your Name*') errors.push('Please enter your name\n');
		
		var emailVal = $("#mce-EMAIL").val();
		if (emailVal == '' || emailVal == 'Your Email*') {
			errors.push('Please enter your email address\n');
		} else if (!emailReg.test(emailVal)) {
			errors.push('Please enter a valid email address\n');
		}
		
		var allVals = [];
		$('#checks :checked').each(function() { allVals.push($(this).val()); });
		if (allVals.length==0) errors.push('Please choose at least one platform');
		allVals = allVals.join(', ');
		
		if (errors.length){
			alert(errors.join(''));
		}	else {
			$.post("signup", { name: nameVal, email: emailVal, platform: allVals }, onSuccess);
		}
		return false;
	});
});

function onSuccess(data, textStatus, jqXHR)
{
	$("#mce-FNAME").val('Your Name');
	$("#mce-EMAIL").val('Your Email');
	alert("Sweet, you're now registered in our beta program!\n\nAnxious to get a link to the download?\nHelp us get the word out by mentioning us @revisions_app and we'll move you to the top of queue!");
}