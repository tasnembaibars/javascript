

function sub(){
    localStorage.clear();
    let username =document.getElementById('usern');
    localStorage.setItem('name', username.value );
    
    
    
    if ( document.getElementById('userg').checked)
    {let gender= document.getElementById('userg');
    localStorage.setItem('gender',gender.value);
   
    
    
    }
    else {
    let gender = document.getElementById('userg1');
    localStorage.setItem('gender',gender.value);
  
    
}
    let age = document.getElementById('usera');
    localStorage.setItem('Age',age.value);
    localStorage.getItem('Age');

    let birth=document.getElementById('userb');
    localStorage.setItem('birth',birth.value);
    localStorage.getItem('birth');

    let major=document.getElementById('userm');
    localStorage.setItem('Major',major.value);
    localStorage.getItem('Major');
    
    let university = document.getElementById('useru');
    localStorage.setItem('Uni',university.value);
    localStorage.getItem('Uni');

    let personal = document.getElementById('uimage');
    localStorage.setItem('Personal image',personal.value);
    localStorage.getItem('Personal image');

    let pro=document.getElementById('psec');
    localStorage.setItem('programminglan',pro.value);
    localStorage.getItem('programminglan');

    let cer=document.getElementById('csec');
    localStorage.setItem('programmingCer',cer.value);
    localStorage.getItem('programmingCer');

    let cerfile=document.getElementById('cersec');
    localStorage.setItem('Certificate',cerfile.value);
    localStorage.getItem('Certificate');

    let members  = document.getElementById('fmember');
    localStorage.setItem('familymem',members.value);
    localStorage.getItem('familymem');

    let member1=document.getElementById('fmember1');
    localStorage.setItem('member1',member1.value);
    localStorage.getItem('memder1');

    let description=document.getElementById('des1');
    localStorage.setItem('desc',description.value);
    localStorage.getItem('desc');

    let member2=document.getElementById('fmember2');
    localStorage.setItem('fmember2',member2.value);
    localStorage.getItem('fmember2');

    let description2=document.getElementById('des2');
    localStorage.setItem('desc2',description2.value);
    localStorage.getItem('desc2');

    

}

document.getElementById('applicant').innerHTML= "Applicant name :"+localStorage.getItem('name')+"<br> "+"The gender is:"+localStorage.getItem('gender')+"<br>"+" The Age:"+localStorage.getItem('Age')+"<br> "+"Birth date:"+localStorage.getItem('birth')
+"<br> "+" The applicant major is:"+localStorage.getItem('Major')+ "<br> "+"and studied in :"+localStorage.getItem('Uni')+ "<br> "+"personal photo is dropped here:"+localStorage.getItem('Personal image')+ " <br>"+"What about programming ?"+localStorage.getItem('programminglan')
+"<br> "+"the certificate that had been recieved:"+localStorage.getItem('Certificate')+"<br> ";


document.getElementById('applicant2').innerHTML="family info:"+localStorage.getItem('familymem')+"<br> "+"member1:"+localStorage.getItem('member1')+"<br> "+"member1 description:"+localStorage.getItem('desc')+"<br> "+"member2:"+localStorage.getItem('fmember2')+"<br> "+"member2 description:"+localStorage.getItem('desc2');