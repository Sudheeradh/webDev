const nums = []
let size = 4;

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

console.log(random)