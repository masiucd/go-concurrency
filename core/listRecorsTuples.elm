import Html exposing (..)
names = ["aleks","boris","karol"]
nums = [1,2,3,4,5,6,7,0]

List.isEmpty names
-- False
List.reverse names
List.sort names
List.sort nums

increment n =
  n + 1

List.map increment nums


mike = {first = "mike" , last = "Smith", age = 21 }

mike.first
mike.last
mike.age

.last


primes [2,3,4,5]

calculationResult = (True, 32)

point = {x = 45, y = 21}

-- function
pluralize singular plural quantitiy =
  if quantitiy == 1 then
    singular
  else
    plural

main =
  text (pluralize "leaf" , "leaves", 1)
  text (pluralize "leaf" , "leaves", 2)
