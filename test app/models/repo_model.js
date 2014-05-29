/**
 * Created by akim1 on 5/29/14.
 */
'use strict';

var Ember = require('ember');
require('ember-model');

var Repo = Ember.Model.extend({
  id: Ember.attr(),
  name: DS.attr('string'),
  image: DS.attr('string'),
  created_at: DS.attr('string'),
  commits: DS.attr('number'),
  last_pushed: DS.attr('string'),
  git_url: DS.attr('string')
});

module.exports = Repo;