task simplify: :environment do

  order = 0

  Part.all.order('number ASC').each do |part|

    Statement.create(summary: part.title, elaboration: part.description, order: order)
    order += 1
    
    part.chapters.order('number ASC').each do |chapter|

      Statement.create(summary: chapter.title, elaboration: chapter.intro, order: order)
      order += 1

      chapter.segments.order('position ASC').each do |segment|

        Statement.create(summary: segment.title, elaboration: segment.body, order: order)
        order += 1

      end
    end
  end

end