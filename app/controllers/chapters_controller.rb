class ChaptersController < ApplicationController

  def new
    @chapter = Chapter.new
    render 'edit.js'
  end

  def edit
    @chapter = Chapter.find(params[:id])
    render 'edit.js'
  end

  def create
    @chapter = Chapter.create(chapter_params)
    @parts = Part.all
    render 'parts/index.js'
  end

  def update
    @chapter = Chapter.find(params[:id])
    @chapter.update!(chapter_params)
    @parts = Part.all
    render 'parts/index.js'
  end

  private

  def chapter_params
    params.require(:chapter).permit(:title, :number, :part_id, :intro, :quality, :draft_text, :use_draft_text, :summary, :filename)
  end

end
