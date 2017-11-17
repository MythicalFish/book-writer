$.fn.fillHeight = function( opts ) {

  // This will make elements use the window's height unless the element has a greater height already.
  // Optionally, you can fill the element's parent container element.

  defaults = {
    relative_to: 'window',
    offset: 0,
    complete: function() {}
  }

  if( typeof opts !== 'object' ) {

    opts = defaults;

  } else {

    if( typeof opts.relative_to == 'undefined' )
      opts.relative_to = defaults.relative_to;

    if( typeof opts.complete == 'undefined' )
      opts.complete = defaults.complete;

    if( typeof opts.offset == 'undefined' )
      opts.offset = defaults.offset;

  }

  this.each( function() {

    e = $( this );
    e.css( 'height', '' );

    if( opts.relative_to == 'parent' ) {

      offset = opts.offset;
      parent = e.parent();
      siblings = e.siblings();

      siblings.each( function() {
        offset = offset + $( this ).outerHeight();
      });

      new_height = parent.height() - offset;

    } else if( opts.relative_to == 'window' ) {
      new_height = $(window).height() - opts.offset;
    } else {
      new_height = opts.relative_to.height() - opts.offset;
    }

    if( e.outerHeight() <= new_height )
      $( this ).css( 'height', new_height );

  });

  setTimeout( function() {
    opts.complete();
  }, 50 );

  return this;

}
