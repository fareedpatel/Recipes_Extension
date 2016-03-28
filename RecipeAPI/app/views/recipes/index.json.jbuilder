json.array!(@recipes) do |recipe|
  json.extract! recipe, :id, :name, :instructions, :votespositive, :votesnegative
  json.url recipe_url(recipe, format: :json)
end
