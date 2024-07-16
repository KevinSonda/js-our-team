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


//recupero l'lemento del dom
const teams_container = document.getElementById('teams')

for (let i = 0; i < teams.length; i++) {
    console.log(`${teams[i].name} ${teams[i].role} ${teams[i].img}`)
    teams_container.innerHTML += `<div class="card"><img src="./img/${teams[i].img}"> <div class="card-body">
      <h4>${teams[i].name}</h4>
      <p>${teams[i].role}</p>
    </div>
    </div>`;
}