module Main exposing (..)

import Browser
import Html exposing (Attribute, Html, div, input, text)
import Html.Attributes exposing (..)
import Html.Events exposing (onInput)



-- main


main =
    Browser.sandbox { init = init, update = update, view = view }



-- MODEL


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
        Change newText ->
            { model | content = newText }



-- -view


view : Model -> Html Msg
view model =
    div []
        [ input [ placeholder "enter some value", value model.content, onInput Change ] []
        , div [] [ text (String.reverse model.content) ]
        ]
