json.array!(@recipes) do |recipe|
  json.extract! recipe, :id, :name, :instructions, :link
  json.url recipe_url(recipe, format: :json)
end
