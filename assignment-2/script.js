console.log('vincen');
console.log('bruh');

let app = (function() {

    const message = 'this should be shown'

    return {
    	shownMessage: () => {
      		console.log(message);
    	}
    }
})();

app.shownMessage();