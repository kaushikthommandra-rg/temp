class User < ApplicationRecord
  attr_accessor :password
  EMAIL_REGEX = /^[A-Z0-9._%+-]/i
  validates :username, :presence => true, :uniqueness => true, :length => { :in => 3..20 }
  validates :email, :presence => true, :uniqueness => true, #:format => EMAIL_REGEX
  validates :password , :confirmation => true password_confirmation attr
  validates_length_of :password, :in => 6..20, :on => :create
end
