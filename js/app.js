var app = angular.module("shoppingcart", [])
.controller("shoppingCTR", function($scope){
    $scope.carts=[];
    $scope.products = [
        {p_id: "1", p_name: "Miss Peregrine.", p_image: "img/libro1.jpg", p_precio: 15, p_description: "Mientras investiga un misterio que le legó su abuelo, un adolescente encuentra en la costa de Gales una isla en la que habitan niños con poderes especiales y terribles enemigos que los amenazan."},
        {p_id: "2", p_name: "La llamada de Cthulhu", p_image: "img/libro2.jpg", p_precio: 95, p_description:"Hay un culto oscuro más antiguo que la humanidad y que la Tierra. Sus integrantes esperan que las estrellas estén alineadas para que el Gran Cthulhu regrese desde las profundidades del océano y reclame su reino sobre el universo."},
        {p_id: "3", p_name: "Drácula", p_image: "img/libro3.jpg", p_precio: 50, p_description: "Antes de convertirse en un vampiro, el conde Drácula era el príncipe Vlad que, al enterarse de la muerte de su amada, vendió su alma al diablo. Cuatro siglos más tarde, Jonathan Harker, un joven abogado que viaja a un castillo perdido en el este de Europa, acaba siendo capturado por el conde Drácula"},
        {p_id: "4", p_name: "Los gatos de Ulthar", p_image: "img/libro4.jpg", p_precio: 50, p_description: "El relato habla de una pareja de ancianos que gustaba de capturar y asesinar gatos. La gente de Ulthar se preocupaba mucho de que sus gatos no se acercaran a esa pequeña cabaña vieja rodeada de arboles y si sus gatos se perdían y no llegaban al día siguiente ya sabían el terrible destino que habrían sufrido."},
        {p_id: "5", p_name: "Cuentos de Barro", p_image: "img/libro5.jpg", p_precio: 50, p_description: "Los relatos que conforman Cuentos de barro, la primera obra literaria de Salarrué, se centran en la población rural del El Salvador, su vulnerabilidad, su superstición o la brutalidad que rige sus vidas. En su escritura, el autor refleja el habla local propia de los campesinos de El Salvador."},
        {p_id: "6", p_name: "El Principito", p_image: "img/libro6.jpg", p_precio: 50, p_description: "El principito es una narración corta del escritor francés Antoine de Saint-Exupéry, que trata de la historia de un pequeño príncipe que parte de su asteroide a una travesía por el universo, en la cual descubre la extraña forma en que los adultos ven la vida y comprende el valor del amor y la amistad."},
    ];
                 
    $scope.add_cart = function(product){
        if(product){
            $scope.carts.push({p_id: product.p_id, p_name: product.p_name, p_precio: product.p_precio, p_description: product.p_description});
        }   
    }
                         
    $scope.total = 0;
                 
    $scope.setTotals = function(cart){
        if(cart){
            $scope.total += cart.p_precio;
        }
    }
                 
    $scope.remove_cart = function(cart){
        if(cart){
            $scope.carts.splice($scope.carts.indexOf(cart), 1);
            $scope.total -= cart.p_precio;
        }
    }

    
});

function pagarProduct(){
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Pago realizado',
        showConfirmButton: false,
        timer: 1500
      })

      $scope.total = 0;
}