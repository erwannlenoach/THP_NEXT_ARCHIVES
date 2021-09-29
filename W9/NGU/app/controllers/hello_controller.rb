require 'rails/application_controller'
class HelloController < ApplicationController
 

    def index
        render file: 'app/views/hello/index.html.erb'
    end 

 
end
