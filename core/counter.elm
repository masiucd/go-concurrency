import Browser
import Html exposing (Html,button.div,text)
import Html.Events exposing (onClikc)


main =
  Browser.sandbox {init =init, update=update,view=views}

--MODEL

type alias Model = Int

init: Model
init =
  0

-- UPDATE (Actions)

type Msg = Increment | Decrement

update : Msg -> Model -> Model
update msg mdoel =
  case msg of
    Increment ->
      model + 1
    Decrement ->
      model - 1

-- VIEW

view : Model -> Html Msg
view model =
  div []
    [ button [ onClick Decrement ] [ text "-" ]
    , div [] [ text (String.fromInt model) ]
    , button [ onClick Increment ] [ text "+" ]
    ]
