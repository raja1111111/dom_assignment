const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png',
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png',
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io',
  },
  footer: {
    copyright: 'Copyright Great Idea! 2020',
  },
};

// write your code here

document.head.insertAdjacentHTML( 'beforeend', '<link rel="stylesheet" href="./css/index.css">' );
  var addbtn = document.createElement("button");
  addbtn.appendChild(document.createTextNode("update page"));
  var page = document.getElementsByClassName("cta-text")[0];
  page.appendChild(addbtn);
  console.log(addbtn);


addbtn.addEventListener('click' ,() => {

  const header1 = document.createElement('header');
  const nav1 = document.createElement('nav');
  
  const a1 = document.createElement('a');
  const a2 = document.createElement('a');
  const a3 = document.createElement('a');
  const a4 = document.createElement('a');
  const a5 = document.createElement('a');
  const a6 = document.createElement('a');
  const a7 = document.createElement('a');
  const a8 = document.createElement('a');


 // const img1 =  document.createElement('img');
  //img1.setAttribute('src' , 'img/logo.png' );
  // // a2.textContent('Product')
  // // a3.textContent('Vision')
  // // a4.textContent('Features')
  // // a5.textContent('About')
  // // a6.textContent('Contact')

 

   var link1 = document.createTextNode("Services");
   var link2 = document.createTextNode('Product'); 
   var link3 = document.createTextNode('Vision');
   var link4 = document.createTextNode('Features'); 
   var link5 = document.createTextNode('About');
   var link6 = document.createTextNode('Contact'); 

   var link7 = document.createTextNode('Information');
   var link8 = document.createTextNode('Sport');
   
   a1.appendChild(link1);
   a2.appendChild(link2);
   a3.appendChild(link3);
   a4.appendChild(link4);
   a5.appendChild(link5);
   a6.appendChild(link6);

   a7.appendChild(link7);
   a8.appendChild(link8);


  
   

  nav1.appendChild(a1);
  nav1.appendChild(a2);
  nav1.appendChild(a3);
  nav1.appendChild(a4);
  nav1.appendChild(a5);
  nav1.appendChild(a6);

  nav1.appendChild(a7);
  nav1.appendChild(a8);

  a1.style.color="green"
  a2.style.color="green"
  a3.style.color="green"
  a4.style.color="green"
  a5.style.color="green"
  a6.style.color="green"
  a7.style.color="green"
  a8.style.color="green"
  
  
  
  var imgReplace = document.getElementsByClassName("logo")[0];
  imgReplace.src = "img/logo.png";

  imgReplace.classList.add('logo')
  imgReplace.setAttribute('alt','Great Idea! Company logo')

  header1.appendChild(nav1)
  //header1.appendChild(img1)
  
//  document.querySelector('.logo').appendChild(header1)
  document.getElementsByTagName('nav')[0].appendChild(header1)

  
  const par1 =document.querySelector('h1');
  par1.textContent ='DOM Is Awesome';

  const par23 =document.querySelector('button');
  par23.textContent ='Get Started';

  var imgReplace1 = document.getElementById("cta-img");
  imgReplace1.src = 'img/header-img.png';

 // imgReplace.classList.add('logo')
  imgReplace1.setAttribute('alt','Image of a code snippet.')

  const he2 =document.querySelector('h4');
  he2.textContent = 'Features';

  const par2 =document.getElementsByTagName('p')[0];
  par2.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
  ;

  const he3 =document.getElementsByTagName('h4')[1];
  he3.textContent = 'About';

  const par3 =document.getElementsByTagName('p')[1];
  par3.textContent =  'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
  
  var imgReplace2 = document.getElementById("middle-img");
  imgReplace2.src = 'img/mid-page.jpg';

 // imgReplace.classList.add('logo')
  imgReplace2.setAttribute('alt',"Image of code snippets across the screen");


  const he4 =document.getElementsByTagName('h4')[2];
  he4.textContent = 'Services';

  const par4 =document.getElementsByTagName('p')[2];
  par4.textContent =  'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';



  const he5 =document.getElementsByTagName('h4')[3];
  he5.textContent = 'Product';

  const par5 =document.getElementsByTagName('p')[3];
  par5.textContent =  'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
  

  const he6 =document.getElementsByTagName('h4')[4];
  he6.textContent = 'Vision';

  const par6 =document.getElementsByTagName('p')[4];
  par6.textContent =  'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
  

  const he7 =document.getElementsByTagName('h4')[5];
  he7.textContent = 'Contact';

  
  const par8 =document.getElementsByTagName('p')[5];
  par8.textContent =  '123 Way 456 Street Somewhere, USA'


  const par9 =document.getElementsByTagName('p')[6];
  par9.textContent =  '1 (888) 888-8888';
  

  const par0 =document.getElementsByTagName('p')[7];
  par0.textContent =  'sales@greatidea.io';

  const par44 =document.getElementsByTagName('p')[8];
  par44.textContent =  'Copyright Great Idea! 2020';


//   var a = document.createElement('a');  
                  
//   // Create the text node for anchor element. 
//   var link = document.createTextNode("This is link"); 
    
//   // Append the text node to anchor element. 
//   a.appendChild(link);  
    
//   // Set the title. 
//   a.title = "This is Link";  
    
//   // Set the href property. 
//   a.href = "https://www.geeksforgeeks.org";  
    
//   // Append the anchor element to the body. 
//  // document.header.appendChild(a1);
  

})