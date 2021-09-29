
class StaticsController < ActionController::Metal
    include AbstractController::Rendering
    include ActionView::Layouts
    append_view_path "#{Rails.root}/app/views"
   
     def index
      render "statics/index"
     end
   end