const API = {
	getData: function getData (setWordList, setFilterList) {
	  fetch('words_dictionary.json',{
	    headers : { 
	      'Content-Type': 'application/json',
	      'Accept': 'application/json'
	     }
	  }).then(function(response){
	    return response.json();
	  })
	  .then(function(myJson) {
	    let fiveC = Object.keys(myJson).filter((key) => key.length === 5);
	    setWordList(fiveC);
	    setFilterList(fiveC);
	  });
	}
};

export default API;
