class AddPreparationTimeToRecipes < ActiveRecord::Migration
  def change
    add_column :recipes, :preparation_time, :time
  end
end
