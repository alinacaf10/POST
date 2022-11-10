let btn=document.querySelector("button")
btn.style.width="100px"
btn.innerText="Button"
btn.addEventListener("click",function(){
    const info={
        from:"Ali",
        to:"Ilham",
        amount:100,
    }
    fetch('https://acb-api.algoritmika.org/api/transaction',
    {
     method:'POST',
     headers:   {
        'Content-type': 'application/json'
      },
    body: JSON.stringify(info) 
    });
})
