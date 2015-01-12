var demoApp = angular.module("demoApp", []);

demoApp.factory("avengers", function(){
	var avengersData = {};
	avengersData.cast = [
    {
      name: 'Robert Downey Jr.',
      character: 'Tony Stark / Iron Man'
    },
    {
      name: 'Chris Evans',
      character: 'Steve Rogers / Captain America'
    },
    {
      name: 'Mark Ruffalo',
      character: 'Bruce Banner / The Hulk'
    },
    {
      name: 'Chris Hemsworth',
      character: 'Thor'
    },
    {
      name: 'Scarlett Johansson',
      character: 'Natasha Romanoff / Black Widow'
    },
    {
      name: 'Jeremy Renner',
      character: 'Clint Barton / Hawkeye'
    },
    {
      name: 'Tom Hiddleston',
      character: 'Loki'
    },
    {
      name: 'Clark Gregg',
      character: 'Agent Phil Coulson'
    },
    {
      name: 'Cobie Smulders',
      character: 'Agent Maria Hill'
    },
    {
      name: 'Stellan Skarsgård',
      character: 'Selvig'
    },
    {
      name: 'Samuel L. Jackson',
      character: 'Nick Fury'
    },
    {
      name: 'Gwyneth Paltrow',
      character: 'Pepper Potts'
    },
    {
      name: 'Paul Bettany',
      character: 'Jarvis (voice)'
    },
    {
      name: 'Alexis Denisof',
      character: 'The Other'
    },
    {
      name: 'Tina Benko',
      character: 'NASA Scientist'
    }
  ];

  return avengersData;

});

demoApp.controller("avengersCtrl", ["$scope", "avengers", function($scope, avengers) {
	$scope.avengers = avengers;
	$scope.addNewActor = function(name, character) {
		$scope.avengers.cast.push({name: name, character: character});
		$scope.actor.name = "";
		$scope.actor.character = "";
	};

	$scope.removeActor = function(index) {
		$scope.avengers.cast.splice(index, 1);
	};
}]);



