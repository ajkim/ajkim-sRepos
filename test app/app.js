'use strict';
var File = require('package.json');


var App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

//sets up the App REST properties

App.ApplicationAdapter = DS.RESTAdapter.extend({
  header: {
    "Accept": "application/vnd.github.v3+json"
  },
  namespace: "users/ajkim",
  host: "https://api.github.com"
});

App.Store = DS.Store.extend({
  adapter: DS.RESTAdapter.create({
    url: 'https://api.github.com/users/ajkim/repos'
  })
});

//defines the models to be used


var attr = DS.attr,
  hasMany = DS.hasMany,
  belongsTo = DS.belongsTo;

App.Repo = DS.Model.extend({
  for(var i = 0; i < )
  name: DS.attr('string')
  created_at: DS.attr('string'),
  commits: DS.attr('number'),
  last_pushed: DS.attr('string'),
  git_url: DS.attr('string')
});

//var repos = store.all(App.Repo);
//repos.forEach(function(message) {
//  message.set('isLoaded', true);
//});
//repos.save();

//sets up the routes

App.Router.map(function() {
  this.route('about');
  this.resource('repos', function() {
    this.resource('repo', { path: '/:repo_id' });
  });
});

//DS.RESTAdapter.reopen({
//  host: 'https://api.github.com/users/ajkim/repos'
//});

//sets up the Controller properties

App.IndexController = Ember.Controller.extend({
  repositories: 6,
  time: function(){
   return (new Date()).toDateString()
  }.property()
});

App.AboutController = Ember.Controller.extend({
  name: "Annie",
  photo: "images/gq.jpg"
});
//
//App.ReposController = Ember.ArrayController.extend({
//  sortProperties: 'pushed_at'
//});


//passes the data models to the route
App.ReposRoute = Ember.Route.extend({
  model: function() {
    return App.Repo.all();
  }
});

App.RepoRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('repo', params.repo_id);
  }
});

//need to pass in the json payload into the store/arraycontroller
//need to delete the fetched payload values

App.Repo = Ember.Object.extend();
App.Repo.reopenClass({
  allRepos: [],
  all: function(){
    this.allRepos = [];
    $.ajax({
      url: 'https://api.github.com/users/ajkim/repos',
      dataType: 'json',
      context: this,
      success: function(response) {
        response.data.forEach(function(repo){
          this.allRepos.addObject(App.Repo.create(repo))
        }, this)
      }
    })
    return this.allRepos;
  }
});


//1. fetch data from api to each be stored into model's store
//2. create template to list repos onto page



