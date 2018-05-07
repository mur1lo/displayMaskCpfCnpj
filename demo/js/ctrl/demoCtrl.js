angular.module("demo", ['display-mask-cpf-cnpj']);

angular.module('demo').controller('DemoController', ['$scope', DemoController]);

function DemoController($scope) {
    $scope.cpf = "99999999999";
    $scope.cnpj = "99999999999999";
}
