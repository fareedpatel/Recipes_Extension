class AddVotesToRecipes < ActiveRecord::Migration
  def change
    add_column :recipes, :votespositive, :integer, :default => 0
  end
end
