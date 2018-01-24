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

require 'test_helper'

class CodingChallengeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
