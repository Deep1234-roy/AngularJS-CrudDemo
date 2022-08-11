/// <reference path="angular.min.js" />

var uid = 1;
var app = angular
            .module("MyApp",[])
            .controller("MyController",function($scope){
                var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                $scope.newUser = null;
                $scope.users = [];

                //For Saving the details
                $scope.SaveUser = function(){

                    //If no user is there, just push the new user to the user array
                    if($scope.newUser.name.length >= 3){
                        if($scope.newUser.id == null){
                            uid = uid + 1;
                            $scope.newUser.id = uid;
                            $scope.users.push($scope.newUser);
                        }
                        else{
                            for( var i in $scope.users){
                                if($scope.users[i].id == $scope.newUser.id){
                                    $scope.users[i] = $scope.newUser;
                                    
                                    
                                }
                            }
                        }
                    }else if($scope.newUser.name.length < 3 ){
                        alert("The Length of the Name should be greater than 3");
                    }
                    //After adding the details of new user into user array, make new user as null
                    $scope.newUser=null;
                    
                }

                //For edit the existing details of an user
                $scope.edit = function(id){
                    for(var i in $scope.users){
                        if($scope.users[i].id == id){
                            $scope.newUser = angular.copy($scope.users[i]);
                        }
                    }
                }

                //delete the record of user
                $scope.delete = function(id){
                    for(var i in $scope.users){
                        if($scope.users[i].id == id){
                            $scope.users.splice(i,1);
                            $scope.newUser = {};
                        }
                    }
                }
            })