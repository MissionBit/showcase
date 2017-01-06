/*TO DO:

1. Users should be able to return a piece to its starting
    1a. without ending their turn.
2. Users shouldn't be able to move a piece through other pieces (except for horses)
3. Users should know whose turn it is.
4. Users should know which pieces have been captured.
5. Implement castling.
6. Implement pawn change.

*/
var selectedPiece;
var state = "decide";
var prevPos;
var turn = "white";
//if statement of validate rook move
var allowedMove = {
    "rook": function (curXY, newXY, selectedPiece) {
        console.log(curXY, newXY);
        //x or y same = valid
        if (curXY.x === newXY.x) {
            return true
        }
        if (curXY.y === newXY.y) {
            return true
        }
    },
    "bishop": function (curXY, newXY, selectedPiece) {
        console.log(curXY, newXY);

        //x or y same = valid
        if (curXY.x - newXY.x === curXY.y - newXY.y) {
            return true
        }

        for (i = 1; i <= 7; i++) {
            if ((newXY.x === curXY.x + i) && (newXY.y === curXY.y - i)) {
                return true
            }
            if ((newXY.x === curXY.x - i) && (newXY.y === curXY.y + i)) {
                return true
            }
        }
    },
    "horse": function (curXY, newXY, selectedPiece) {
        console.log(curXY, newXY);
        if ((newXY.x === curXY.x - 2) && (newXY.y === curXY.y - 1)) {
            return true
        }
        if ((newXY.x === curXY.x - 2) && (newXY.y === curXY.y + 1)) {
            return true
        }
        if ((newXY.x === curXY.x + 2) && (newXY.y === curXY.y - 1)) {
            return true
        }
        if ((newXY.x === curXY.x + 2) && (newXY.y === curXY.y + 1)) {
            return true
        }
        if ((newXY.x === curXY.x - 1) && (newXY.y === curXY.y + 2)) {
            return true
        }
        if ((newXY.x === curXY.x + 1) && (newXY.y === curXY.y + 2)) {
            return true
        }
        if ((newXY.x === curXY.x - 1) && (newXY.y === curXY.y - 2)) {
            return true
        }
        if ((newXY.x === curXY.x + 1) && (newXY.y === curXY.y - 2)) {
            return true
        }
    },
    "queen": function (curXY, newXY, selectedPiece) {
        console.log(curXY, newXY);
        if (curXY.x === newXY.x) {
            return true
        }
        if (curXY.y === newXY.y) {
            return true
        }
        if (curXY.x - newXY.x === curXY.y - newXY.y) {
            return true
        }

        for (i = 1; i <= 7; i++) {
            if ((newXY.x === curXY.x + i) && (newXY.y === curXY.y - i)) {
                return true
            }
            if ((newXY.x === curXY.x - i) && (newXY.y === curXY.y + i)) {
                return true
            }
        }
    },
    "king": function (curXY, newXY, selectedPiece) {
        console.log(curXY, newXY);
        if ((newXY.x === curXY.x - 1) && (newXY.y === curXY.y)) {
            return true
        }
        if ((newXY.x === curXY.x - 1) && (newXY.y === curXY.y + 1)) {
            return true
        }
        if ((newXY.x === curXY.x - 1) && (newXY.y === curXY.y - 1)) {
            return true
        }
        if ((newXY.x === curXY.x + 1) && (newXY.y === curXY.y)) {
            return true
        }
        if ((newXY.x === curXY.x + 1) && (newXY.y === curXY.y + 1)) {
            return true
        }
        if ((newXY.x === curXY.x + 1) && (newXY.y === curXY.y - 1)) {
            return true
        }
        if ((newXY.x === curXY.x) && (newXY.y === curXY.y - 1)) {
            return true
        }
        if ((newXY.x === curXY.x) && (newXY.y === curXY.y + 1)) {
            return true
        }
        if ((newXY.x === curXY.x) && (newXY.y === curXY.y)) {
            return true
        }
    },
    "pawn": function (curXY, newXY, selectedPiece) {
        console.log(curXY, newXY);
        if ($(selectedPiece).hasClass("blackp") && (newXY.x === curXY.x) && (newXY.y === curXY.y + 1)) {
            return true
        }
        if ($(selectedPiece).hasClass("whitep") && (newXY.x === curXY.x) && (newXY.y === curXY.y - 1)) {
            return true
        }
        if ($(selectedPiece).hasClass("blackp") && (newXY.x === curXY.x) && (curXY.y === 1) && (newXY.y === curXY.y + 2)) {
            return true
        }
        if ($(selectedPiece).hasClass("whitep") && (newXY.x === curXY.x) && (curXY.y === 6) && (newXY.y === curXY.y - 2)) {
            return true
        }
    }
};
//get x and y coord
function getXY(elem) {
        return {
            x: elem.cellIndex,
            y: elem.parentNode.rowIndex
        };
    }
    //get piece in below
function luPiece(newXY) {
    return $("table").get(0).rows[newXY.y].cells[newXY.x].firstChild
}

function isSameSpot(lhs, rhs) {
    return ((lhs.x === rhs.x) && (lhs.y === rhs.y))
}


$(document).ready(function () {
    //on click. piece needs to be in table>td>img
    $('table').on("click", "td > img", function (event) {

        // Select the piece
        if (state === "decide") {

            //User can only mov etheir color's piece
            if (turn === "black" && !$(event.currentTarget).hasClass("blackp")) {
                return
            } else if (turn === "white" && !$(event.currentTarget).hasClass("whitep")) {
                return
            }
            //clicked/current piece is selectedPiece
            selectedPiece = event.currentTarget;
            //get xy of previous position
            prevPos = getXY($(selectedPiece).parent()[0]);
            //changes state to "drag"
            state = "drag";
            //compatibility
            $(document.body).append($(selectedPiece));
            $(selectedPiece).offset({
                top: event.pageY,
                left: event.pageX
            });
            //end event
            event.stopPropagation();
        }
    });
    //function that runs after clicking on piece and state is "drag"
    $(window).on("click", function (event) {
        // Drop the piece
        if (state === "drag" && event.target === selectedPiece) {

            //original position
            var original = $(selectedPiece).offset({
                top: event.pageY,
                left: event.pageX
            });

            //allow move with attr piece
            validF = allowedMove[$(selectedPiece).attr("piece")]
                //hide piece on board
            $(selectedPiece).hide();
            //check element under cursor
            var el = document.elementFromPoint(event.clientX, event.clientY);
            console.log(el);
            getXY($(el).parent().get(0))
                //show piece with/ coor on mouse
            $(selectedPiece).show();

            // if user clicked an image, get the table cell holding it
            if (el.tagName === "IMG") {
                el = $(el).parent().get(0)
            }

            // moving to same spot?
            //  do nothing
            var candidatePos = getXY(el);

            if (validF(prevPos, candidatePos, selectedPiece)) {
                //check if capturing opposing piece
                if (turn === "black") {
                    if ($("img", el).hasClass('whitep')) {
                        $("img", el).remove();
                        console.log("captured white piece");
                    }
                } else if (turn === "white") {
                    if ($("img", el).hasClass('blackp')) {
                        $("img", el).remove();
                        console.log("captured black piece");
                    }
                }
            } else if (!isSameSpot(prevPos, candidatePos)) {
                alert("Invalid Move");

                return false;
            }


            // Drop the piece and end the turn
            if (el.tagName === 'TD' && !el.querySelector('img')) {
                $(selectedPiece).css({
                    top: "auto",
                    left: "auto"
                });
                $(el).append($(selectedPiece));
                if (!isSameSpot(prevPos, candidatePos)) {
                        //switch turn
                        turn = turn === "black" ? "white" : "black";
                        //                if (turn === black) {
                        //                    turn = "white";
                        //                } else {
                        //                    turn = "black";
                        //                }
                        console.log("new turn!");
                    }
                    //change state back to "decide"
                state = "decide";
                //end event
                event.stopPropagation();
            }
        }
    });
    //state = "drag" ---> selected piece coordinates
    $(window).on("mousemove", function (event) {
        if (state === "drag") {
            $(selectedPiece).offset({
                top: event.pageY,
                left: event.pageX
            })
        }
    });
});