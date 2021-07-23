// Write a function that receives (a, b, c, d) as arguments and returns an object containing only the truthly arguments while keeping the argument’s name.
function truth(a, b, c, d) {
    let output = {}
    const outputIfTrue = obj => {
        if (Object.values(obj)[0] === true) {
            output = {...output, ...obj }
        }
    }
    outputIfTrue({ a })
    outputIfTrue({ b })
    outputIfTrue({ c })
    outputIfTrue({ d })
    return output
}

// Write a function that inverts a String.
function invertString(stringToInvert) {
    if (stringToInvert.length <= 1) {
        return length
    }
    let output = ""
    for (let i = stringToInvert.length - 1; i >= 0; i--) {
        output = output + stringToInvert[i]
    }
    return output
}

// Start a git repository in github with two branches, master and dev.
// Implement any of those functions in an endpoint that I will be calling from my computer.
// When you are done, make a pull request from dev - > master.