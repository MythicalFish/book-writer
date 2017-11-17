#= require jquery
#= require jquery_ujs
#= require jquery-ui
#= require turbolinks
#= require application
#= require layout
#= require general
#= require chapters
#= require init
#= require counter

window.app =
  modal: ->
    modal = $('body').append '<div class="modal"></div>'
    modal.fadeIn()
    return
  loading: ->
    $('body').append '<div class="modal loading"></div>'
    return
  loaded: ->
    $('.loading').fadeOut 600, ->
      $(this).remove()
      return
    return
  selectMenu: ->
    $('select').selectmenu
      change: ( event, ui ) ->
        remote = $(this).attr('data-remote')
        if(remote)
          if(remote == 'true')
            window.app.action $(this).attr('data-action'),
              {id : $(this).val()}
          else
            eval($(this.attr('data-action')))
        return
    return
  action: (action,data) ->
    $.ajax action, type: 'GET', dataType: 'script', data: data
    return
