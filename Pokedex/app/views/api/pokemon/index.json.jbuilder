# @pokemen.each do |pokemon| 
#   json.set! pokemon.id do 
#     json.id  pokemon.id
#     json.name  pokemon.name
#     json.attack pokemon.attack
#     json.poke_type pokemon.poke_type
#     json.moves pokemon.moves
#     json.image_url pokemon.image_url
#   end 
# end 

@pokemen.each do |poke|
  json.set! poke.id do
    json.extract! poke, :id, :name
    json.image_url asset_path(poke.image_url)
  end
end