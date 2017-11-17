$(document).ready ->

  if $('#list').length != 0
    window.app.action('/parts', {})
    setTimeout ->
      $('#list a').first().click()
      return
    , 1000

  $('body').fillHeight();

  return

