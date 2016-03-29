require 'rails_helper'

RSpec.describe "/recipe", type: :request do
  describe 'POST /recipes.json' do
    before do
      params = {:recipe => {:name => "pizza margarita", :ingredients => "dough, cheese, tomato",
       :instructions => "Boil for 20 minutes",
       :preparation_time => 90,
        :link => 'https://www.youtube.com/watch?v=2kl3Liy5jcQ'}}
      post "/recipes.json", params.to_json, {'ACCEPT' => "application/json", 'CONTENT_TYPE' => 'application/json'}
    end
    it 'post a recipe' do  
      expect(Recipe.last.name).to eq("pizza margarita")  
    end
    it 'has ingredients' do 
      expect(Recipe.last.ingredients).to eq("dough, cheese, tomato")
    end
    it 'has instructions' do
      expect(Recipe.last.instructions).to eq("Boil for 20 minutes")
    end
    it 'has preparation time' do
      expect(Recipe.last.preparation_time).to eq(90)
    end
    it 'has video link' do
      expect(Recipe.last.link).to eq("https://www.youtube.com/watch?v=2kl3Liy5jcQ")
    end
  end
end