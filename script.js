const CELL_DIMENSION = 10

const _board = [
    [1, 'H', 0, 1],
    [1, 1, 0, 1],
    [1, 1, 0, 1],
    [1, 0, 0, 1]
]

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

renderBoard()