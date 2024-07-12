
const watches = [
  {
    image: '/ahh3.jpg',
    description: 'Explore the new features of the Apple Watch Series 7.'
  },
  {
    image: '/ahh3.jpg',
    description: 'Discover the sleek design and advanced health tracking.'
  },
  {
    image: '/ahh3.jpg',
    description: 'Stay connected with the Apple Watch Series 7.'
  }
];

let currentWatch = 0;
const watchImage = document.getElementById('watchImage');
const watchDescription = document.getElementById('watchDescription');

function changeWatch() {
  currentWatch = (currentWatch + 1) % watches.length;
  const watch = watches[currentWatch];
  watchImage.style.backgroundImage = `url('${watch.image}')`;
  watchDescription.textContent = watch.description;
}
