---
layout: page
group: product
title: Sign up for a free trial
shortened-link: Free trial 
description: Sign up for a free Snowplow trial
weight: 4
---

Sign up for a free Snowplow trial below, and see what you can do with your event-level data.

<form class="form-horizontal">
	<div class="control-group">
		<label class="control-label" for="inputName">Name</label>
		<div class="controls">
			<input type="text" id="inputName" placeholder="Name">
		</div>
	</div>
	<div class="control-group">
		<label class="control-label" for="inputEmail">Email</label>
		<div class="controls">
			<input type="email" id="inputEmail" placeholder="Email">
		</div>
	</div>
	<div class="control-group">
		<label class="control-label" for="inputCompany">Company</label>
		<div class="controls">
			<input type="text" id="inputCompany" placeholder="Company">
		</div>
	</div>
	<div class="control-group">
		<label class="control-label" for="inputEventNumber">Number of events per month</label>
		<div class="controls">
			<div class="radio">
				<label>
					<input type="radio" name="inputEventsPerMonth" id="inputEventsPerMonth1" value="< 1 million" checked>
					Less than 1 million
				</label>
			</div>
			<div class="radio">
				<label>
					<input type="radio" name="inputEventsPerMonth" id="inputEventsPerMonth2" value="1 - 10 million">
					1-10 million
				</label>
			</div>
			<div class="radio">
				<label>
					<input type="radio" name="inputEventsPerMonth" id="inputEventsPerMonth3" value="10 - 100 million">
					10-100 million
				</label>
			</div>
			<div class="radio">
				<label>
					<input type="radio" name="inputEventsPerMonth" id="inputEventsPerMonth4" value="100 million - 1 billion">
					100 million - 1 billion
				</label>
			</div>
			<div class="radio">
				<label>
					<input type="radio" name="inputEventsPerMonth" id="inputEventsPerMonth4" value="1 billion +">
					More than 1 billion
				</label>
			</div>
		</div>
	</div>
	<div class="control-group">
		<div class="controls">
			<button type="submit" id="applyForFreeTrialButton" class="btn">Submit</button>
		</div>
	</div>
	<div id="output">
	</div>
</form>