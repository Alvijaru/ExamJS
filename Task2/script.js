/* ------------------------------ TASK 2 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class Movie {
    constructor(title, director, budget) {
      this.title = title;
      this.director = director;
      this.budget = budget;
     
    };
    expensive = function () {
     if (this.budget > 100000000) {
     return true;
    } else {
      return false;
    }
    } 
  };
  
  const MovieFeatures = new Movie('Avatar.The way of water', 'James Cameron', 250000000);
  
  MovieFeatures.expensive();
  console.log(MovieFeatures.expensive());