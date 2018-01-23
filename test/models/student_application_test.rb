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

require 'test_helper'

class StudentApplicationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
