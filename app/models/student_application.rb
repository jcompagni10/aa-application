# == Schema Information
#
# Table name: student_applications
#
#  id         :integer          not null, primary key
#  first_name :string           not null
#  last_name  :string           not null
#  email      :string           not null
#  zip        :string           not null
#  status     :string           default("PENDING"), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class StudentApplication < ApplicationRecord

  validates :first_name, :last_name, :email, :zip, presence: true
  validate :validate_email
  validate :validate_zip

  has_one :coding_challenge,
          foreign_key: :application_id


  def validate_email
    unless /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i.match(email)
      errors.add(:email, "must be a valid email address")
    end
  end

  def validate_zip
    unless /[0-9]{5}/.match(zip)
      errors.add(:zip, "code must be valid")
    end
  end

  def generate_challenge
    self.create_coding_challenge
  end

  def code
    coding_challenge.code if coding_challenge
  end

  def challenge_url
    coding_challenge.url if coding_challenge
  end
  
end
