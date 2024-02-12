// BMI Categories
// Below 18.5 - Underweight

// 18.5-24.9 - Normal

// 25.0-29.9 - Overweight

// 30.0 and higher - Obese

function calculate()
{
    //BMI = weight (kg) ÷ (height (m))2
    let weight=document.getElementById('weight').value
    let height=document.getElementById('height').value/100

    const BMI=weight/height**2
    console.log(BMI);

    if(BMI<18.5){
        result.innerHTML=Math.floor(BMI)
        comment.innerHTML=`<p style="color:yellow">Underweight</p> <br> <p>Time to grab a bite</p>`
    }
    else if(BMI>18.5 && BMI<24.9)
    {
        result.innerHTML=Math.floor(BMI)
        comment.innerHTML=`<p style="color:green">Normal</p> <br> <p>Great Shape</p>`
    }
    else if(BMI>25.0 && BMI<29.9)
    {
        result.innerHTML=Math.floor(BMI)
        comment.innerHTML=`<p style="color:orange">Overweight</p> <br> <p>Time To Run</p>`
    }
    else if(BMI>30.0)
    {
        result.innerHTML=Math.floor(BMI)
        comment.innerHTML=`<p style="color:red">Obese</p> <br> <p>Time To Run</p>`
    }
    else
    {
        comment.innerHTML="Error"
    }
    
    
}