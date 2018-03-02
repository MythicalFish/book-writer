class StatementsController < ApplicationController

  before_action :set_document
  before_action :set_statement, except: [:index, :create, :reorder]

  def show
    render json: @statement
  end

  def create
    @document.statements.create!(statement_params)
    render_document
  end

  def update
    @statement.update!(statement_params)
  end
  
  def destroy
    @statement.destroy!
    render_document
  end

  def reorder
    @document.move_statement params[:oldIndex], params[:newIndex]
    render_document
  end
  
  private
  
  def render_document
    render json: @document
  end

  def statement_params
    params.require(:statement).permit(:summary, :elaboration, :order)
  end
  
  def set_document
    @document = current_user.documents.find(params[:document_id])
  end

  def set_statement
    @statement = @document.statements.find(params[:id])
  end

end
