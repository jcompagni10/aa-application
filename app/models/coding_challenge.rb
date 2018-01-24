# == Schema Information
#
# Table name: coding_challenges
#
#  id             :integer          not null, primary key
#  code           :string           not null
#  url            :string           not null
#  application_id :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class CodingChallenge < ApplicationRecord
  validates :url, presence: true

  belongs_to :student_application,
             foreign_key: :application_id

  after_initialize :ensure_url

  def ensure_url
    if !self.url
      self.url = SecureRandom.urlsafe_base64
      while CodingChallenge.exists?(url: url)
        self.url = SecureRandom.urlsafe_base64
      end
    end
  end

end
