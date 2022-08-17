let buttonClicked=document.querySelectorAll("button")
let display=document.querySelector("#display--tag")
let displayContent=display.textContent
console.log(buttonClicked)


let displayString=""
let result=0
let operands_inString=""
let operands=[]
let operands_count=0
let operations=[]
var result_inString=""
var check=0
let display_string=""
let clickedOnce=false
let display_result=""

buttonClicked.forEach(element => {
    element.addEventListener("click",function() {
        let character_entered=element.textContent
        console.log("Clicked")
        console.log(character_entered)

        if(character_entered === "AC") {
            displayString=""
            display_result=""
            // result_toDisplay.textContent=""
            operands=[]
            operations=[]
            clickedOnce=false
            display.textContent=""
            }
            else if(character_entered === "=") {
                if(!clickedOnce) {
                clickedOnce=true
                displayString+="="
                for(let i=0;i<displayString.length;i++) {
                    if(displayString[i]!=='+' && displayString[i]!=='-' && displayString[i]!=='*'
                    && displayString[i]!=='/' && displayString[i]!=='=' ) {
                        operands_inString+=displayString[i]
                        display_result+=displayString[i]
                        console.log(operands_inString)
                    }
                    else {
                        operations.push(displayString[i])
                        operands.push(parseInt(operands_inString))
                        display_result+=displayString[i]
                        operands_count++
                        operands_inString=""
                    }
                }
                operations.pop('=')
        
                result=operands[0]
        
                for(let j=0;j<operations.length;j++) {
                    if(operations[j]==='+') {
                        result+=operands[j+1]
                    }
                    if(operations[j]==='-') {
                        result-=operands[j+1]
                    }
                    if(operations[j]==='*') {
                        result*=operands[j+1]
                    }
                    if(operations[j]==='/') {
                        if(operands[j+1]!==0)
                        result/=operands[j+1]
                        else {
                            alert("Cannot divide by 0!")
                            result_inString=""
                        }
                    }
        
                }
                if(!result) {
                    alert("Error. You might have clicked on an operation one or more times in succession. Click AC to reset. Or the input is in the wrong format")
                    display.textContent=""
                }
                result_inString=result.toString()
                display.textContent=""
                display.textContent=result_inString
                console.log("Display:"+display.textContent)
                result=0
                console.log("Result "+result_inString)
                 display_string=result_inString
                //  result_toDisplay.textContent=result_inString
                 result_inString=""
                //  result_toDisplay.textContent=display_result+result_inString
                //  display_result=""
                
        
        
        
        
                displayString=displayString.slice(0,-1)
                // display.textContent=displayString
                // console.log(displayString)
            }
            else {
                alert("One operation at a time. Click AC to continue")
            }
            }
            else {
                displayString+=character_entered
                // result_toDisplay.textContent+=props.button.display
                display.textContent+=character_entered
            }
            console.log(displayString)

    })
});