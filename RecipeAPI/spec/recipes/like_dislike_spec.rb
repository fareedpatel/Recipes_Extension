require 'rails_helper'

RSpec.describe 'recipe likes', type: :request do
  describe 'POST /recipes/1/like.json and dislike' do
    before do
      params = {:recipe => {:name => "pizza margarita", :ingredients => "dough, cheese, tomato",
      :instructions => "Boil for 20 minutes",
      :preparation_time => 90,
       :votespositive => 0, :votesnegative => 0, :link => 'https://www.youtube.com/watch?v=2kl3Liy5jcQ'}}
     post "/recipes.json", params.to_json, {'ACCEPT' => "application/json", 'CONTENT_TYPE' => 'application/json'}
    end
    it 'has negative votes' do
      expect(Recipe.last.votesnegative).to eq 0
    end
    it 'allows to vote' do
      post'/recipes/1/dislike.json'
      expect(Recipe.last.votesnegative).to eq 1
    end
    it 'has positive votes' do
      expect(Recipe.last.votespositive).to eq 0
    end
    it 'allows to vote' do
      post'/recipes/1/like.json'
      expect(Recipe.last.votespositive).to eq 1
    end
  end
end