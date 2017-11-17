$(document).ready ->

  # Hide modal background on click / ESC

  $(document).on 'click', '.modal', (e) ->
    target = $(e.target)
    if( target.is( '.modal, .cancel' ) )
      $(this).remove()
      $('body').removeClass('noscroll')
    return

  $(document).on 'keyup', (e) ->
    if (e.keyCode == 27)
      modal = $('.modal')
      if modal.length > 0 && !modal.hasClass('loading')
        modal.remove()
        $('body').removeClass('noscroll')
    return

  # Buttons

  $(document).on 'click', 'button', (e) ->
    remote = $(this).attr('data-remote')
    if(remote)
      e.preventDefault()
      if(remote == 'true')
        window.app.action($(this).attr('data-action'),{id:$(this).attr('data-id')})
      else
        eval($(this).attr('data-action'))
    return

  document.addEventListener 'keydown', (e) ->
    if(e.keyCode == 83 && e.metaKey)
      e.preventDefault();
      $('#editor form').submit()
    return

  return

# AJAX Transitions

$(document).bind('ajaxSend', ->
  window.app.loading()
  return
).bind 'ajaxComplete', ->
  window.app.loaded()
  return
