---
layout: page
group: get-started
title: Sign up for a free Snowplow trial
shortened-link: Free trial
weight: 2
---

# Free one month Snowplow trial of the Managed Service Batch

See what becomes possible when you have direct access to your granular, event-level data.

## How it works

* We provide you with a tag to integrate the Javascript tracker (or another tracker of your choice) in your website, mobile app or application
* You integrate the appropriate Snowplow tracker
* We provide you with credentials so you can access your data in our own Amazon Redshift cluster
* You plug in the analysis tools of your choice so you can see what is possible with your data
* We can also, under certain circumstances, offer you a [Looker] [looker] trial on top of your Snowplow data, so you can see how the combination of Snowplow and Looker gives business users unprecedented flexibility to explore and mine your event-level data.
* If after your trial you decide to sign up to the Managed Service, we will migrate your data over for you for no additional cost.

## Sign up today

<div id="trial-form">
	<form class="form-horizontal">
		<div class="form-group" id="groupName">
			<label class="control-label col-xs-2" for="inputName">Name</label>
			<div class="col-xs-10" id="controlsName">
				<input type="text" class="form-control" id="inputName" placeholder="Name">
			</div>
		</div>
		<div class="form-group" id="groupEmail">
			<label class="control-label col-xs-2" for="inputEmail">Email</label>
			<div class="col-xs-10" id="controlsEmail">
				<input type="text" class="form-control" id="inputEmail" placeholder="Email">
			</div>
		</div>
		<div class="form-group" id="groupCompany">
			<label class="control-label col-xs-2" for="inputCompany">Company</label>
			<div class="col-xs-10" id="controlsCompany">
				<input type="text" class="form-control" id="inputCompany" placeholder="Company">
			</div>
		</div>
		<div class="form-group" id="groupEventsPerMonth">
			<label class="control-label col-xs-2" for="inputEventsPerMonth">Events per month</label>
			<div class="col-xs-10" id="controlsEventsPerMonth">
				<select id="inputEventsPerMonth">
					<option>&lt; 1 million</option>
					<option>1 - 10 million</option>
					<option>10 - 100 million</option>
					<option>100 - 1 billion</option>
					<option>1 billion +</option>
				</select>
			</div>
		</div>
		<div class="form-group">
			<div class="col-xs-offset-2 col-xs-10">
				<button type="submit" class="btn btn-success btn-primary" id="submitFreeTrialButton">Sign up</button>
			</div>
		</div>
	</form>
</div>

## Questions?

Then [talk to a member of the Snowplow team][contact].



[looker]: http://looker.com/
[contact]: /about/contact.html
