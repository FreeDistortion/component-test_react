const MapTest=function(){
    // Spring에서 응답받은 data 출력.
    //list(array)
    //JS object
    let data = {
        id : "testid",
        name: "BTS",

    };
    let list = [1,2,3];

    return(
        <div>
            <h1>{list[0]}</h1>
            <h1> {data.id}</h1>
            <div>
                {list.map(function(n){
                    return <h1 key={n}>{n}</h1>
                }
                )}
                {list.map((n)=><h2 key={n}>{n}</h2>)}
                {list.map(n=><h3 key={n}>{n}</h3>)}
                
            </div>
            
        </div>
    );
}

export default MapTest;