json.array!(@employees) do |employee|
  json.extract! employee, :id, :img_url, :name, :alias, :birthday, :email, :role, :ilike
  json.url employee_url(employee, format: :json)
end
