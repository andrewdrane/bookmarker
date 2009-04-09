module AuthBookmarkHelper
  #generate a link for the bookmarking bookmark.
  def bookmark_link controller_name
    "<a href=\"#{bookmark_url(controller_name)}\">#{controller_name} Bookmark</a>"
  end

  #URL for the bookmarking bookmark
  def bookmark_url controller_name
    "javascript:(function()%20{var%20x=document.getElementsByTagName('head').item(0);var%20so=document.createElement('script'
);var%20s='http://#{request.env['HTTP_HOST'].to_s}/#{controller_name}/script/';if(typeof%20so%20!='object')%20so=document.standardCreateElement('script');so
.setAttribute('src',s);so.setAttribute('type','text/javascript');x.appendChild(so);})();"
  end
end