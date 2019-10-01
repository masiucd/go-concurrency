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
    | Sub
    | Rec


update : Msg -> Model -> Model
update msg model =
    case msg of
        Add ->
            model + 1

        Sub ->
            model - 1

        Rec ->
            0


view : Model -> Html Msg
view model =
    div []
        [ button [ onClick Add ] [ text "+" ]
        , div [] [ text (String.fromInt model) ]
        , button [ onClick Sub ] [ text "-" ]
        , button [ onClick Rec ] [ text "0" ]
        ]
