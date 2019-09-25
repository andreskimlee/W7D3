# should show pokemon and items wrapped in a object 

  
json.pokemon do 
json.set! @pokemon.id do 
    json.extract! @pokemon, :id, :name, :attack, :defense, :poke_type, :moves, :image_url
  end 
end 
    json.items do   
    @pokemon.items.each do |item| 
      json.set! item.id do 
        json.extract! item, :id, :name, :pokemon_id, :price, :happiness, :image_url 
      end     
  end 
end 





# pokemon  has_many :items



