const CELL_DIMENSION = 10

let _board = null

const init = () => {
    _board = makeBoardArray(10)
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