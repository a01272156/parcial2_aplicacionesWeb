import DS from 'ember-data';

export default DS.Model.extend({
	nombre: DS.attr('string'),
	fecha: DS.attr('string'),
	questions: DS.hasMany('question')

});
