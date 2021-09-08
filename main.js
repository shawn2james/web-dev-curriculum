const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011 , end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989},
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for(let i=0; i<companies.length; i++) {
//     console.log(companies[i]);
// }

// FOREACH //
// applies a function on each element in an array
// companies.forEach(company => console.log(company))

// FILTER //
// creates a new array containing the elements which returns true when a condition is applied
// let canDrink = [];
// for(let i=0; i<ages.length; i++) {
//     if(ages[i] >= 21) {
//         canDrink.push(ages[i]);
//     }
// }
// console.log(canDrink);

// const canDrink = ages.filter(age => {
//     if(age >= 21) return true;
// })
// console.log(canDrink);

// const canDrink = ages.filter(age => age > =21);
// console.log(canDrink);

// const retailCompanies = companies.filter(company => {
//     if(company.category==="Retail") return true;
// })
// console.log(retailCompanies);

// const retailCompanies = companies.filter(company => company.category==="Retail");
// console.log(retailCompanies);

// const companiesIn80 = companies.filter(company => company.start>=1980 && company.start<=1989);
// console.log(companiesIn80);

// const lastedTenYears = companies.filter(company => company.end-company.start>=10);
// console.log(lastedTenYears);

// MAP
// creates a new array in which all elements are the results of applying a function on the elements of the original array
// const companyNames = companies.map(company => company.name);
// console.log(companyNames);

// const companyDetails = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
// console.log(companyDetails);

// const agesSquareDouble = ages
//     .map(age => Math.sqrt(age))
//     .map(age => age*2);
// console.log(agesSquareDouble);

// SORT
// const sortedCompanies = companies.sort((a, b) => a.start > b.start);
// console.log(sortedCompanies);

// const sortAges = ages.sort((a, b) => a-b);
// console.log(sortAges);

// REDUCE
// let ageSum = 0;
// for(let i=0; i<ages.length; i++) ageSum += ages[i];
// console.log(ageSum);

// let ageSum = ages.reduce((total, age) => total+age, 0) // 0 is the initial value of total
// console.log(ageSum);

// let totalYears = companies.reduce((total, company) => total + (company.end-company.start), 0) // 0 is the initial value of total
// console.log(totalYears);

// Combine methods
const combined = ages
    .map(age => age*2)
    .filter(age => age>=40)
    .sort((a, b) => a-b)
    .reduce((total, num) => total+num, 0);
console.log(combined);
