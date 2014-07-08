// Note that this file requires: 
//  1. JQuery
//  2. Snowplow

$(function() {

	/*
	 * On clicking the submit button...
	 */
	$("#applyForFreeTrialButton").click(function(){
		// first, clear the output div of any contents
		$('#output').html("");

		// Now let's fetch all the data that has been entered in the form as individual variables
		var name=$('input#inputName').val();
		var email=$('input#inputEmail').val();
		var company=$('input#inputCompany').val();
		var eventsPerMonth=$('input:radio[name=inputEventsPerMonth]:checked').val();

		// Now let's assemble our JSON for sending into Snowplow
		var data = {
			name: name,
			email: email,
			company: company,
			eventsPerMonth: eventsPerMonth
		};

		// If the entry is valid, pass it to the dataLayer and display a thank you message
		if (entryIsValid(name, email, company)) {
			dataLayer.push({
				"event": "trialFormSubmitted", 
				"schema": "iglu://",
				"data": data 
			});
			// Display a thank you message
			$('#output').append($('<span class="label label-success">Success</span><p><strong>Thank you for applying for a free trial!</strong></p><p>A member of the Snowplow team will be in touch with you within one working day</h3>'));
		}

		// Return 'false' because we do not want the page to reload and the thank you message to disappear
		return false;
		
	});

	function entryIsValid(name, email, company){
		if ( name == '' || name == undefined ) {
			alert('Please enter your name');
			return false;
		}

		if ( email == '' || email == undefined ) {
			alert('Please enter your email');
			return false;
		}	

		return true;		
	}
});