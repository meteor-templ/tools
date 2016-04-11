Templ = {};

Templ.onCreated = class extends BlazeComponent {
	onCreated() {
		super.onCreated();
		this.isCreated = new ReactiveField(true);
	};
	
}

Templ.onCreated.register('Templ.onCreated');