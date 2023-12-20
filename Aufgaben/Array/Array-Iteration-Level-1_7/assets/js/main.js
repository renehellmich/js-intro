let fruits = ['🍇', '🍌', '🍒', '🍎']

const fruechteSaft = () => {
    fruits.forEach((element, position) => {
        console.log(position + ": " + element + "🥤");
    });

    fruits.map(value => value + "🥤")
    console.log(fruits);
}

fruechteSaft();