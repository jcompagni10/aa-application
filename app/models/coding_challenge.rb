# == Schema Information
#
# Table name: coding_challenges
#
#  id             :integer          not null, primary key
#  code           :string           not null
#  url            :string           not null
#  application_id :boolean          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class CodingChallenge < ApplicationRecord
  validates :code, :url, presence: true

  belongs_to :student_application

  before_save :ensure_url

  def ensure_url
    self.url = SecureRandom.urlsafe_base64
    while CodingChallenge.exists?(url: url)
      self.url = SecureRandom.urlsafe_base64
    end
  end

end
