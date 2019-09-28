module Main exposing (devide, devideby5, isFactor, main)

import Html exposing (text)


main =
    devide 5 135
        |> text


devide : Float -> Float -> String
devide a b =
    a
        / b
        |> toString



-- Curring


devideby5 : Float -> String
devideby5 =
    devide 5


isFactor a b =
    if rem a b == 0 then
        True

    else
        False
