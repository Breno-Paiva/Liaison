
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('index-get-weather', 'helper:index-get-weather', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{index-get-weather inputValue}}`);

  assert.equal(this.$().text().trim(), '1234');
});

