myApp.controller('BookTimeLineCtrl', function (dataService, $scope, $uibModal) {

    $scope.bookDic = {};
    $scope.bookTitle = {};
    $scope.selectedBook = { altTitle : 'test'};
    $scope.maxBooksPerYear = 0;
    $scope.userfilter='';

    $scope.saveBook = function (book) {
        $scope.selectedBook = book;
    }

    $scope.bookDicFilter = function (bookArr) {
        return true;
        console.log(bookArr);
        for (var i = 0; i < bookArr.length; i++) {
            return (!$scope.userfilter) || (bookArr[i].subjects.contains($scope.userfilter));
        }
    }

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

    
    $scope.title = function () {
        console.log('inside the loop ' + dataService.length);
        for (var i = 0; i < dataService.length; i++) {
            var bookIte = dataService[i];
            if (!$scope.bookTitle[bookIte.title]) {
                $scope.bookTitle[bookIte.title] = [];
            }
            $scope.bookTitle[bookIte.title].push(bookIte);

        }
       
    }
    $scope.title();

   
    $scope.background = function () {

        var change=1;
        console.log(change + ' RANDOM');
    
            return { change };
    }
    $scope.background();
  
  
    
});

