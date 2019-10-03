module Main exposing (main)

import Browser
import Html exposing (Attribute, Html, div, input, text)
import Html.Attributes exposing (..)
import Html.Events exposing (onInput)


main =
    Browser.sandbox { init = init, update = update, view = view }


type alias Model =
    { content : String }


init : Model
init =
    { content = "" }


type Msg
    = Change String


update : Msg -> Model -> Model
update msg model =
    case msg of
        Change text ->
            { model | content = text }


view : Model -> Html Msg
view model =
    div []
        [ input [ placeholder "enter something", value model.content, onInput Change ] []
        , div [] [ text (String.toLower <| String.reverse <| String.repeat 5 <| String.slice 0 12 model.content) ]
        , div [] [ text (String.fromInt <| String.length model.content) ]
        ]



-- , div [] [ text (String.toUpper <| String.reverse <| String.slice 0 3 model.content) ]
