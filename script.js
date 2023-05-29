teamMembers=[
   {
    nome:'Wayne bannet',
    ruolo:'founder & CEO',
    foto:"img/wayne-barnett-founder-ceo.jpg",
   },
   {
    nome:'Angela Caroll',
    ruolo:'Chief Editor',
    foto:"img/angela-caroll-chief-editor.jpg"
   },
   {
    nome:'Walter Gordon',
    ruolo:'Office Manager ',
    foto:"img/walter-gordon-office-manager.jpg",
   },
   {
    nome:'Angela Lopez',
    ruolo:'Social Media',
    foto:"img/angela-lopez-social-media-manager.jpg",
   },
   {
    nome:'Scott Estradat',
    ruolo:'Developer',
    foto:"img/scott-estrada-developer.jpg",
   },
   {
    nome:'Barbara Ramo',
    ruolo:'Graphic Designer',
    foto:"img/barbara-ramos-graphic-designer.jpg",
   }
];

for(let i=0;i<teamMembers.length;i++){
    for (key in teamMembers[i]) {
        console.log(key,':', teamMembers[i][key]);
     }
     const imgContainer=document.querySelector('.container');
     const divCard=document.createElement('div')
     divCard.classList.add('card')
     divImg=document.createElement('div')
     divImg.classList.add('image-container')
     
     imgContainer.append(divCard);
     divCard.append( divImg);
    
     const role=teamMembers[i].ruolo;
     const name=teamMembers[i].nome;
     const img=document.createElement('img')
     const divName=document.createElement('div')
     const divSurname=document.createElement('div')
      
     img.src=teamMembers[i].foto
     
     divImg.append(img);
     divCard.append(divName);
     divCard.append(divSurname);
      
     divName.append(name);
     divSurname.append(role);
}