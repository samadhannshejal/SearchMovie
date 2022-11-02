let id;
    const input = document.querySelector("#query");
    input.addEventListener("input", () => {
         //    console.log(input.value);
        // getdata(input.value);
        debounce(main,input.value,2000 )
    });

    async function getdata(value) {
        try {
            const response = await fetch(`http://www.omdbapi.com/?apikey=814e260a&s=${value}`);
            const data = await response.json();
          return data;
            // console.log(data);
            // if (data.Response) {
            //     append(data.Search);
            // }
            // else {
            //     return false;
            // }
        } catch (err) {
            console.log(err);

        }

    }
    function append(searchData) {
        if(searchData){
            document.querySelector("#result-container").innerHTML=null;
            searchData.map((e)=>{
                const results=document.createElement("div"); 

                    const type=document.createElement("h3");
                    type.innerHTML=`Type : ${e.Type}`;

                    const Poster=document.createElement('img');
                    Poster.src=e.Poster;

                    const title=document.createElement("h3");
                    title.innerHTML=`Title : ${e.Title}`;

                    const imdb=document.createElement('h3');
                    imdb.innerHTML=`imdb ID : ${e.imdbID}`;
                    
                    const year=document.createElement('h3');
                    year.innerHTML=`Year : ${e.Year}`;

                    results.append(type,Poster,title,imdb,year)
                
            
                document.querySelector("#result-container").append(results);
            });

        }
    

    }
    async function main(value){
        try{
            const data=await getdata(value);
            if(data==undefined){
                return false;
            }
            else{
                append(data.Search);
            }
        }
        catch(e){
            console.log(e);
        }

    }
    function debounce(fun,value,time){
        if(id){
            clearTimeout(id);
        }
            id=setTimeout(()=>{
              fun(value);
            },time)
          
    }
