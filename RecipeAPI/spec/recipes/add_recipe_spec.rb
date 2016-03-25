require 'rails_helper'

RSpec.describe "/recipe", type: :request do
describe 'POST /recipes.json' do
    before do
      params = {:recipe => {:name => "pizza margarita", :instructions => "Boil for 20 minutes",
         :preparation_time => "01:30"}}
      post "/recipes.json", params.to_json, {'ACCEPT' => "application/json", 'CONTENT_TYPE' => 'application/json'}
    end
    it 'post a recipe' do  
      expect(Recipe.last.name).to eq("pizza margarita")
      
    end
    it 'has instructions' do
      expect(Recipe.last.instructions).to eq("Boil for 20 minutes")
    end
    it 'has preparation time' do
      time = Time.new(2000,1,1,1,30,0, "+00:00")
      expect(Recipe.last.preparation_time).to eq(time)
    end
  end
end