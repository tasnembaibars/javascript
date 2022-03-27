function sub(){
    let subject = document.getElementById('sub');
   sessionStorage.setItem('sub',subject.value);
    

    let description=document.getElementById('desc');
    sessionStorage.setItem('desc',description.value);
    

    let types=document.getElementById('usert');
    sessionStorage.setItem('user',types.value);
   
    
    let techtype = document.getElementById('tech');
    sessionStorage.setItem('tech',techtype.value);
    

    let projectim = document.getElementById('imgma');
    sessionStorage.setItem(' image',projectim.value);
    
  

}
document.getElementById('pro').innerHTML=sessionStorage.getItem('sub')+sessionStorage.getItem('desc')+sessionStorage.getItem('user')+
sessionStorage.getItem('tech')+
sessionStorage.getItem(' image') 


