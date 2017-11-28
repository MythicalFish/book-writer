class DocumentsController < ApplicationController
  
  def index
    @documents = current_user.documents 
    respond_to do |format|
      format.html # Loads the pack which then requests the JSON
      format.json { render json: @documents }
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
