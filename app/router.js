import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('test',{path: '/'});
  this.route('test-details', {path: 'test-detail/:test'});
});

export default Router;
