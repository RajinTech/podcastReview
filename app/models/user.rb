class User < ApplicationRecord
  has_many :reviews
  has_many :votes

  validates :role, inclusion: {in: ["member", "admin"]}

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
