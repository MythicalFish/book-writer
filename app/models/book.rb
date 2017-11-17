class Book

  require 'pandoc-ruby'

  def self.config
    [
      'geometry:top=0.8in,right=0.8in,bottom=1.2in,left=0.8in,footskip=0.6in',
      'documentclass:scrartcl',
      'fontsize:17pt',
      "mainfont:'Literata'",
      "sansfont:'Bebas Neue'",
      "colorlinks:'true'",

      "title-meta:'Book writer'",
      "title:'Book writer'",
      "subtitle:''",
      "author-meta:'Richard Jake Broughton-Tompkins'"

    ].join(' -V ')
  end

  def self.md

    c = ''
    c << "\\newpage\n\n"
    c << "\\tableofcontents\n\n"
    c << "\\newpage\n\n"

    parts = Part.all.order('number ASC')
    parts.each do |part|

      c << "# #{part.title}\n\n"
      c << "#{part.description.strip}\n\n"

      part.chapters.order('number ASC').each do |chapter|

        if chapter.filename.present? and opts[:use_images]
          c << fullpage_image(chapter.filename)
        else
          c << "## #{chapter.title}\n"
          c << "#{chapter.intro.strip}\n\n"
        end

        chapter.segments.order('position ASC').each do |segment|

          c << "### #{segment.title}\n\n"
          c << "#{segment.body.strip}\n\n"

        end
        c << "\\newpage\n\n"
      end

      c << "\\newpage\n\n"

    end

    c
  end

  def self.html
    PandocRuby.convert(Book.md, :s, {:from => :markdown, :to => :html})
  end

  def self.epub
    PandocRuby.convert(Book.md, :s, {:from => :markdown, :to => :epub})
  end

  def self.create_pdf

    filename = "#{Rails.root}/tmp/book.pdf"

    PandocRuby.convert(
      Book.md,
      :s, {
        :V => config,
        :from => :markdown,
        :o => filename
      },
      'template' => Rails.root.join('lib','template.tex'),
      'latex-engine' => 'xelatex'
    )

  end

  def self.fullpage_image filename
    "\\newgeometry{top=0in,right=0in,bottom=0in,left=0in}![](#{image(filename)})\\restoregeometry\n\n"
  end

  def self.image filename
    Rails.root.join( 'lib', 'images', filename )
  end

  def self.red(string)
    "<div style='color: #d82b00;'>#{string}</div>"
  end

  def self.noted(string)
    s = string.gsub(/\[(.*?)\]/) do |m|
      m.slice!(0)
      m.chop!
      "<span class='note'>#{m}</span>"
    end
    return s if s
    string
  end

end
