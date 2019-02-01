class User < ApplicationRecord
  mount_uploader :profile_photo, ProfilePhotoUploader
  has_many :reviews
  has_many :votes

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
