Package.describe({
	name: 'templ:tools',
	version: '0.0.0',
	summary: 'Tools to work with templates.',
	git: 'https://github.com/meteor-templ/tools',
	documentation: 'README.md'
});

Package.onUse(function(api) {
	api.versionsFrom('1.2.1');
	api.use('mongo');
	api.use('ecmascript');
	api.use('random');
	
	api.use('peerlibrary:blaze-components@0.18.0');
	api.use('peerlibrary:reactive-field@0.1.0');
	
	api.addFiles('Templ.html', 'client');
	api.addFiles('Templ.js', 'client');
	
	api.export('Templ', 'client');
});