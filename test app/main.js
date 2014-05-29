/**
 * Created by akim1 on 5/29/14.
 */
'use strict';

var App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

App.ApplicationAdapter = DS.RESTAdapter.extend({
  host: "https://api.github.com/users/ajkim/repos"
});

App.Store = DS.Store.extend({
  adapter: DS.RESTAdapter.create({
    url: 'https://api.github.com/users/ajkim/repos'
  })
});


App.ReposController = Ember.ArrayController.extend({
    title: function () {
      this.set('name', this.get('name'));
    }.property(),
    avatar_url: function () {
      this.set('image', this.get('owner["avatar_url"]'));
    }.property(),
    created_at: function () {
    this.set('created_at', this.get('created_at'));
    }.property(),
    commits: function () {
      this.set('commits', this.get('size'));
    }.property(),
    last_pushed: function() {
      this.set('last_pushed', this.get('last_pushed'));
    }.property(),
    git_url: function() {
      this.set('git_url', this.get('git_url'));
    }.property(),
    sortedRepos: function () {
    return this.get('pushed_at').sortBy('pushed_at');
  }.property()
});

App.Router.map(function() {
  this.route('about');
  this.resource('names', function() {
    this.resource('name', { path: '/:name_id' });
  });
});

App.AboutController = Ember.Controller.extend({
  name: "Annie",
  photo: "images/gq.jpg"
});

App.ReposRoute = Ember.Route.extend({
  model: function() {
    return App.Name.all();
  }
});

App.NameRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('name', params.repo_id);
  }
});

Name.reopenClass({
  transient: true,
  url: '/https://api.github.com/users/ajkim/repos',
  adapter: Ember.RESTAdapter.create()
});

module.exports = Name;
