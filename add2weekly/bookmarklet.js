(function(d){

    var iSrc= 'http://braziljs.org/services/add2weekly/mdl-add2weekly.php?',
    create= function(t, l, c, dv){
        var i= document.createElement('iframe');
        c.appendChild(dv);
        i.src= iSrc+"t="+t+"&l="+l.replace(/http:\/\/|https:\/\//i, '');
        dv.style.position= 'fixed';
        dv.style.background= 'white';
        dv.style.top= '0px';
        dv.style.left= '0px';
        dv.style.zIndex= '99999999';
        dv.style.margin= '0px';
        dv.style.width= '550px';
        dv.style.height= '450px';
        dv.style.boxShadow= '0px 0px 30px black';
        dv.id= 'brazilJS-add2wkly';
        i.style.border= 'none';
        i.style.height= '100%';
        i.style.width= '100%';

        dv.innerHTML= "<input id=braziljsa2w-closeBtn type=button value=Close style='' />";

        dv.appendChild(i);

        d.getElementById('braziljsa2w-closeBtn').onclick= function(){
            dv.parentNode.removeChild(dv);
        };

        /*i.onload= function(){
            i.contentWindow.ref= d;
        };*/
    };
    create(d.title, location.toString(), d.body||d, d.createElement('div'));
})(document);