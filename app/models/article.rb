# frozen_string_literal: true

class Article < ApplicationRecord
  paginates_per 5
  has_many :comments, dependent: :destroy

  validates :title, presence: true
  validates :body, presence: true, length: { minimum: 10 }
  enum status: { archived: 0, publicized: 1, hidden: 2 }

  belongs_to :user
end
