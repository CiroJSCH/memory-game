import { cardsContainer, game, header, inGameMenu, inGameMobileMenu, mainMenu, movesCount, newGameButton, restartGameButton, } from '../globals.js';
import { startTimer, stopTimer } from '../timeCounter.js';
import newGame from '../newGame.js';
import icons from '../../data/icons.js';
import restartGame from '../restartGame.js';
import { getBestTime, updateGeneralStats, updateBestTime, updateBestMoves, getBestMove, } from '../stats/updateStats.js';
import compareTimes from '../stats/compareTimes.js';
const startGame = (selectedIcon, selectedDifficulty) => {
    updateGeneralStats(selectedDifficulty, selectedIcon);
    const selectedIcons = icons[selectedIcon];
    inGameMenu.classList.replace('hidden', 'flex');
    header.classList.replace('justify-center', 'justify-between');
    inGameMobileMenu.classList.replace('hidden', 'flex');
    mainMenu.classList.replace('flex', 'hidden');
    game.classList.replace('hidden', 'flex');
    let cards = 16;
    let moves = 0;
    let foundPairs = 0;
    newGameButton.addEventListener('click', () => newGame());
    restartGameButton.addEventListener('click', () => restartGame(selectedIcon, selectedDifficulty));
    if (selectedDifficulty === 'normal') {
        cardsContainer.classList.add('sm:grid-cols-5');
        cards = 20;
    }
    else if (selectedDifficulty === 'hard') {
        cardsContainer.classList.add('sm:grid-cols-6');
        cards = 24;
    }
    const randomIcons = [
        ...selectedIcons.slice(0, cards / 2),
        ...selectedIcons.slice(0, cards / 2),
    ].sort(() => Math.random() - 0.5);
    const sortedCards = randomIcons;
    const tempFragment = document.createDocumentFragment();
    for (let i = 0; i < cards; i++) {
        const card = `
        <div id="card-${i}" class="rounded-full cursor-pointer">
            <div
              class="relative shadow-xl transition-all duration-500  bg-secondaryColor text-text h-[65px] xs:h-[80px] sm:h-[90px] md:h-[100px] lg:h-[110px] w-[65px] xs:w-[80px] sm:w-[90px] md:w-[100px] lg:w-[110px] col-span-1 row-span-1 rounded-full"
            >
              <div class="front absolute inset-0 flex items-center justify-center">
                ${sortedCards[i]}
              </div>

              <div
                class="back absolute transition-[opacity] duration-200 opacity-100 inset-0 h-full w-full rounded-full bg-text text-center flex items-center justify-center border-2 border-primaryColor"
              >
                <i class="fa-regular fa-circle-question fa-2xl text-accent"></i>
              </div>
            </div>
          </div> 
      `;
        tempFragment.appendChild(document.createRange().createContextualFragment(card));
    }
    cardsContainer.appendChild(tempFragment);
    const selectedCards = [];
    const checkIfMatch = () => {
        const correctMatchSound = document.getElementById('correct-match');
        correctMatchSound.pause();
        correctMatchSound.currentTime = 0;
        const frontCard1 = selectedCards[0].querySelector('.front');
        const frontCard2 = selectedCards[1].querySelector('.front');
        const backCard1 = selectedCards[0].querySelector('.back');
        const backCard2 = selectedCards[1].querySelector('.back');
        cardsContainer.classList.add('pointer-events-none');
        if (frontCard1.innerHTML === frontCard2.innerHTML) {
            correctMatchSound.play();
            selectedCards[0].classList.replace('cursor-pointer', 'cursor-default');
            selectedCards[1].classList.replace('cursor-pointer', 'cursor-default');
            selectedCards[0].firstElementChild.classList.replace('bg-secondaryColor', 'bg-primaryColor');
            selectedCards[0].firstElementChild.classList.add('border-2', 'border-accent');
            selectedCards[1].firstElementChild.classList.replace('bg-secondaryColor', 'bg-primaryColor');
            selectedCards[1].firstElementChild.classList.add('border-2', 'border-accent');
            foundPairs += 1;
            if (foundPairs === cards / 2) {
                const elapsedTime = document.getElementById('time-count').innerHTML;
                if (getBestTime(selectedDifficulty) !== '--') {
                    compareTimes(elapsedTime, getBestTime(selectedDifficulty), selectedDifficulty);
                }
                else {
                    updateBestTime(selectedDifficulty, elapsedTime);
                }
                if (getBestMove(selectedDifficulty) !== '--') {
                    if (moves < parseInt(getBestMove(selectedDifficulty))) {
                        updateBestMoves(selectedDifficulty, moves.toString());
                    }
                }
                else {
                    updateBestMoves(selectedDifficulty, moves.toString());
                }
                stopTimer();
                const gameFinishedModal = document.getElementById('game-finished-modal');
                gameFinishedModal.classList.replace('hidden', 'flex');
                const totalMoves = document.getElementById('total-moves');
                const totalTime = document.getElementById('total-time');
                const newGameButton = document.getElementById('new-finish-modal');
                newGameButton.addEventListener('click', () => {
                    gameFinishedModal.classList.replace('flex', 'hidden');
                    newGame();
                });
                const restartGameButton = document.getElementById('restart-finish-modal');
                restartGameButton.addEventListener('click', () => {
                    gameFinishedModal.classList.replace('flex', 'hidden');
                    restartGame(selectedIcon, selectedDifficulty);
                });
                totalMoves.innerHTML = moves.toString();
                totalTime.innerHTML = elapsedTime;
            }
            setTimeout(() => {
                cardsContainer.classList.remove('pointer-events-none');
            }, 300);
        }
        else {
            setTimeout(() => {
                backCard1.classList.replace('opacity-0', 'opacity-100');
                backCard2.classList.replace('opacity-0', 'opacity-100');
                cardsContainer.classList.remove('pointer-events-none');
            }, 850);
        }
        selectedCards.length = 0;
    };
    const flipCard = (card) => {
        const back = card.querySelector('.back');
        back.classList.replace('opacity-100', 'opacity-0');
        if (selectedCards[0] !== card &&
            !card.firstElementChild.classList.contains('bg-primaryColor')) {
            selectedCards.push(card);
            moves += 1;
            movesCount.innerHTML = moves.toString();
        }
        if (selectedCards.length === 2) {
            checkIfMatch();
        }
    };
    const cardsArray = document.querySelectorAll('[id^="card-"]');
    cardsArray.forEach((card) => {
        card.addEventListener('click', () => flipCard(card));
        const back = card.querySelector('.back');
        back.classList.replace('opacity-100', 'opacity-0');
        cardsContainer.classList.add('pointer-events-none');
        inGameMobileMenu.classList.add('pointer-events-none');
        restartGameButton.classList.add('pointer-events-none');
        setTimeout(() => {
            back.classList.replace('opacity-0', 'opacity-100');
            cardsContainer.classList.remove('pointer-events-none');
            stopTimer();
            startTimer();
            inGameMobileMenu.classList.remove('pointer-events-none');
            restartGameButton.classList.remove('pointer-events-none');
        }, 3500);
    });
};
export default startGame;
