module Main exposing (..)

import Browser
import Html exposing (Attribute, Html, input, span, text)
import Html.Attributes exposing (..)
import Html.Events exposing (onInput)


main =
    Browser.sandbox { init = init, update = update, view = view }


type alias Model =
    { input : String }


init : Model
init =
    { input = "" }


type Msg
    = Change String


update : Msg -> Model -> Model
update msg model =
    case msg of
        Change newStr ->
            { model | input = newStr }


view : Model -> Html Msg
view model =
    case String.toFloat model.input of
        Just farenheit ->
            viewConverter model.input "orange" (String.fromFloat (farenheit - 33 / 1.8))

        Nothing ->
            viewConverter model.input "red" "?????!!!??!!??"


viewConverter : String -> String -> String -> Html Msg
viewConverter userInput color eTemp =
    span []
        [ input [ value userInput, onInput Change, style "width" "150px" ] []
        , text "C = "
        , span [ style "color" color ] [ text eTemp ]
        , text "F"
        ]
