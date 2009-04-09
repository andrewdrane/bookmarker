class <%= plural_name.underscore.camelize %>Controller < ApplicationController
  include AuthBookmark

  #gotta be logged in, but don't want to use restful_auth login
  before_filter :bookmarker_login_required, :only=>[:new, :submit, :success, :failure]

  #The new bookmark creation page
  #this is the first screen you will see when you call the bookmarklet (assuming you are logged in)
  def new
    @url=params[:url]
    @title=params[:title]
    @<%=singular_name%> = <%= class_name %>.new

    #Put any scraping stuff here.

    render :layout => '<%=file_path%>'
  end

  def submit
    #submission of a <%=singular_name%>
    @<%=singular_name%>=<%=class_name%>.new(params[:<%=singular_name%>])
    #Optional, uncomment this name if you want the bookmark associated with a user
    #current_user.<%=table_name%> << @<%=singular_name%> rescue nil
    if @<%=singular_name%>.save
      redirect_to :action=>'success'
    else
      redirect_to :action=>'failure'
    end
  end

  def success
    #if data was submitted successfully, display this view.
    render :layout => '<%=file_path%>'
  end

  def failure
    #if something went wrong, display this view.
    render :layout => '<%=file_path%>'
  end

  def login
    # Shows login screen when the user did not properly login.
    # Actual logging is done by restful authentication sessions
    render :layout => '<%=file_path%>'
  end

  # Standard CRUD operations - minus the Create, since that is done elsewhere
  # These use the standard site template
  def index
    @<%=table_name%> = <%=class_name%>.find(:all)

    respond_to do |format|
      format.html # index.html.erb
    end
  end

  def show
    @<%=singular_name%> = <%=class_name%>.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
    end
  end

  def edit
    @<%=singular_name%> = <%=class_name%>.find(params[:id])
  end

  def update
    @<%=singular_name%> = <%=class_name%>.find(params[:id])

    respond_to do |format|
      if @<%=singular_name%>.update_attributes(params[:<%=singular_name%>])
        flash[:notice] = '<%=class_name%> was successfully updated.'
        format.html { redirect_to "/<%=plural_name%>/show/#{@<%=singular_name%>.id}" }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
      end
    end
  end

  def destroy
    @<%=singular_name%> = <%=class_name%>.find(params[:id])
    @<%=singular_name%>.destroy

    respond_to do |format|
      format.html { redirect_to "/<%=plural_name%>" }
    end
  end

end