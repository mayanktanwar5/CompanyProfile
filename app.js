// /**
//  * Created by Mak on 4/29/17.
//  */
//
var sprout = angular.module('sprout',['ui.bootstrap']);

sprout.controller('landingPage', function($scope,$sce){

    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;

    $scope.images =[{
                    "type":"image",
                     "src":"../images/bigdata1.jpg"
                    },
                    {
                        "type":"image",
                        "src":"../images/iot1.jpg"
                    } ,
                    {
                        "type":"image",
                        "src":"../images/cloud1.jpg"
                    },
                    {
                        "type":"video",
                        "src":"https://www.youtube.com/embed/QSIPNhOiMoE"
                    }
                    ]

    $scope.products=[{"title":"Cloud Computing","data":"Yes, everything we do is hosted on cloud!", "src":"../images/cloud.jpg"},
        {"title":"Internet of Things","data":"We are the data crunchers!", "src":"../images/iot.jpg"},
        {"title":"Big Data","data":"Oh, we meant, Internet of Everything!", "src":"../images/bigdata.jpg"}];

    $scope.tweets =[{"name":"@Iot","data":"It's Official: The Internet Of Things Takes Over Big Data As The Most Hyped Technology. - Forbes"}
    ,{"name":"@bigData","data":"In God we all trust, all others must bring data. - W. Edwards Deming"},
        {"name":"@cloud","data":"I don’t need a hard disk in my computer if I can get to the server faster… carrying around these non-connected computers is byzantine by comparison.” – Steve Jobs"}]

    $scope.trust = function(url){

        return $sce.trustAsResourceUrl(url);
    }


});

sprout.filter("trustUrl", ['$sce', function ($sce) {
    return function (recordingUrl) {
        return $sce.trustAsResourceUrl(recordingUrl);
    };
}

]);


