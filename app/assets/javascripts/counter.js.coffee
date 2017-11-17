$(document).ready ->
  if $('#count').length > 0
    value = $('#content').text()
    regex = /\s+/gi
    wordCount = value.trim().replace(regex, ' ').split(' ').length
    $('#count').html wordCount + ' words'
  return
