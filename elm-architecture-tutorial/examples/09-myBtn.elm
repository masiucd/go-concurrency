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
    0


type Msg
    = Add
    | Dec
    | Reset


update : Msg -> Model -> Model
update msg model =
    case msg of
        Add ->
            model + 1

        Dec ->
            model - 1

        Reset ->
            0


view : Model -> Html Msg
view model =
    div []
        [ button [ onClick Add ] [ text "+" ]
        , div [] [ text (String.fromInt model) ]
        , button [ onClick Dec ] [ text "-" ]
        , button [ onClick Reset ] [ text "Reset" ]
        ]
