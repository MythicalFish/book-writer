class PartsController < ApplicationController

  def index
    @parts = Part.all.order('number ASC')
    render 'index.js'
  end

  def new
    @part = Part.new
    @part.description = "\n"
    render 'edit.js'
  end

  def edit
    @part = Part.find(params[:id])
    unless @part.description
      @part.description = "\n"
    end
    render 'edit.js'
  end

  def create
    @part = Part.create(part_params)
    @parts = Part.all
    render 'index.js'
  end

  def update
    @part = Part.find(params[:id])
    @part.update!(part_params)
    @parts = Part.all
    render 'index.js'
  end

  private

  def part_params
    params.require(:part).permit(:title, :number, :description, :quality, :draft_text, :use_draft_text, :summary)
  end

end
