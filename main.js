fetch('https://randomuser.me/api/?results=50')
    .then(function(response){
        return response.json();
    })
    .then(function(myJson) {
        
        for(let i=0;i<51;i++){
            const fname= myJson.results[i].name.first;
            const lname= myJson.results[i].name.last;
            const gender= myJson.results[i].gender;
            let p=document.createElement('p');
            
            p.innerText=`First Name: ${fname} ||| Last Name: ${lname} ||| Gender: ${gender}`;
            document.body.appendChild(p);
            
        
        }
    })
