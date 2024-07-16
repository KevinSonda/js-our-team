// funzione che mostra i membri nel dom
function showMember(container, img, name, role){
    //inserisco nell'html
    container.innerHTML += `<div class="card"><img src="./img/${teams[i].img}"> <div class="card-body">
      <h4>${teams[i].name}</h4>
      <p>${teams[i].role}</p>
    </div>
    </div>`;
}

//funzione che aggiunge un membro all'aray
function createMembers(nome, ruolo, foto) {
    console.log(nome, ruolo, foto);


let object = {
    name: nome,
    role: ruolo,
    img: foto,
}

return object
}

// funzione che mi cicla l'array e mi crea il dom
function showTeamCards(array_team) {
    //recuero il contenitore
    const teams_container = document.getElementById('teams');
    teams_container.innerHTML = '';
    
    //ciclo l'array he ho come parametro

    for (let i = 0; i < teams.length; i++) {
        console.log(`${array_teams[i].name} ${teams[i].role} ${teams[i].img}`);
    }   
}



const teams = [
    {
        name: "Wayne Barnett", role: "Founder & CEO", img: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll", role: "Chief Editor", img: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon", role: "Office Manager", img: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez", role: "Social Media Manager", img: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada", role: "Developer", img: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos", role: "raphic Designer", img: "barbara-ramos-graphic-designer.jpg"
    },

];

//recupero l'elememto del dom che deve contenere le stringhe
 showTeamCards(teams);

 


 