// const requestAPI = (function (){
//
//   const api_key = "e1de72c519ca29d6b215d0864778c681";
//
//   return {
//     xhr: new XMLHttpRequest(),
//     activeSearch: function() {
//       // select the search element
//       let searchEl = document.getElementById('search');
//       // listen to the event on every key up
//       searchEl.addEventListener("keyup", function(event){
//       });
//     },
//     onReady: function() {
//       this.xhr.onreadystatechange = function () {
//       /**
//        * if - the connection type is 4 (Done) we check if there is a positive status.
//        * * @param  {if} this.readyState === 4.
//        * > if there is a positive retrieval (200) we will show the raw JSON in a section.
//        * * @param {if} this.status === 200.
//        * html - make an html tag that generates the list items. using string literals ``
//        *
//        */
//        // open on every keypress a call and get 18 giphies
//        requestAPI.xhr.open("GET",`https://api.flickr.com/services/rest/?method=flickr.test.echo&name=value=${searchEl.value}&api_key=${api_key}&limit=15&rating=pg`, true);
//        requestAPI.xhr.send();
//         if (this.readyState === 4) {
//           if (this.status === 200) {
//             let giphy = JSON.parse(this.responseText);
//               /**
//                * collection - map collection or reduce the content that you recieve
//                */
//               content.collection = giphy.data.map(function(d){
//                  return  {
//                  id: d.id,
//                  slug: d.slug,
//                  title: d.title,
//                  username: d.username,
//                  originalIMG: d.images.downsized_medium.url,
//                  fixedIMG: d.images.fixed_width_downsampled.url,
//                  dateTime:d.import_datetime,
//                  source: d.source
//                 }
//                });
//                // render the giphies renderHTML
//               renderContent.renderHTML();
//           } else {
//             // render the errors
//             renderContent.renderError();
//           }
//         }
//       }
//     }
//   }
// })();
//
//

const api = {
  xhr: new XMLHttpRequest(),
  api_key: "e1de72c519ca29d6b215d0864778c681",
  url: `https://api.flickr.com/services/rest/?method=flickr.test.echo&name=value=cat&api_key=${this.api_key}`,
  onReady: function() {
    this.xhr.onreadystatechange = function() {
      if (this.readyState === 4) {
         if (this.status === 200) {
           let flickr = JSON.parse(this.responseText);
          console.log(flickr);
          xhr.send
         }
       }
    }
  },

}
