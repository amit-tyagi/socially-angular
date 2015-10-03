Meteor.startup(function() {
	Parties.remove();
	var parties = [
		{
			'name': 'Dubstep-Free Zone',
			'description': 'Can we please just for an evening not listen to dubstep.'
		},
		{
			'name': 'All dubstep all the time',
			'description': 'Get it on!'
		},
		{
			'name': 'Savage Lounging',
			'description': 'Leisure suit required. And only firecrest manners.'
		}
	];
	for(var i = 0; i < parties.length; i++) {
		Parties.insert(parties[i]);
	}
});