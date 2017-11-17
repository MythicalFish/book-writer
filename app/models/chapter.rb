class Chapter < ApplicationRecord

  belongs_to :part
  has_many :segments

  def full_title
    if number > 0
      "Chapter #{number}: #{title}"
    else
      title
    end
  end

  def style
    if use_draft_text
      'draft'
    else
      'final'
    end
  end

  def summarized
    PandocRuby.convert(summary, {:from => :markdown, :to => :html}).html_safe
  end

end
