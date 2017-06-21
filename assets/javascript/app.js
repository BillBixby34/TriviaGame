//  Declare choice 0 or 1. it's random. will use for true/false
 // var randomNumber = Math.floor(Math.random() *2);
  //will either be a just a pokemon, or also a noun
  var quiz = [
  {
  	"name": "Drowzee",
  	"answer": "pokémon",
  	"showAnswer": "A pokémon" 
  }

  {
  	"name": "Onyx",
  	"answer": "poké-sound",
  	"showAnswer": "A pokémon" 
  }

    {
  	"name": "Wheezing",
  	"answer": "poké-sound",
  	"showAnswer": "A pokémon" 
  }
    {
  	"name": "Horsey",
  	"answer": "poké-sound",
  	"showAnswer": "A pokémon" 
  }

  {
  	"name": "Muk",
  	"answer": "pokémon",
  	"showAnswer": "A pokémon" 
  }

  ]

  $(document).ready(function() {
  	var select = quiz[Math.floor(Math.random() *6)];
  	type = select["answer"];//rre-evaluate
  	showAnswer = select["showAnswer"];
  	$("#name").html(select["name"]);
  	$("#generate").hide();
  	$("#result").hide();
  

  });