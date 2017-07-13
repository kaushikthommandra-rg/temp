class User < ApplicationRecord
  # attr_acccessible :email, :password_hash, :password_salt, :password, :password_confirmation
  attr_accessor :password, :password_confirmation

  before_save :encrypt_password
  before_create :confirmation_token

  validates_confirmation_of :password
  validates_presence_of :password, :on => :update
  validates_presence_of :email
  validates_uniqueness_of :email

  def encrypt_password
    if password.present?
      self.password_salt = BCrypt::Engine.generate_salt
      self.password_hash = BCrypt::Engine.hash_secret(password, password_salt)
    end
  end
  def self.authenticate(email, password)
    user = find_by_email(email)
    if user && user.password_hash == BCrypt::Engine.hash_secret(password, user.password_salt)
      user
    else
      nil
    end
  end
  def email_activate
    self.email_confirmed = true
    self.password_hash = 'somerandomstring'
    self.confirm_token = nil
    save!(:validate => false)
  end
  private

  def confirmation_token
    if self.confirm_token.blank?
      self.confirm_token = SecureRandom.urlsafe_base64.to_s
    end
  end
end
