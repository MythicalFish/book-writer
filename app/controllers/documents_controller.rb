class DocumentsController < ApplicationController

  # This app is partly standard Rails, and partly an SPA.
  # The index action does load a standard HTML view, but it only
  # serves to provide the container div + JS, which then calls this
  # controller again to do the actual work.
  
  before_action :set_document, except: [:index, :create]

  def index
    respond_to do |format|
      format.html 
      format.json { render json: current_user.documents }
    end
  end

  def show
    render json: @document
  end

  def create
    current_user.documents.create(document_params)
    index
  end

  def destroy
    @document.destroy!
    index
  end

  def update
    @document.update!(document_params)
    index
  end

  private

  def set_document
    @document = current_user.documents.find(params[:id])
  end

  def document_params
    params.require(:document).permit(:title)
  end

end
