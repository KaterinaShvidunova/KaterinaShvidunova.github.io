(function(){
function number(a) {
    var a = prompt('Введите число');
    if(!a || isNaN(a)) {
        alert('Введите корректные данные');
        number();
    } else {
        exponent(a);
    }
}
function exponent(a,b){
    var b = prompt('Введите степень');
    if(!b || isNaN(b)) {
        alert('Введите корректные данные');
        exponent(a,b);
    } else {
        pow(a,b);
    }
}
function pow(a,b) {
    var result=a;
    if(b>0){
    for (var i=1; i<b; i++){
        result = result*a;
    }
    } else if(b==0 && a!=0){
        result = 1;
    } else if(b==0 && a==0) {
        result = 0;
    } else {
        for (var i=1; i<-b; i++){
        result = result*a;
    } 
        result=1/result;
    }
    alert(result);
}

function authorization() {
    var arr = [];
    for (var i=1; i<6; i++){
      arr[i]=prompt('Имя '+i);
		if(arr[i]=='' || arr[i]==null) {
			i--;
		}
    }
    var yourName = prompt('Введите ваше имя');
    var yourNameLowerCase =yourName.toLowerCase();
    var arrItem;
        var i=1;
    do {
        arrItem = arr[i].toLocaleLowerCase();
        if(arrItem==yourNameLowerCase){
            alert('Вы успешно прошли авторизацию, '+yourName+'!');
            break;
        } else if(i<5){
         i++;
        } else {
        alert('Ошибка авторизации');
            break;
        }
        
    } while (i<6);
    
};
	})();

