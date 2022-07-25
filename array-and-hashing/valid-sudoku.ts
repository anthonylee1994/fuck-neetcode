function squareOf(x: string, y: string): string {
    return `${Math.floor(Number(x) / 3)}:${Math.floor(Number(y) / 3)}`;
}

function isValidSudoku(board: string[][]): boolean {
    const rowMap = new Map<string, Set<string>>();
    const columnMap = new Map<string, Set<string>>();
    const squareMap = new Map<string, Set<string>>();

    for (let i in board) {
        for (let j in board[i]) {
            if (board[i][j] === ".") {
                continue;
            }

            const square = squareOf(i, j);

            if (!rowMap.has(i)) rowMap.set(i, new Set<string>());
            if (!columnMap.has(j)) columnMap.set(j, new Set<string>());
            if (!squareMap.has(square)) squareMap.set(square, new Set<string>());

            const currentRow = rowMap.get(i)!;
            const currentColumn = columnMap.get(j)!;
            const currentSquare = squareMap.get(square)!;

            if (currentRow.has(board[i][j]) || currentColumn.has(board[i][j]) || currentSquare.has(board[i][j])) {
                return false;
            }

            currentRow.add(board[i][j]);
            currentColumn.add(board[i][j]);
            currentSquare.add(board[i][j]);
        }
    }

    return true;
}
