require File.join(File.dirname(__FILE__), "lib", "auth_bookmark")
ActionView::Base.send :include, AuthBookmarkHelper
