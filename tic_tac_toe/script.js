// //utility
// function log(message) {
//     console.log(`Logger: ${message}`);
// }

// //main
// const board = (function() {
//     cells = ['', '', '', '', '', '', '', '', ''];
//     winningCombos = [
//         ['1', '2', '3'],
//         ['4', '5', '6'],
//         ['7', '8', '9'],
//         ['1', '4', '7'],
//         ['2', '5', '8'],
//         ['3', '6', '9'],
//         ['1', '5', '9'],
//         ['3', '5', '7']
//     ];

//     const getBoard = () => cells;
    
//     const getWinningCombos = () => winningCombos;

//     const logBoard = () => console.log(`Game board: ${cells}`);

//     const fillCell = (index, mark) => {
//         cells[index - 1] = mark;
//         log(`Cells after filling:`);
//         console.table(cells);
//         return cells;
//     }

//     const isOccupied = function(mark) {
//         if (cells[mark - 1]) {
//             return true;
//         }
//     }

//     return {getBoard, logBoard, fillCell, isOccupied, getWinningCombos};
// })();


// const gameController = function() {
    
//     let maxRounds;
//     const setMaxRounds = (maxRoundsInput) => maxRounds = maxRoundsInput;
    
//     player1 = playerCreator('x');
//     player2 = playerCreator('o');
//     const players = [player1, player2];

//     //нужно пройтись по каждому айтему winningCombos 
//     //если все элементы (every) хотя бы одного айтема (some) равны всем элементам markedCells => вернуть тру
//     function isWinningCombo(markedCells, winningCombos) {
//         const markedSorted = [...markedCells].sort();
//         return winningCombos.some((item) => {
//             return item.length === markedSorted.length && item.every((elem, index) => elem === markedSorted[index]) 
//         });
//     }   

//     // function promptForPlayerMark(playerIndex) {
//     //     return prompt(`Mark of Player ${playerIndex + 1}`);
//     // };

//     const markCell = function(playerIndex) {
//         const allCells = document.querySelector('.tic-tac-toe');
//         log(`Player ${playerIndex + 1}, select your cell on the board`);
//         return new Promise ((resolve) => {
//             allCells.addEventListener('click', function handleClick(e) {
//                 const markedCell = e.target;
//                 log(`Marked cell is ${markedCell}`);

//                 if (playerIndex === 0) {
//                     markedCell.classList.add('marked-p1')
//                     markedCell.textContent = 'X';
//                 }
                
//                 if (playerIndex === 1) {
//                     markedCell.classList.add('marked-p2')
//                     markedCell.textContent = 'O';
//                 }
            
//             resolve(markedCell.dataset.number);
//             });

//         });
//     }
    
//     let roundsPlayed = 0;
//     const winningCombos = board.getWinningCombos();

//     async function playRound() {
//         for (const [i, player] of players.entries()) {
//             // const markedCell = promptForPlayerMark(i);
//             const markedCell = await markCell(i);
//             console.log(player.placeMark(markedCell));
//             const markedCells = player.getAllMarkedCells();
//             log(`Marked cells of Player ${i + 1}: ${markedCells}`);
//             console.log(roundsPlayed);
//             //check for winning combination in the last round
//             if (roundsPlayed === maxRounds && isWinningCombo(markedCells, winningCombos)) {
//                 console.log(`Player ${i + 1} won!`);
//                 break;
//             }
//         }
//         roundsPlayed++;
//         playRound();
//     }
    
//     function playGame() {
//         log('Game begins!');
//             playRound();
//     }

//     return {
//         setMaxRounds, playGame
//     }
// }(); // ???

//     function playerCreator(mark) {
//         let markedCells = [];
//         // let turnsMade = 0;
//         // const addTurn = () => ++turnsMade;

//         const placeMark = (markedCell) => {
//             if (board.isOccupied(markedCell)) {
//                 //console.log('cell is occupied');
//                 markedCell = prompt(`Cell is occupied, choose a different one`);
//                 placeMark(markedCell);
//             }
//             board.fillCell(markedCell, mark);
//             log(`Placed mark on cell ${markedCell}`);
//             markedCells.push(markedCell);
//             // console.log(`Marked cells: ${markedCells}`);
//             //addTurn();
//             board.logBoard();
//             //log('Board after marking:')
//             //console.table(board.getBoard());
//             // return {index, markedCells, turnsMade}; 
//         };
//         const getMarkedCell = (markedCell) => markedCell;

//         const getAllMarkedCells = () => markedCells;

//         return {
//             placeMark,
//             getMarkedCell,
//             getAllMarkedCells
//         }
//     }

// gameController.setMaxRounds(3);
// //gameController.playGame();

// const start = document.querySelector('#start');
// start.addEventListener('click', () => {
//     gameController.playGame();
// });



// //player1 = playerCreator('x');
// // console.log(player1.placeMark(3));
// // // console.log(player1.markedCells());
// // //console.table(board.getBoard());
// // console.log(player1.placeMark(3));
// // console.log(player1.placeMark(7));


// // <!-- TODO: РАЗОБРАТЬСЯ СО СЧЧЕТЧИКОМ РАУНДОВ -->




// // <!-- Условия победы:
// // - когда сделано три хода одним из игроков + когда массив из выбранных им клеток соответствует одной из выигрышных комбинаций

// // Условия ничьи: 
// // - когда сделано три хода обоими игроками + когда массивы из выбранных клеток обоими игроками не совпадают ни с одной из выигрышных комбинаций

// // Как проходит раунд:
// // gameController.playRound()
// //     - колл к методу placeMark первым игроком => проверка, занята ли клетка, вызовом метода board.isCellOccupied?
// //         - если нет => запись выбранной клетки в массив + запись отметки игрока в ячейку массива
// //         - если да => вывод сообщения о том,что клетка занята => повторный колл к методу placeMark => запись выбранной клетки в массив + запись отметки игрока в ячейку массива
// //     - проверяется, сделано ли три хода первым игроком и является ли его комбинация выигрышной => сравнение с массивом выигрышных комбинаций:
// //             - если да, сообщение о выигрыше первым игроком
// //             - если нет, переход к следующему игроку
// //     - колл к методу placeMark вторым игроком => 
// //     все то же самое, разница только в финальной проверке:
// //     - проверяется, сделано ли три хода вторым игроком и является ли его комбинация выигрышной => сравнение с массивом выигрышных комбинаций:
// //             - если да, сообщение о выигрыше вторым игроком
// //             - если нет, сообщение о ничье -->
