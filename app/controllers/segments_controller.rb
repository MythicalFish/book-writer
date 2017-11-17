class SegmentsController < ApplicationController

  def new
    @segment = Segment.new
    @segment.body = "\n"
    render 'edit.js'
  end

  def edit
    @segment = Segment.find(params[:id])
    unless @segment.body
      @segment.body = "\n"
    end
    render 'edit.js'
  end

  def create
    @segment = Segment.create(segment_params)
    @parts = Part.all
    render 'segments/create.js'
  end

  def update
    @segment = Segment.find(params[:id])
    @segment.update!(segment_params)
    @parts = Part.all
    render 'parts/index.js'
  end

  def destroy
    @segment = Segment.find(params[:id])
    @segment.destroy
    redirect_to '/'
  end

  private

  def segment_params
    params.require(:segment).permit(:chapter_id, :position, :quality, :source_text, :title, :body, :draft_text, :use_draft_text, :summary)
  end

end
