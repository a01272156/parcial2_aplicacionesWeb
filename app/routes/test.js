import Ember from 'ember';

export default Ember.Route.extend({
	// model(){
	// 	return this.store.findAll('test');
	// }
	beforeModel(){
    
	},
	model(){
    let test = this.get('store').createRecord('test', {});
    return test;

    }
});
