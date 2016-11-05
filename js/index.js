/**
 * Created by Administrator on 2016/9/17.
 */
window.onload = function(){
    alert(1);
    var aTab = document.getElementsByClassName('tabControl');

    for (var i=0;i<aTab.length;i++){
        aTab[i].onmouseover = function(){
            addClass(this,'tab_active');
        }
        aTab[i].onmouseot = function(){
            removeClass(this,'tab_active');
        }
    }
    function addClass(obj,ClassName){
        if(obj.className == ''){
            obj.className = ClassName;
        } else{
            var arrClassName = obj.className.split(' ');
            var _index = arrIndexof(arrClassName,ClassName);
            if(_index == -1){
                obj.className += ' '+ ClassName ;
            }
        }
    }

    function removeClass(obj,ClassName){
        if(obj.className != ''){
            var arrClassName = obj.className.split(' ');
            var _index = arrIndexof(arrClassName,ClassName);
            if( _index != -1 ){
                arrClassName.splice(_index,1);
                obj.className = arrClassName.join(' ');
            }
        }
    }
    function arrIndexof(arr,v){
        for(var i=0;i<arr.length;i++){
            if(arr[i] == v){
                return i;
            }
        }
        return -1;
    }
};