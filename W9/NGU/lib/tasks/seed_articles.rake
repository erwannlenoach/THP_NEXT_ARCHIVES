task seed_articles: :environment do

    Article.create(
        title: 'Amazon',
        content: 'Staff Software Engineer',

    )
  
    Article.create(
        company: 'Microsoft',
        position: 'Engineer',
    
    )
  
    puts 'complete'
  end