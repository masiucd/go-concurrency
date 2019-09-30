module Main exposing (..)

import Browser
import Html exposing (Attribute, Html, div, input, text)
import Html.Attributes exposing (..)
import Html.Events exposing (onInput)


main =
    Browser.sandbox { init = init, update = update, view = view }



-- Custom state type, what the stae shou be and what ELM expects


type alias Model =
    { value : String
    }



-- State


init : Model
init =
    { value = "" }



-- Actions


type Msg
    = Change String



-- , Update ,Reducers


update : Msg -> Model -> Model
update msg model =
    case msg of
        Change newConent ->
            { model | value = newConent }



-- View


view : Model -> Html Msg
view model =
    div []
        [ input [ placeholder "Enter something", value model.value, onInput Change ] []

        -- , div [] [ text (String.repeat 5 (String.toUpper (String.reverse model.value))) ]
        , div [] [ text (String.repeat 5 <| String.toUpper <| String.reverse model.value) ]
        ]
