import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service('store'),
	actions: {
    save(){
    	let test = this.get('test')
    	this.set('test', test);
      	test.save();
      	
    	 }
   	 }
});