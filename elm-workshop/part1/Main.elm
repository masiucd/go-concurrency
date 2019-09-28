module Main exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)


main =
    div [ class "content" ]
        [ header []
            [ h1 [] [ text "ElmHub" ]
            , span
                [ class "tagline"
                ]
                [{- TODO put some text in here that says:
                    "Like GitHub, but for Elm things."
                 -}
                ]
            ]
        ]
