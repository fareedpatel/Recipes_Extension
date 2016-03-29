json.array!(@recipes) do |recipe|
  json.extract! recipe, :id, :name, :ingredients, :instructions, :preparation_time, :link, :votespositive, :votesnegative
  json.url recipe_url(recipe, format: :json)
end