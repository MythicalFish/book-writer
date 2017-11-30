class DocumentsController < ApplicationController

  # This app is partly standard Rails, and partly an SPA.
  # The index action does load a standard HTML view, but it only
  # serves to provide the container div + JS, which then calls this
  # controller again to do the actual work.

  def index
    respond_to do |format|
      format.html 
      format.json { render json: current_user.documents }
    end
  end

  def show
    respond_to do |format|
      format.json { render json: current_user.documents.find(params[:id]) }
    end
  end

  def create
    @document = current_user.documents.create(document_params)
    index
  end

  private

  def document_params
    params.require(:document).permit(:title)
  end

end
