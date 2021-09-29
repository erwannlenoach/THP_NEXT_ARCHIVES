class User < ApplicationRecord 
  has_one_attached :avatar
    acts_as_token_authenticatable
    has_many :articles


  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
#  devise :database_authenticatable, :registerable,
  #       :recoverable, :rememberable, :validatable

end
