root = exports ? this

Template.panel.dynamicTemplate = ->
  panelName = @className.toLowerCase()
  return Template[panelName](@)

Template.panel.rendered = ->
  opts = this.data
  opts.$el = $(this.find(".panel__content-wrapper"))
  new root[opts.className](opts)

Template.panel.preserve(['.panel'])