angular.module("display-mask-cpf-cnpj", []);

angular.module('display-mask-cpf-cnpj')
    .directive('displayCpfCnpj', ['displayMaskCpfCnpjService', '$timeout', function (displayMaskCpfCnpjService, $timeout) {
        return {
            restrict: 'AE',
            scope: {
                displayCpfCnpj: '@',
            },
            link: function (scope, element, attr) {
                if (!scope.displayCpfCnpj)
                    return;

                var addMask = function addMask() {
                    var cpfcnpj = displayMaskCpfCnpjService.formatar(scope.displayCpfCnpj);
                    element.text(cpfcnpj);
                }
                $timeout(function () {
                    addMask();
                }, 100);
            }
        };
    }]);


angular.module("display-mask-cpf-cnpj").factory("displayMaskCpfCnpjService", [function () {

    var _formatar = function (nrCpfCnpj) {
        if (nrCpfCnpj.length === 11) {
            nrCpfCnpj = _mascaraCpf(nrCpfCnpj);
        } else if (nrCpfCnpj.length === 14) {
            nrCpfCnpj = _mascaraCnpj(nrCpfCnpj);
        }
        return nrCpfCnpj;
    }

    var _retirarFormatacao = function _retirarFormatacao(nrCpfCnpj) {
        nrCpfCnpj = nrCpfCnpj.replace(/(\.|\/|\-)/g, "");
    }

    var _mascaraCpf = function _mascaraCpf(valor) {
        return valor.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "\$1.\$2.\$3\-\$4");
    }

    var _mascaraCnpj = function _mascaraCnpj(valor) {
        return valor.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, "\$1.\$2.\$3\/\$4\-\$5");
    }

    return {
        formatar: _formatar
    };

}]);