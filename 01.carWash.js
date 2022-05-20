function solve(arr) {

    let proggress = 0;
    for (let element of arr) {
        switch (element) {

            case `soap`:
                proggress += 10;
                break;
            case `water`:
                proggress *= 1.20;
                break;
            case `vacuum cleaner`:
                proggress *= 1.25;
                break;
            case `mud`:
                proggress *= 0.90;
                break;
        }
    }
    console.log(`The car is ${proggress.toFixed(2)}% clean.`)





}
solve(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);

console.log(`--------------------------`);
solve(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);

