/*
**javascript
**/


 // vue //

// dom in which we operate in vue //
 var app = new Vue({
   el: '#app',
   data: {
     // Index value used for swtiching images //
       indexImg: 0,
       // array of images //
       images: {
            "./images/image1.jpg",
            "./images/image2.jpg",
            "./images/image3.jpg",
            "./images/image4.jpg",
       },
       // Methods //
       methods: {
         // callback function that manage  the image change with the next one //
         nextImages(){
            // adding 1 for swtiching image //
            this.indexImg += 1;
            // 
            if(this.)
         }

       }

   }
 })
