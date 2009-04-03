require 'test_helper'
#Please note, this assums the standard restful_authentication user test fixtures..
class <%= plural_name.underscore.camelize %>ControllerTest < ActionController::TestCase
  include AuthenticatedTestHelper
  
  fixtures :users
  
  test "should find and render js file" do
    get :script rescue nil
    assert_response :success
  end

  test "creating <%=singular_name%> should require user login" do
    get :new
    assert_redirected_to :controller=>'<%=plural_name%>', :action=>'login'

    login_as :quentin
    get :new
    assert_response :success
  end

  test "should create <%=singular_name%> and add it to user" do
    assert_difference('<%=class_name%>.count', 1) do
      login_as :quentin
      post :submit, :<%=singular_name%>=>{:url=>'http://<%=singular_name%>.com', :title=>'Some <%=class_name%>', :description=>'This is a <%=singular_name%>'}
    end

    #Use if you want to associate bookmarks with users
    #assert_equal User.find_by_login('quentin').<%=plural_name%>[0].url, 'http://<%=singular_name%>.com'
  end

end
