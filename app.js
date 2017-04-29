// /**
//  * Created by Mak on 4/29/17.
//  */
//
var sprout = angular.module('sprout',['ui.bootstrap']);

sprout.controller('landingPage', function($scope){

    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;

    $scope.images =[{
                    "type":"image",
                     "src":"../images/image1.jpg"
                    },
                    {
                        "type":"image",
                        "src":"../images/image2.jpg"
                    } ,
                    {
                        "type":"image",
                        "src":"../images/image4.jpg"
                    },
                    {
                        "type":"video",
                        "src":"https://www.youtube.com/watch?v=7D1CQ_LOizA"
                    }
                    ]

    $scope.products=[{"title":"Big Data","data":"XYX", "src":"../images/image1.jpg"},
        {"title":"Big Data","data":"XYX", "src":"../images/image1.jpg"},
        {"title":"Big Data","data":"XYX", "src":"../images/image1.jpg"}];

});

sprout.filter("trustUrl", ['$sce', function ($sce) {
    return function (recordingUrl) {
        return $sce.trustAsResourceUrl(recordingUrl);
    };
}]);
