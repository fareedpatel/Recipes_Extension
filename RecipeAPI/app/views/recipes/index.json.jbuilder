json.array!(@recipes) do |recipe|
  json.extract! recipe, :id, :name, :instructions, :preparation_time, :link, :ingredients
  json.url recipe_url(recipe, format: :json)
end