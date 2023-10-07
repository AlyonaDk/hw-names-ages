const names = ["Semen", "Ivan", "Petr", "Tanja"]
const ages = [18, 27, 74, 34]
const namesAges = []
const namesAges2 = []
for (let i = 0; i < names.length; i++) {
    namesAges.push(names[i]+ " " + ages[i] + " years")
}
for (let i = 0; i < names.length; i++) {
    namesAges2[i] = `${names[i]} ${ages[i]} years` 
} 
console.log(namesAges);
console.log(namesAges2);
