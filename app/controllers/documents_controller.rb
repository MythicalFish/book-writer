class DocumentsController < ApplicationController

  # This app is partly standard Rails, and partly an SPA.
  # The index & edit actions do load standard HTML views, but those
  # only serve to provide the bookmarkable URLs, and the Vue JS, which
  # then calls this controller again to do the actual work.

  # I could have used Vue Router to achieve the same thing, but this 
  # is quicker & easier, and is one of the advantages provided by
  # using Rails & Webpacker over a Rails API with a seperate frontend.
  
  def index
    respond_to do |format|
      format.html 
      format.json { render json: current_user.documents }
    end
  end

  def show
    respond_to do |format|
      format.html 
      format.json { render json: current_user.documents.find(params[:id]) }
    end
  end

  def create
    @document = current_user.documents.create(document_params)
    respond_to do |format|
      format.json { render json: @document }
    end
  end

  private

  def document_params
    params.require(:document).permit([:title])
  end

end
