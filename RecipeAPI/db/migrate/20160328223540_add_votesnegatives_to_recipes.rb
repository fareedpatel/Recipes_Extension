class AddVotesnegativesToRecipes < ActiveRecord::Migration
  def change
    add_column :recipes, :votesnegative, :integer
  end
end
