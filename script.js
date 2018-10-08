const _board = [
    [1, 1, 1, 1],
    [1, 1, 'H', 1],
    [1, 1, 0, 1],
    [1, 0, 0, 1]
]

const renderBoard = () => {
    _board.forEach(
        (row, i, a) => renderRow(row)
    )
}

const renderRow = (row) => {
    row.forEach(
        (cell, i, a) => renderCell(cell)
    )
}

const renderCell = (cell) => {
    console.log(cell)
}

renderBoard()