myApp.controller('BookTimeLineCtrl', function (dataService, $scope, $uibModal) {

    $scope.bookDic = {};
    $scope.maxBooksPerYear = 0;

    $scope.bookdatapars = {};

    $scope.init = function () {
        console.log('inside the loop ' + dataService.length);
        for (var i = 0; i < dataService.length; i++) {
            var bookIterator = dataService[i];
            if (!$scope.bookDic[bookIterator.year]) {
                $scope.bookDic[bookIterator.year] = [];
            }
            $scope.bookDic[bookIterator.year].push(bookIterator);

        }
        for (var key in $scope.bookDic) {
            if ($scope.maxBooksPerYear < $scope.bookDic[key].length) {
                $scope.maxBooksPerYear = $scope.bookDic[key].length;
            }
        }
        console.log($scope.bookDic);
        console.log($scope.maxBooksPerYear);
    }
    $scope.init();

    $scope.dosomething = function () {
        console.log('doing');
    }

    $scope.calculateBarWidthByPerc = function (numOfBooks) {
        var maxWidth = 98;
        var perc = (numOfBooks / $scope.maxBooksPerYear) * maxWidth;
        console.log(perc);
        return { width: perc + '%' };
    }


    $scope.data = function () {
       
        for (var i = 0; i < dataService.length; i++) {
            var bookdata = dataService[i];
           
            if (!$scope.bookdatapars[bookdata.fulltitle]) {
                $scope.bookdatapars[bookdata.fulltitle] = [];
                console.log('MORAN' + $scope.bookdatapars);
                console.log('MORAN' + $scope.bookdata);
            }
            $scope.bookdatapars[bookdata.fulltitle].push(bookdata);
        }
    
       
       
    }
    $scope.data();


});

