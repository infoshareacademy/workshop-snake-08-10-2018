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
    const rowDiv = document.createElement('div')

    row.forEach((cell, i, a) => renderCell(cell, rowDiv))

    document.body.appendChild(rowDiv)
}

const renderCell = (cell, rowDiv) => {
    const cellDiv = document.createElement('div')

    cellDiv.innerText = cell

    rowDiv.appendChild(cellDiv)
}

renderBoard()