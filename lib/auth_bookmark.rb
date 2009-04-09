#Actions for using the bookmark.
module AuthBookmark
    
  #Renders the javascript file that will get open the popup
  #This is the action called by the bookmarklet. Make whatever modifications
  # to the script file.
  def script
    render :layout => false
  end


  protected

  #Checks if user is logged in using the restful_authentication login helper
  def bookmarker_login_required
    if !logged_in?
      store_location #research this
      flash[:notice]="You must log in to use the bookmarker tool! - FROM MODULE"
      redirect_to  :action=>'login'
    end
  end


end
