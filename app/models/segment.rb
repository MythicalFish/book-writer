class Segment < ApplicationRecord

  require 'pandoc-ruby'

  belongs_to :chapter

  def preview
    body.truncate(150, separator: ' ')
  end

  def summarized
    PandocRuby.convert(summary, {:from => :markdown, :to => :html}).html_safe
  end

  def self.qualities
    [['Low','low'],['Medium','medium'],['High','high'],['Complete','complete']]
  end

  def style
    if use_draft_text
      'draft'
    else
      'final'
    end
  end

end
