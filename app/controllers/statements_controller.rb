class StatementsController < ApplicationController

  before_action :set_document
  before_action :set_statement, except: :create

  def create
    statement = @document.statements.create!
    render json: statement
  end

  def update
    statement.update!(statement_params)
    render json: statement
  end
  
  def destroy
    statement.destroy!
  end
  
  private
  
  def statement_params
    params.require(:statement).permit(:summary, :elaboration, :order)
  end
  
  def set_document
    @document = current_user.documents.find(params[:document_id])
  end

  def set_statement
    statement = @document.statements.find(params[:id])
  end

end
