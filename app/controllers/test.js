import Ember from 'ember';

export default Ember.Controller.extend({
	tests:
	Ember.computed('model.[]',function(){
		return this.store.findAll('test');
		// return this.store.findAll('test'); 
	
})
}); 