require 'rails_helper'

RSpec.describe "/recipe", type: :request do
describe 'POST /recipes.json' do
    before do
      params = {:recipe => {:name => "pizza margarita"}}
      post "/recipes.json", params.to_json, {'ACCEPT' => "application/json", 'CONTENT_TYPE' => 'application/json'}
    end
    it 'post a recipe' do
      
      expect(Recipe.last.name).to eq("pizza margarita")
    end
  end
end