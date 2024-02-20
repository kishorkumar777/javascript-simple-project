const form = document.querySelector('form');
 
form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const height=parseInt( document.getElementById('height').value);
    const weight=parseInt( document.getElementById('weight').value);
    const results= document.getElementById('results');

    if(height<=0 || height===''|| isNaN(height)){
        results.innerHTML= `Please enter a valid height ${height}`;
    }else if(weight<=0 || weight===''|| isNaN(weight)){
        results.innerHTML= `Please enter a valid weight ${weight}`;
    }else{
      const bmi= (weight/((height*height)/10000)).toFixed(2);
      results.innerHTML=`<span>${bmi}</span>`  ;
    }

});