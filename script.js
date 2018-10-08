const CELL_DIMENSION = 10
const BOARD_DIMENSION = 20
const HALF_BOARD_DIMENSION = Math.round(BOARD_DIMENSION / 2) - 1

let _board = null

const _snake = [
    { x: HALF_BOARD_DIMENSION, y: HALF_BOARD_DIMENSION },
    { x: HALF_BOARD_DIMENSION, y: HALF_BOARD_DIMENSION + 1 },
    { x: HALF_BOARD_DIMENSION, y: HALF_BOARD_DIMENSION + 2 }
]

const init = () => {
    _board = makeBoardArray(BOARD_DIMENSION)
    _snake.forEach((snakePosition, i) => {
        if(i === 0){
            _board[snakePosition.y][snakePosition.x] = 'H'
        }else{
            _board[snakePosition.y][snakePosition.x] = 0
        }
    })

    renderBoard()
}

const makeBoardArray = (dimension) => {
    return (new Array(dimension))
        .fill(1)
        .map(
            (e, i, a) => (new Array(dimension)).fill(1)
        )
}

const renderBoard = () => {
    _board.forEach(renderRow)
}

const renderRow = (row) => {
    const rowDiv = document.createElement('div')

    rowDiv.style.width = CELL_DIMENSION * _board[0].length + 'px'
    rowDiv.style.height = CELL_DIMENSION + 'px'

    row.forEach((cell, i, a) => renderCell(cell, rowDiv))

    document.body.appendChild(rowDiv)
}

const renderCell = (cell, rowDiv) => {
    const cellDiv = document.createElement('div')

    cellDiv.style.width = CELL_DIMENSION + 'px'
    cellDiv.style.height = CELL_DIMENSION + 'px'
    cellDiv.style.display = 'inline-block'

    switch (cell) {
        case 0:
            cellDiv.style.backgroundColor = 'black'
            break
        case 1:
            cellDiv.style.backgroundColor = 'grey'
            break
        case 'H':
            cellDiv.style.backgroundColor = 'green'
            break
    }

    rowDiv.appendChild(cellDiv)
}

init()