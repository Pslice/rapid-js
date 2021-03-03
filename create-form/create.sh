#!/bin/bash
echo "Please select style:"
echo "1 - Bootstrap"
echo "2 - Bulma"
echo "3 - Tailwind"
read style
case $style in
    1)
    echo "The OG Boot"
    ;;
    2)
    echo "DBZ fan huh?"
    ;;
    3)
    echo "Tailwinder"
    ;;
    *)
    echo "I didn't get that one"
    ;;
esac
function Bootsrap {

}
function Bulma {

}
function Tailwind {

}