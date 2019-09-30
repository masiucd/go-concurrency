module Main exposing (..)

import Browser
import Html exposing (Html, button, div, text)
import Html.Events exposing (onClick)


main =
    Browser.sandbox { init = init, update = update, view = view }


type alias Model =
    Int


init : Model
init =
    5


type Msg
    = Increase
    | Decrease
    | Reset


update : Msg -> Model -> Model
update msg model =
    case msg of
        Increase ->
            model + 1

        Decrease ->
            model - 1

        Reset ->
            5


view : Model -> Html Msg
view model =
    div []
        [ button [ onClick Decrease ] [ text "-" ]
        , div [] [ text (String.fromInt model) ]
        , button [ onClick Increase ] [ text "+" ]
        , button [ onClick Reset ] [ text "Reset" ]
        ]
