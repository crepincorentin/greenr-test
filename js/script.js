const solutions = [
    { id : 1, title : 'Rénovation énergétique', subtitle : '20 millions de logements à rénover d\'ici 2050', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh.', image: 'images/Frame 491.png' },
    { id : 2, title : 'Énergie solaire', subtitle : '100% d\'énergies renouvelables d\'ici 2050', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh.', image: 'images/Frame 491.png' },
    { id : 3, title : 'Adapation climatique', subtitle : 'Environ 65%* du parc exposé à un risque très important d\'ici 2050', text: 'Nous connaissons déjà le projet d’adaptation de tous les logements; nous pouvons guider votre action et celles de vos clients', image: 'images/Frame 491.png' }
];

const solutionsContainer = document.querySelector('.homemiddle-carousel');
let selectedSolution = null;
const defaultSolutionId = 1;


solutions.forEach(solution => {
    const solutionElement = document.createElement('div');
    solutionElement.dataset.id = solution.id;
    solutionElement.classList.add('homemiddle-carousel-solution');
    solutionElement.innerHTML = `
        <h3>${solution.title}</h3>
        <p>${solution.subtitle}</p>
    `;
    solutionsContainer.appendChild(solutionElement);

    solutionElement.addEventListener('click', () => {

        if (selectedSolution) {
            selectedSolution.classList.remove('selected');
        }

        selectedSolution = solutionElement;

        selectedSolution.classList.add('selected');



        const solutionDetails = document.querySelector('.homemiddle-text-content');
        solutionDetails.innerHTML = `
            <h3>${solution.title}</h3>
            <h2><span>Accélérer votre impact</span> grâce à nos solutions</h2>
            <p>${solution.text}</p>
            <button>En savoir plus</button>
            <h4 class="homemiddle-text-info">*Vagues de chaleur et îlots de chaleur urbains - Scénario RCP 8.5 le plus pessimiste; “Adaptation du bâtiment dans Transition(s) 2050” - Ademe </h4>

        `;

        const solutionImage = document.querySelector('.homemiddle-text-img');
        solutionImage.src = solution.image;

        solutionImage.innerHTML = `
            <img src="${solution.image}" alt="${solution.title}" />
        `;
    });

    // Select the default solution
    if (solution.id === defaultSolutionId) {
        solutionElement.classList.add('selected');
        selectedSolution = solutionElement;

        // Update the solution details
        const solutionDetails = document.querySelector('.homemiddle-text-content');
        solutionDetails.innerHTML = `
            <h3>${solution.title}</h3>
            <h2><span>Accélérer votre impact</span> grâce à nos solutions</h2>
            <p>${solution.text}</p>
            <button>En savoir plus</button>
        `;

        const solutionImage = document.querySelector('.homemiddle-text-img');
        solutionImage.innerHTML = `
            <img src="${solution.image}" alt="${solution.title}" />
        `;
    }
});


// Navbar toggle

const toggleButton = document.querySelector('.navbar-toggle');
const navbar = document.querySelector('.navbar');

toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('active');
    toggleButton.classList.toggle('active');
});



