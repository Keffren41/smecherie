var stake = 0;
var balance = 100;

var white=false;
var black=false;
var purple=false;

function color(){
    if(white==true) {
        document.getElementById('pariu').textContent = 'Momentan pariezi pe Alb'
    } else if(black==true) {
        document.getElementById('pariu').textContent = 'Momentan pariezi pe Negru'
    } else if(purple==true) {
        document.getElementById('pariu').textContent = 'Momentan pariezi pe Mov'
    }
}

function dai(){
    const ruleta=[0,32,15,19,4,21,2,25,17,34,6,27,13,36,11,30,8,23,10,5,24,16,33,1,20,14,31,9,22,18,29,7,28,12,35,3,26];
    const rosii=[32, 19, 21, 25, 34, 27, 36, 30, 23, 5, 16, 1, 14, 9, 18, 7, 12, 3];
    if (stake>balance){
        alert('nu te tine portofelu bosule')
        stake=0;
    } else {
        var x1 = document.getElementById("numar-1");
        var x2 = document.getElementById("numar-2");
        var x3 = document.getElementById("numar-3");
        var x4 = document.getElementById("numar-4");
        var x5 = document.getElementById("numar-5");
        var x6 = document.getElementById("numar-6");
        var x7 = document.getElementById("numar-7");
        var castigator = Math.floor(Math.random() * 37);
    
        if(castigator==0){
            var p1=36;
        }
        else {
            var p1 =castigator-1;
        }
        if(p1==0){
            var p2=36;
        }
        else {
            var p2 =p1-1;
        }
        if(p2==0){
            var p3=36;
        }
        else {
            var p3 =p2-1;
        }
        if(castigator==36){
            var a1 = 0;
        }
        else {
            var a1 =castigator+1;
        }
        if(a1==36){
            var a2 = 0;
        }
        else {
            var a2 =a1+1;
        }
        if(a2==36){
            var a3 = 0;
        }
        else {
            var a3 = a2+1;
        }
    
        x1.textContent = ruleta[p3]
        x2.textContent = ruleta[p2]
        x3.textContent = ruleta[p1]
        x4.textContent = ruleta[castigator];
        x5.textContent = ruleta[a1];
        x6.textContent = ruleta[a2];
        x7.textContent = ruleta[a3];
    
    
    
    
        if(ruleta[castigator]==0)
        {
            x4.classList.remove("rosu")
            x4.classList.remove("negru")
            x4.classList.add("verde")
        } 
        else if(rosii.includes(ruleta[castigator]))
        {
            x4.classList.remove("verde")
            x4.classList.remove("negru")
            x4.classList.add("rosu")
        } 
        else {
            x4.classList.remove("rosu")
            x4.classList.remove("verde")
            x4.classList.add("negru")
        }
    
    
    
    
        if(ruleta[p1]==0)
        {
            x3.classList.remove("rosu")
            x3.classList.remove("negru")
            x3.classList.add("verde")
        } 
        else if(rosii.includes(ruleta[p1]))
        {
            x3.classList.remove("verde")
            x3.classList.remove("negru")
            x3.classList.add("rosu")
        } 
        else {
            x3.classList.remove("rosu")
            x3.classList.remove("verde")
            x3.classList.add("negru")
        }
    
    
    
    
        if(ruleta[p2]==0)
        {
            x2.classList.remove("rosu")
            x2.classList.remove("negru")
            x2.classList.add("verde")
        } 
        else if(rosii.includes(ruleta[p2]))
        {
            x2.classList.remove("verde")
            x2.classList.remove("negru")
            x2.classList.add("rosu")
        } 
        else {
            x2.classList.remove("rosu")
            x2.classList.remove("verde")
            x2.classList.add("negru")
        }
    
    
    
    
        if(ruleta[p3]==0)
        {
            x1.classList.remove("rosu")
            x1.classList.remove("negru")
            x1.classList.add("verde")
        } 
        else if(rosii.includes(ruleta[p3]))
        {
            x1.classList.remove("verde")
            x1.classList.remove("negru")
            x1.classList.add("rosu")
        } 
        else {
            x1.classList.remove("rosu")
            x1.classList.remove("verde")
            x1.classList.add("negru")
        }
    
    
    
    
        if(ruleta[a1]==0)
        {
            x5.classList.remove("rosu")
            x5.classList.remove("negru")
            x5.classList.add("verde")
        } 
        else if(rosii.includes(ruleta[a1]))
        {
            x5.classList.remove("verde")
            x5.classList.remove("negru")
            x5.classList.add("rosu")
        } 
        else {
            x5.classList.remove("rosu")
            x5.classList.remove("verde")
            x5.classList.add("negru")
        }
        
    
    
    
        if(ruleta[a2]==0)
        {
            x6.classList.remove("rosu")
            x6.classList.remove("negru")
            x6.classList.add("verde")
        } 
        else if(rosii.includes(ruleta[a2]))
        {
            x6.classList.remove("verde")
            x6.classList.remove("negru")
            x6.classList.add("rosu")
        } 
        else {
            x6.classList.remove("rosu")
            x6.classList.remove("verde")
            x6.classList.add("negru")
        }
    
    
    
    
        if(ruleta[a3]==0)
        {
            x7.classList.remove("rosu")
            x7.classList.remove("negru")
            x7.classList.add("verde")
        } 
        else if(rosii.includes(ruleta[a3]))
        {
            x7.classList.remove("verde")
            x7.classList.remove("negru")
            x7.classList.add("rosu")
        } 
        else {
            x7.classList.remove("rosu")
            x7.classList.remove("verde")
            x7.classList.add("negru")
        }
    
    }

    if(white==true && rosii.includes(ruleta[castigator])) {
        balance += stake;
    } else if(white==true && !rosii.includes(ruleta[castigator])) {
        balance -= stake;
    }
    
    if(black==true && !rosii.includes(ruleta[castigator]) && ruleta[castigator]!=0) {
        balance += stake;
    } else if(black==true && (rosii.includes(ruleta[castigator]) || ruleta[castigator]==0)){
        balance -= stake;
    }
    
    if(purple==true && castigator == 0) {
        balance += stake*13;
    } else if(purple==true && castigator != 0) {
        balance -= stake;
    }

    document.getElementById('balance').textContent = balance+'$';
    document.getElementById('current').textContent = stake+'$';

}