root = exports ? this

# Session Configuration
Session.set('grid_units_x', 3)
Session.set('grid_units_y', 2)

# Global Resize
$(window).on 'resize', (evt) ->
  Session.set 'window_width', $(window).width()
  Session.set 'window_height', $(window).height()

# Router
DashboardRouter = Backbone.Router.extend
  routes:
    '': 'index'
    'dashboard/:dashboard_id': 'dashboard'
  index: ->
    Session.set('dashboard_id', null)
  dashboard: (dashboard_id) ->
    Session.set('dashboard_id', dashboard_id)

Router = new DashboardRouter

Meteor.startup ->
  Backbone.history.start({pushState: true})
  $(window).trigger 'resize'