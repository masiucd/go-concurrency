module Main exposing (Model, Msg(..), init, main, update, view, viewInput, viewValidation)

import Browser
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onInput)



isGreatherThen5 num =
  num >=5

List.filter isGreatherThen5 [1,2,3,4,5,6,7,8]

main =
    Html.text





--
-- viewInput2 : String -> String -> Int -> (String -> msg) -> Html msg
-- viewInput2 t p v toMsg =
--     input [ type_ t, placeholder p, value v, onInput toMsg ]
