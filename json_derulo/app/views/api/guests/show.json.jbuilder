json.partial! "api/guests/guest", guest: @guest 


json.gifts do 
@guest.gifts.each do |gift|
  json.set! gift.id do 
  json.partial! "api/gifts/gift", gift: gift
end 
end 
end 



