#Actions for using the bookmark.
module AuthBookmark
    
  #Renders the javascript file that will get open the popup
  #This is the action called by the bookmarklet. Make whatever modifications
  # to the script file.
  def script
    #Grab the file
    script_file = File.new("#{RAILS_ROOT}/public/javascripts/#{self.class.to_s.chomp("Controller").downcase}_bookmarker.js", 'r')
    #Add our current working http location, so we don't have to worry about setting a variable
    @script_file_contents = script_file.read.gsub( '%H%', request.env['HTTP_HOST'].to_s )
    script_file.close
    render :text => @script_file_contents
  end


  protected

  #Checks if user is logged in using the restful_authentication login helper
  def bookmarker_login_required
    if !logged_in?
      session[:return_to] = request.request_uri
      flash[:notice]="You must log in to use the bookmarker tool! "
      redirect_to  :action=>'login'
    end
  end


end
