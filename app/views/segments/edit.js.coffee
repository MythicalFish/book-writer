$('#editor').html( "<%= escape_javascript(render partial: 'edit') %>" )
$('input[name="view"]').change ->
  $('textarea').hide()
  $('#'+$(this).val()).show()
  return
