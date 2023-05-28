import updateIcon from './iconPicker.js';
import updateDifficulty from './difficultyPicker.js';
import updateColor from './colorPicker.js';
import icons from '../data/icons.js';
import { startTimer } from './timeCounter.js';

const movesCount = document.getElementById('moves-count');

type Icon = 'programming' | 'animals' | 'sports';

const main = () => {
  let selectedIcon: Icon = 'programming';
  let selectedDifficulty = 'easy';
  updateIcon((icon: Icon) => {
    selectedIcon = icon;
  });

  updateDifficulty((difficulty) => {
    selectedDifficulty = difficulty;
  });

  updateColor();

  const startGameButton = document.getElementById('start-game-button');

  startGameButton.addEventListener('click', () => {
    const mainMenu = document.getElementById('main-menu');
    const inGameMenu = document.getElementById('in-game-menu');
    const inGameMobileMenu = document.getElementById('in-game-mobile-menu');
    const header = document.getElementById('header');
    const game = document.getElementById('game');
    const selectedIcons = icons[selectedIcon];

    inGameMenu.classList.replace('hidden', 'flex');
    header.classList.add('md:justify-between');
    inGameMobileMenu.classList.replace('hidden', 'flex');
    mainMenu.classList.replace('flex', 'hidden');
    game.classList.replace('hidden', 'flex');

    const cardsContainer = document.getElementById('cards-container');
    let cards = 16;
    let moves = 0;
    let foundPairs = 0;
    startTimer();

    if (selectedDifficulty === 'normal') {
      cardsContainer.classList.add('sm:grid-cols-5');
      cards = 20;
    } else if (selectedDifficulty === 'hard') {
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
              class="relative shadow-xl transition-all duration-500  bg-secondaryColor text-text h-[70px] sm:h-[80px] md:h-[100px] lg:h-[110px] w-[70px] sm:w-[80px] md:w-[100px] lg:w-[110px] col-span-1 row-span-1 rounded-full"
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
      tempFragment.appendChild(
        document.createRange().createContextualFragment(card),
      );
    }
    cardsContainer.appendChild(tempFragment);

    const selectedCards: Element[] = [];

    const checkIfMatch = () => {
      const frontCard1 = selectedCards[0].querySelector('.front');
      const frontCard2 = selectedCards[1].querySelector('.front');

      const backCard1 = selectedCards[0].querySelector('.back');
      const backCard2 = selectedCards[1].querySelector('.back');

      if (frontCard1.innerHTML === frontCard2.innerHTML) {
        const correctMatchSound = document.getElementById(
          'correct-match',
        ) as HTMLAudioElement;
        correctMatchSound.play();

        selectedCards[0].classList.replace('cursor-pointer', 'cursor-default');
        selectedCards[1].classList.replace('cursor-pointer', 'cursor-default');

        selectedCards[0].firstElementChild.classList.replace(
          'bg-secondaryColor',
          'bg-primaryColor',
        );
        selectedCards[0].firstElementChild.classList.add(
          'border-2',
          'border-accent',
        );
        selectedCards[1].firstElementChild.classList.replace(
          'bg-secondaryColor',
          'bg-primaryColor',
        );
        selectedCards[1].firstElementChild.classList.add(
          'border-2',
          'border-accent',
        );
        foundPairs += 1;

        if (foundPairs === cards / 2) {
          console.log('Juego terminado');
        }
      } else {
        setTimeout(() => {
          backCard1.classList.replace('opacity-0', 'opacity-100');
          backCard2.classList.replace('opacity-0', 'opacity-100');
        }, 1000);
      }
      selectedCards.length = 0;
    };

    const flipCard = (card: any) => {
      const back = card.querySelector('.back');
      back.classList.replace('opacity-100', 'opacity-0');
      if (
        selectedCards[0] !== card &&
        !card.firstElementChild.classList.contains('bg-primaryColor')
      ) {
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
    });
  });
};

main();
