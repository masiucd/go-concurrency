import Html exposing (text)

main =
  divide 5 1000
    |> text

divide a b =
  a / b
    |> toString



-- OPERATORS

1
1 + 2 * 4

5 < 6
10 > 3
10 == 10
10 /= 9 -- NOT EQUAL TO
10^3 -- EXPONANTIONAL

-- FUNNCTIONS

--name --arg
devideByTwo: Float -> Float
devideByTwo n =
  n / 2
-- body