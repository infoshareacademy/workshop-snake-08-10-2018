const _board = [
    [1, 1, 1, 1],
    [1, 1, 'H', 1],
    [1, 1, 0, 1],
    [1, 0, 0, 1]
]

const renderBoard = () => {
    _board.forEach(renderRow)
}

const renderRow = (row) => {
    row.forEach(renderCell)
}

const renderCell = (cell) => {
    console.log(cell)
}

renderBoard()