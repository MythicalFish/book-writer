class BookController < ApplicationController

  def md
    send_data Book.md
  end

  def pdf
    Book.create_pdf true
    send_file Rails.root.join('tmp', 'book.pdf'), :type => 'text/html', :disposition => 'attachment'
  end

  def pdf_preview
    Book.create_pdf false
    send_file Rails.root.join('tmp', 'preview.pdf'), :type => 'text/html', :disposition => 'attachment'
  end

  def html
    send_data Book.html
  end

  def epub
    send_data Book.epub
  end

  def preview
    @html = Book.html
    render 'preview/index', :layout => 'preview'
  end

end
