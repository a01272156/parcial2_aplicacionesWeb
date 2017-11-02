"use strict";



define('examen2-parcial/adapters/application', ['exports', 'emberfire/adapters/firebase'], function (exports, _firebase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _firebase.default.extend({});
});
define('examen2-parcial/app', ['exports', 'examen2-parcial/resolver', 'ember-load-initializers', 'examen2-parcial/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('examen2-parcial/components/form-test', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    store: Ember.inject.service('store'),
    actions: {
      save: function save() {
        var test = this.get('test');
        this.set('test', test);
        test.save();
      }
    }
  });
});
define('examen2-parcial/components/new-question', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
define('examen2-parcial/components/old-question', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
define('examen2-parcial/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('examen2-parcial/controllers/option', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({});
});
define('examen2-parcial/controllers/question', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({});
});
define('examen2-parcial/controllers/test', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Controller.extend({
		tests: Ember.computed('model.[]', function () {
			return this.store.findAll('test');
			// return this.store.findAll('test'); 
		})
	});
});
define('examen2-parcial/helpers/app-version', ['exports', 'examen2-parcial/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  var version = _environment.default.APP.version;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (hash.hideSha) {
      return version.match(_regexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_regexp.shaRegExp)[0];
    }

    return version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('examen2-parcial/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('examen2-parcial/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('examen2-parcial/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'examen2-parcial/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _config$APP = _environment.default.APP,
      name = _config$APP.name,
      version = _config$APP.version;
  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('examen2-parcial/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('examen2-parcial/initializers/data-adapter', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('examen2-parcial/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('examen2-parcial/initializers/emberfire', ['exports', 'emberfire/initializers/emberfire'], function (exports, _emberfire) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberfire.default;
});
define('examen2-parcial/initializers/export-application-global', ['exports', 'examen2-parcial/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('examen2-parcial/initializers/injectStore', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('examen2-parcial/initializers/store', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('examen2-parcial/initializers/transforms', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("examen2-parcial/instance-initializers/ember-data", ["exports", "ember-data/instance-initializers/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('examen2-parcial/models/option', ['exports', 'ember-data'], function (exports, _emberData) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = _emberData.default.Model.extend({
		nombre: _emberData.default.attr('string'),
		correcta: _emberData.default.attr('boolean', { defaultValue: false }),
		pregunta: _emberData.default.belongsTo('question')
	});
});
define('examen2-parcial/models/question', ['exports', 'ember-data'], function (exports, _emberData) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = _emberData.default.Model.extend({
		nombre: _emberData.default.attr('string'),
		opciones: _emberData.default.hasMany('option'),
		examen: _emberData.default.belongsTo('test')
	});
});
define('examen2-parcial/models/test', ['exports', 'ember-data'], function (exports, _emberData) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = _emberData.default.Model.extend({
		nombre: _emberData.default.attr('string'),
		fecha: _emberData.default.attr('string'),
		questions: _emberData.default.hasMany('question')

	});
});
define('examen2-parcial/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('examen2-parcial/router', ['exports', 'examen2-parcial/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('test', { path: '/' });
    this.route('test-details', { path: 'test-detail/:test' });
  });

  exports.default = Router;
});
define('examen2-parcial/routes/option', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('examen2-parcial/routes/question', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('examen2-parcial/routes/test-details', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('examen2-parcial/routes/test', ['exports'], function (exports) {
			'use strict';

			Object.defineProperty(exports, "__esModule", {
						value: true
			});
			exports.default = Ember.Route.extend({
						// model(){
						// 	return this.store.findAll('test');
						// }
						beforeModel: function beforeModel() {},
						model: function model() {
									var test = this.get('store').createRecord('test', {});
									return test;
						}
			});
});
define('examen2-parcial/serializers/application', ['exports', 'emberfire/serializers/firebase'], function (exports, _firebase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _firebase.default.extend({});
});
define('examen2-parcial/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define('examen2-parcial/services/firebase-app', ['exports', 'emberfire/services/firebase-app'], function (exports, _firebaseApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _firebaseApp.default;
});
define('examen2-parcial/services/firebase', ['exports', 'emberfire/services/firebase'], function (exports, _firebase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _firebase.default;
});
define("examen2-parcial/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "8VMl8vxr", "block": "{\"statements\":[[0,\"\\n\"],[0,\"\\n\"],[1,[26,[\"outlet\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "examen2-parcial/templates/application.hbs" } });
});
define("examen2-parcial/templates/components/form-test", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Oyzike/A", "block": "{\"statements\":[[11,\"form\",[]],[5,[\"action\"],[[28,[null]],\"save\"],[[\"on\"],[\"submit\"]]],[13],[0,\"\\nnombre\\n\"],[1,[33,[\"input\"],null,[[\"type\",\"value\"],[\"text\",[28,[\"test\",\"nombre\"]]]]],false],[0,\"\\nfecha\\n\"],[1,[33,[\"input\"],null,[[\"type\",\"value\"],[\"date\",[28,[\"test\",\"fecha\"]]]]],false],[0,\"\\n\\n\"],[11,\"button\",[]],[13],[0,\"Guardar Test\"],[14],[0,\"\\n\"],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "examen2-parcial/templates/components/form-test.hbs" } });
});
define("examen2-parcial/templates/components/new-question", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "oulGU0PC", "block": "{\"statements\":[[18,\"default\"],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":false}", "meta": { "moduleName": "examen2-parcial/templates/components/new-question.hbs" } });
});
define("examen2-parcial/templates/components/old-question", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "FBgUIn62", "block": "{\"statements\":[[18,\"default\"],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":false}", "meta": { "moduleName": "examen2-parcial/templates/components/old-question.hbs" } });
});
define("examen2-parcial/templates/option", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "9+DaOBue", "block": "{\"statements\":[],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "examen2-parcial/templates/option.hbs" } });
});
define("examen2-parcial/templates/question", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "RGjQCqTz", "block": "{\"statements\":[],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "examen2-parcial/templates/question.hbs" } });
});
define("examen2-parcial/templates/test-details", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "cnclxXRu", "block": "{\"statements\":[[1,[26,[\"outlet\"]],false],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "examen2-parcial/templates/test-details.hbs" } });
});
define("examen2-parcial/templates/test", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "N5o2Brfb", "block": "{\"statements\":[[11,\"h1\",[]],[13],[0,\"Lista de Examenes\"],[14],[0,\"\\n\\n\"],[1,[33,[\"form-test\"],null,[[\"test\"],[[28,[\"model\"]]]]],false],[0,\"\\n\\n\"],[11,\"ul\",[]],[13],[0,\"\\n\\t\"],[11,\"h3\",[]],[13],[0,\"Lista Examenes\"],[14],[0,\"\\n\"],[6,[\"each\"],[[28,[\"tests\"]]],null,{\"statements\":[[0,\"    \"],[11,\"li\",[]],[13],[0,\"\\n\"],[6,[\"link-to\"],[\"test-details\",[28,[\"test\",\"nombre\"]]],[[\"tagName\"],[\"button\"]],{\"statements\":[[0,\"        \"],[1,[28,[\"test\",\"nombre\"]],false],[0,\"\\n\"]],\"locals\":[]},null],[0,\"    \"],[14],[0,\"\\n\"]],\"locals\":[\"test\"]},null],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "examen2-parcial/templates/test.hbs" } });
});
define('examen2-parcial/torii-providers/firebase', ['exports', 'emberfire/torii-providers/firebase'], function (exports, _firebase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _firebase.default;
});


define('examen2-parcial/config/environment', ['ember'], function(Ember) {
  var prefix = 'examen2-parcial';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("examen2-parcial/app")["default"].create({"name":"examen2-parcial","version":"0.0.0+df2a5648"});
}
//# sourceMappingURL=examen2-parcial.map
