let button=document.querySelector("#btn")
button.addEventListener("click", ()=> {
    let settings={
        url: 'http://localhost:9999',
        method:'get',
        success: function(response){
            console.log("Ответ сервера: "+ response)
        },
        error:function(){
            alert("Error")
        }
      }
      $.ajax(settings)
})