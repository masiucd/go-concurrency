module Main exposing (Model, Msg(..), init, main, update, view)

import Browser
import Html exposing (Attribute, Html, div, input, text)
import Html.Attributes exposing (..)
import Html.Events exposing (onInput)


main =
    Browser.sandbox { init = init, update = update, view = view }



-- Custom state type


type alias Model =
    { content : String }



-- State


init : Model
init =
    { content = "" }



-- Action


type Msg
    = Change String



-- Reducer


update : Msg -> Model -> Model
update msg model =
    case msg of
        Change newContent ->
            { model | content = newContent }


view : Model -> Html Msg
view model =
    div []
        [ input [ placeholder "Enter some text", value model.content, onInput Change ] []
        , div [] [ text (String.reverse <| String.slice 0 12 <| String.toUpper model.content) ]

        -- , div [] [ text (String.toUpper model.content |> String.reverse |> String.slice 0 18) ]
        , div [] [ text (String.length model.content |> String.fromInt) ]
        ]
