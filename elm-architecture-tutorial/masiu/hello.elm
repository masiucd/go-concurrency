module Main exposing (main)

import Html exposing (Html, text)


add a b =
    a + b


checkPower level =
    if checkPower > 100 then
        "Yeahh booi"

    else
        "Meehh"



-- result =
--     add 10 12


result =
    -- add 10 12 |> add 10
    add 2 2 |> (\a -> a remainderBy 2 == 0)


main =
    -- Html.text (String.concat [ "Hello Elm" ])
    -- Html.text (String.fromInt result)
    Html.text (String.fromInt result)