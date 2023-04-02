const nums = []
let size = 4;
const board = document.querySelector('#board');

for (let j = 0; j < 16; j++) {
    nums.push(j);
}

function shuffle(o) {
    for(let j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

let random = shuffle(nums).slice(0, Math.floor(size * size / 2));

for (let i = 0; i < random.length; i++) {
    random[i] += '.jpg';
}

let k = 0;
for (let i = 0; i < size; i++) {
    row = document.createElement('div');
    row.classList.add('row');
    for (let j = 0; j < size; j++) {
        cell = document.createElement('div');
        cell.classList.add('cell', k);
        row.appendChild(cell);
        k++;
    }
    board.appendChild(row);
}

console.log(random)