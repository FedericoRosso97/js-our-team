teamMembers=[
   {
    nome:'Wayne bannet',
    ruolo:'founder & CEO',
    foto:'<img src="img/wayne-barnett-founder-ceo.jpg">',
   },
   {
    nome:'Angela Caroll',
    ruolo:'Chief Editor',
    foto:'<img src="img/angela-caroll-chief-editor.jpg">',
   },
   {
    nome:'Walter Gordon',
    ruolo:'Office Manager ',
    foto:'<img src="img/walter-gordon-office-manager.jpg">',
   },
   {
    nome:'Angela Lopez',
    ruolo:'Social Media',
    foto:'<img src="img/angela-lopez-social-media-manager.jpg">',
   },
   {
    nome:'Scott Estradat',
    ruolo:'Developer',
    foto:'<img src="img/scott-estrada-developer.jpg">',
   },
   {
    nome:'Barbara Ramo',
    ruolo:'Graphic Designer',
    foto:'<img src="img/barbara-ramos-graphic-designer.jpg">',
   }
];

for(let i=0;i<teamMembers.length;i++){
    for (key in teamMembers[i]) {
        console.log(key,':', teamMembers[i][key]);
        
     }
     document.querySelector('.container').innerHTML=(teamMembers[i].foto);
}