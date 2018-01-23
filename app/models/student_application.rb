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
  #TODO: regex for email and zip
  validate :validate_email
  validate :validate_zip
  has_one :coding_challenge

  def valid_email
    !!/\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i.match(email)
  end

  def valid_zip
    !!/[0-9]{5}/.match(zip)
  end
  
end
