require 'rails_helper'

RSpec.describe "/recipe", type: :request do
describe 'POST /recipes.json' do
    before do
      params = {:recipe => {:name => "pizza margarita", :instructions => "Boil for 20 minutes",
         :preparation_time => 90}}
      post "/recipes.json", params.to_json, {'ACCEPT' => "application/json", 'CONTENT_TYPE' => 'application/json'}
    end
    it 'post a recipe' do  
      expect(Recipe.last.name).to eq("pizza margarita")
      
    end
    it 'has instructions' do
      expect(Recipe.last.instructions).to eq("Boil for 20 minutes")
    end
    it 'has preparation time' do
      expect(Recipe.last.preparation_time).to eq(90)
    end
  end
end