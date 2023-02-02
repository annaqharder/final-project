class Eatery < ApplicationRecord
    belongs_to :user

    has_many :visits, dependent: :destroy
    has_many :users, through: :visits

    validates_presence_of :eatery_name

end
