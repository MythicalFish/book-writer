class StatementsController < ApplicationController

  before_action :set_document
  before_action :set_statement, except: :create

  def create
    @document.statements.create!(statement_params)
    render_list
  end

  def update
    @statement.update!(statement_params)
    render_list
  end
  
  def destroy
    @statement.destroy!
    render_list
  end
  
  private
  
  def render_list
    render json: @document.statements
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
