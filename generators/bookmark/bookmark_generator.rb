class BookmarkGenerator < Rails::Generator::NamedBase
  attr_accessor :location, :migration_name, :migration_action


  def manifest
    @location="http://localhost:3000/" #http://www.mysite.com"
    @migration_name = "Create#{class_name}"

    record do |m|

      #Migration
      m.migration_template 'migration.rb', "db/migrate", :migration_file_name =>"create_#{file_path}"
      #Tests
      m.template "unit_test.rb", "test/unit/#{singular_name}_test.rb"
      m.template "controller_test.rb", "test/functional/#{plural_name}_test.rb"
      m.template "fixture.yml", "test/fixtures/#{plural_name}.yml"

      #Class
      m.template "model.rb", "app/models/#{singular_name}.rb"
      #layout
      m.template "views/layout.html.erb", "app/views/layouts/#{file_path}.html.erb"
      #controller
      m.template "controller.rb", "app/controllers/#{plural_name}_controller.rb"
      #javascript file that actually imports the bookmark
      m.template "js.js", "public/javascripts/#{plural_name}_bookmarker.js"

      #views
      m.directory "app/views/#{plural_name}"
      m.template "views/new.html.erb", "app/views/#{plural_name}/new.html.erb"
      m.template "views/success.html.erb", "app/views/#{plural_name}/success.html.erb"
      m.template "views/failure.html.erb", "app/views/#{plural_name}/failure.html.erb"
      m.template "views/login.html.erb", "app/views/#{plural_name}/login.html.erb"
      m.template "views/index.html.erb", "app/views/#{plural_name}/index.html.erb"
      m.template "views/show.html.erb", "app/views/#{plural_name}/show.html.erb"
      m.template "views/edit.html.erb", "app/views/#{plural_name}/edit.html.erb"
      m.template "views/script.html.erb", "app/views/#{plural_name}/script.html.erb"

      #css
      m.template "css.css", "public/stylesheets/#{singular_name}.css"

    end
  end
end