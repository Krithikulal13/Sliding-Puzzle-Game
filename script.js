
    const puzzle = document.getElementById('puzzle');

    puzzle.addEventListener('click', (e) => {
      const tile = e.target;
      if (!tile.classList.contains('tile') || tile.classList.contains('empty')) return;

      const emptyTile = document.querySelector('.tile.empty');
      const tiles = [...puzzle.children];
      const tileIndex = tiles.indexOf(tile);
      const emptyIndex = tiles.indexOf(emptyTile);

      const validMoves = [tileIndex - 1, tileIndex + 1, tileIndex - 3, tileIndex + 3];
      // Prevent moving across rows
      if ((tileIndex % 3 === 0 && emptyIndex === tileIndex - 1) ||
          (tileIndex % 3 === 2 && emptyIndex === tileIndex + 1)) return;

      if (validMoves.includes(emptyIndex)) {
        puzzle.insertBefore(tile, emptyTile.nextSibling);
      }
    });