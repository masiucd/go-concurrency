module Main exposing (main)

import Html exposing (Html, text)


add a b =
    a + b


result =
    add 10 12


main =
    -- Html.text (String.concat [ "Hello Elm" ])
    Html.text (String.fromInt result)
