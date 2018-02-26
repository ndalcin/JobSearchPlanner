class Task < ApplicationRecord
  belongs_to :type

  def date_formatted
    self.date.strftime("%B %e, %Y")
  end
end
