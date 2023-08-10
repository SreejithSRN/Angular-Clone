function myFunction(x) {
    x.classList.toggle("change");
  }
  const icon=document.getElementById('sr')
  const show=document.getElementById('jit')

  icon.addEventListener('click',function()
  {
    
    const ele=window.getComputedStyle(show).display
    if(ele =='none')
    {
      show.style.display ='block'
    }
    else
    {
      show.style.display ='none'
    }
  })