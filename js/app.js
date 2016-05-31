var portfolioApp = angular.module("Port-App", []);
portfolioApp.controller("PortfolioController", ['$scope', function($scope) {

  $scope.projects = [
    "Project 1",
    "Project 2",
    "Project 3"
  ];
  $scope.dispProjects = false;
  $scope.dispAboutMe = true;
  $scope.dispContact = false;

  $scope.showAboutMe = function() {
    $scope.dispAboutMe = true;
    $scope.dispProjects = false;
    $scope.dispContact = false;
  };
  $scope.showProjects = function() {
    $scope.dispProjects = true;
    $scope.dispAboutMe = false;
    $scope.dispContact = false;
  };
  $scope.showContact = function() {
    $scope.dispContact = true;
    $scope.dispAboutMe = false;
    $scope.dispProjects = false;
  }
}]);
