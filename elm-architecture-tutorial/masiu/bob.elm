module Main exposing (Model, Msg(..), init, main, update, view, viewInput, viewValidation)

import Browser
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onInput)


main =
    Browser.sandbox { init = init, update = update, view = view }


type alias Model =
    { name : String, password : String, passwordAgain : String }


init : Model
init =
    Model "" "" ""


type Msg
    = Name String
    | Password String
    | PasswordAgain String


update : Msg -> Model -> Model
update msg model =
    case msg of
        Name newName ->
            { model | name = newName }

        Password newPassword ->
            { model | password = newPassword }

        PasswordAgain newPasswordAgain ->
            { model | passwordAgain = newPasswordAgain }


view : Model -> Html Msg
view model =
    div []
        [ viewInput "text" "Name" model.name Name
        , viewInput "password" "Password" model.password Password
        , viewInput "password" "PasswordAgain" model.passwordAgain PasswordAgain
        , viewValidation model
        , viewValidation2 model
        , div [] [ text "Name: " ]
        , div [] [ text (String.toUpper <| String.reverse <| model.name) ]
        , div [] [ text "Password: " ]
        , div [] [ text (String.toUpper <| model.password) ]
        , div [] [ text "PasswordAgain: " ]
        , div [] [ text (String.toUpper <| model.passwordAgain) ]
        , div [] [ text (String.length model.passwordAgain |> String.fromInt) ]
        ]


viewInput : String -> String -> String -> (String -> msg) -> Html msg
viewInput t p v toMsg =
    input [ type_ t, placeholder p, value v, onInput toMsg ] []


viewValidation : Model -> Html msg
viewValidation model =
    if model.password == model.passwordAgain then
        div [ style "color" "green" ] [ text "Welcome user" ]

    else
        div [ style "color" "red" ] [ text "Auth error" ]


viewValidation2 : Model -> Html msg
viewValidation2 model =
    if (String.length model.password |> String.fromInt) < "8" then
        div [ style "color" "red" ] [ text "password is to short mate" ]

    else
        div [ style "color" "green" ] [ text "Perfect length" ]
