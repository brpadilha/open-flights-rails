class Airline < ApplicationRecord
  has_many :reviews

  # antes de criar no banco de dados, chamar essa função que ja cria o slug com o nome que iremos passar
  before_create :slugify

  before_update :slugify

  # quando criar o nome da linha, ela já faz um slug
  # United Airlines ==> united-airlines
  def slugify
    self.slug = name.parameterize
  end

  # Faz uma média de todas as pontuações recebidas
  def average_score
    return 0 unless reviews.count.positive?

    reviews.average(:score).round(2).to_f
  end
end
