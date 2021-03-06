'use strict';

define('examen2-parcial/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/form-test.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/form-test.js should pass ESLint\n\n7:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n8:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n9:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n10:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n11:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n12:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
  });

  QUnit.test('components/new-question.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/new-question.js should pass ESLint\n\n');
  });

  QUnit.test('components/old-question.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/old-question.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/option.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/option.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/question.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/question.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/test.js should pass ESLint\n\n');
  });

  QUnit.test('models/option.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/option.js should pass ESLint\n\n');
  });

  QUnit.test('models/question.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/question.js should pass ESLint\n\n');
  });

  QUnit.test('models/test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/test.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/option.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/option.js should pass ESLint\n\n');
  });

  QUnit.test('routes/question.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/question.js should pass ESLint\n\n');
  });

  QUnit.test('routes/test-details.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/test-details.js should pass ESLint\n\n');
  });

  QUnit.test('routes/test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/test.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application.js should pass ESLint\n\n');
  });
});
define('examen2-parcial/tests/helpers/create-offline-ref', ['exports', 'firebase'], function (exports, _firebase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = createOfflineRef;


  /**
   * Creates an offline firebase reference with optional initial data and url.
   *
   * Be sure to `stubfirebase()` and `unstubfirebase()` in your tests!
   *
   * @param  {!Object} [initialData]
   * @param  {string} [url]
   * @param  {string} [apiKey]
   * @return {!firebase.database.Reference}
   */
  function createOfflineRef(initialData) {
    var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'https://emberfire-tests-2c814.firebaseio.com';
    var apiKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'AIzaSyC9-ndBb1WR05rRF1msVQDV6EBqB752m6o';


    if (!_firebase.default._unStub) {
      throw new Error('Please use stubFirebase() before calling this method');
    }

    var config = {
      apiKey: apiKey,
      authDomain: 'emberfire-tests-2c814.firebaseapp.com',
      databaseURL: url,
      storageBucket: ''
    };

    var app = void 0;

    try {
      app = _firebase.default.app();
    } catch (e) {
      app = _firebase.default.initializeApp(config);
    }

    var ref = app.database().ref();

    app.database().goOffline(); // must be called after the ref is created

    if (initialData) {
      ref.set(initialData);
    }

    return ref;
  }
});
define('examen2-parcial/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
  }
});
define('examen2-parcial/tests/helpers/destroy-firebase-apps', ['exports', 'firebase'], function (exports, _firebase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyFirebaseApps;
  var run = Ember.run;


  /**
   * Destroy all Firebase apps.
   */
  function destroyFirebaseApps() {
    var deletions = _firebase.default.apps.map(function (app) {
      return app.delete();
    });
    Ember.RSVP.all(deletions).then(function () {
      return run(function () {
        // NOOP to delay run loop until the apps are destroyed
      });
    });
  }
});
define('examen2-parcial/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'examen2-parcial/tests/helpers/start-app', 'examen2-parcial/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };

  var resolve = Ember.RSVP.resolve;
});
define('examen2-parcial/tests/helpers/replace-app-ref', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = replaceAppRef;
  /**
   * Updates the supplied app adapter's Firebase reference.
   *
   * @param  {!Ember.Application} app
   * @param  {!firebase.database.Reference} ref
   * @param  {string} [model]  The model, if overriding a model specific adapter
   */
  function replaceAppRef(app, ref) {
    var model = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'application';

    app.register('service:firebaseMock', ref, { instantiate: false, singleton: true });
    app.inject('adapter:firebase', 'firebase', 'service:firebaseMock');
    app.inject('adapter:' + model, 'firebase', 'service:firebaseMock');
  }
});
define('examen2-parcial/tests/helpers/replace-firebase-app-service', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = replaceFirebaseAppService;
  /**
   * Replaces the `firebaseApp` service with your own using injection overrides.
   *
   * This is usually not needed in test modules, where you can re-register over
   * existing names in the registry, but in acceptance tests, some registry/inject
   * magic is needed.
   *
   * @param  {!Ember.Application} app
   * @param  {!Object} newService
   */
  function replaceFirebaseAppService(app, newService) {
    app.register('service:firebaseAppMock', newService, { instantiate: false, singleton: true });
    app.inject('torii-provider:firebase', 'firebaseApp', 'service:firebaseAppMock');
    app.inject('torii-adapter:firebase', 'firebaseApp', 'service:firebaseAppMock');
  }
});
define('examen2-parcial/tests/helpers/resolver', ['exports', 'examen2-parcial/resolver', 'examen2-parcial/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('examen2-parcial/tests/helpers/start-app', ['exports', 'examen2-parcial/app', 'examen2-parcial/config/environment'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = Ember.merge({}, _environment.default.APP);
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('examen2-parcial/tests/helpers/stub-firebase', ['exports', 'firebase'], function (exports, _firebase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = stubFirebase;


  /**
   * When a reference is in offline mode it will not call any callbacks
   * until it goes online and resyncs. The ref will have already
   * updated its internal cache with the changed values so we shortcut
   * the process and call the supplied callbacks immediately (asynchronously).
   */
  function stubFirebase() {
    // check for existing stubbing
    if (!_firebase.default._unStub) {
      var originalSet = _firebase.default.database.Reference.prototype.set;
      var originalUpdate = _firebase.default.database.Reference.prototype.update;
      var originalRemove = _firebase.default.database.Reference.prototype.remove;

      _firebase.default._unStub = function () {
        _firebase.default.database.Reference.prototype.set = originalSet;
        _firebase.default.database.Reference.prototype.update = originalUpdate;
        _firebase.default.database.Reference.prototype.remove = originalRemove;
      };

      _firebase.default.database.Reference.prototype.set = function (data, cb) {
        originalSet.call(this, data);
        if (typeof cb === 'function') {
          setTimeout(cb, 0);
        }
      };

      _firebase.default.database.Reference.prototype.update = function (data, cb) {
        originalUpdate.call(this, data);
        if (typeof cb === 'function') {
          setTimeout(cb, 0);
        }
      };

      _firebase.default.database.Reference.prototype.remove = function (cb) {
        originalRemove.call(this);
        if (typeof cb === 'function') {
          setTimeout(cb, 0);
        }
      };
    }
  }
});
define('examen2-parcial/tests/helpers/unstub-firebase', ['exports', 'firebase'], function (exports, _firebase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = unstubFirebase;
  function unstubFirebase() {
    if (typeof _firebase.default._unStub === 'function') {
      _firebase.default._unStub();
      delete _firebase.default._unStub;
    }
  }
});
define('examen2-parcial/tests/integration/components/new-question-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('new-question', 'Integration | Component | new question', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "Ea0sQGHm",
      "block": "{\"statements\":[[1,[26,[\"new-question\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "dpWRxUqX",
      "block": "{\"statements\":[[0,\"\\n\"],[6,[\"new-question\"],null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"locals\":[]},null],[0,\"  \"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('examen2-parcial/tests/integration/components/old-question-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('old-question', 'Integration | Component | old question', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "mITwbMEN",
      "block": "{\"statements\":[[1,[26,[\"old-question\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "b9PUepv4",
      "block": "{\"statements\":[[0,\"\\n\"],[6,[\"old-question\"],null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"locals\":[]},null],[0,\"  \"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('examen2-parcial/tests/test-helper', ['examen2-parcial/tests/helpers/resolver', 'ember-qunit', 'ember-cli-qunit'], function (_resolver, _emberQunit, _emberCliQunit) {
  'use strict';

  (0, _emberQunit.setResolver)(_resolver.default);
  (0, _emberCliQunit.start)();
});
define('examen2-parcial/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/new-question-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/new-question-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/old-question-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/old-question-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/adapters/adapter-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/adapter-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/option-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/option-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/question-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/question-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/test-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/test-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/option-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/option-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/question-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/question-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/test-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/test-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/option-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/option-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/question-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/question-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/test-details-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/test-details-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/test-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/test-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/serializer-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/serializer-test.js should pass ESLint\n\n');
  });
});
define('examen2-parcial/tests/unit/adapters/adapter-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('adapter:adapter', 'Unit | Adapter | adapter', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('examen2-parcial/tests/unit/controllers/option-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:option', 'Unit | Controller | option', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('examen2-parcial/tests/unit/controllers/question-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:question', 'Unit | Controller | question', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('examen2-parcial/tests/unit/controllers/test-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:test', 'Unit | Controller | test', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('examen2-parcial/tests/unit/models/option-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('option', 'Unit | Model | option', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('examen2-parcial/tests/unit/models/question-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('question', 'Unit | Model | question', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('examen2-parcial/tests/unit/models/test-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('test', 'Unit | Model | test', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('examen2-parcial/tests/unit/routes/option-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:option', 'Unit | Route | option', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('examen2-parcial/tests/unit/routes/question-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:question', 'Unit | Route | question', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('examen2-parcial/tests/unit/routes/test-details-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:test-details', 'Unit | Route | test details', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('examen2-parcial/tests/unit/routes/test-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:test', 'Unit | Route | test', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('examen2-parcial/tests/unit/serializers/application-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('application', 'Unit | Serializer | application', {
    // Specify the other units that are required for this test.
    needs: ['serializer:application']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('examen2-parcial/tests/unit/serializers/serializer-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('serializer', 'Unit | Serializer | serializer', {
    // Specify the other units that are required for this test.
    needs: ['serializer:serializer']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
require('examen2-parcial/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
