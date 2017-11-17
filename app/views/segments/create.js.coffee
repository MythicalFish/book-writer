$('#list').html( "<%= escape_javascript(render partial: 'parts/index') %>" );
$('#editor').html( "<%= escape_javascript(render partial: 'edit') %>" )
