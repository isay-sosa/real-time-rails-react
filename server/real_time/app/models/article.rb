class Article < ActiveRecord::Base
  validates_presence_of :user, :content
end
