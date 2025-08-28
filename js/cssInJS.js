// const sections = document.getElementsByTagName('section');
// const sections = document.querySelector('section')
const sections = document.querySelectorAll('section');
// console.log(sections);

// for(const section of sections){
//     // console.log(section);
//     // section.style.backgroundColor = 'lightgreen'
//     // section.style.border = '5px solid brown';
//     // section.style.marginBottom = '10px';
//     // section.style.borderRadius = '20px';
//     // section.style.padding = '20px';
//     // // section.style.boxShadow = '0 0 10px 0 rgba(0,0,0,0.5)';
// }

// dynamic class  
for(const section of sections){
    section.classList.add('section-card');
}