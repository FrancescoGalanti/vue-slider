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
       images: [
            "./images/image1.jpg",
            "./images/image2.jpg",
            "./images/image3.jpg",
            "./images/image4.jpg"
         ],
       },
              // Methods //
       methods: {
         // callback function that manage  the image change with the next one //
         nextImages(){
            // adding 1 for swtiching image //
            this.indexImg += 1;
            // condition that manages the exchange with the image of the maximum index value with the minimum value //
            if(this.indexImg > (this.images.length - 1)){
              this.indexImg = 0;
            }
         },
         // callback function that manage  the image change with the previous one //
         prevImages(){
          // decrease by one //
          this.indexImg -= 1;
          // condition that manages the exchange with the image of the minimum index value with the maximum value //
          if(this.indexImg < 0){
            this.indexImg = this.images.length - 1;
          }
        },

        // callback function that match the right arrayindex with the right font //
        machtIndexImages(index){

          this.indexImg = index;
        }

       }


 })
