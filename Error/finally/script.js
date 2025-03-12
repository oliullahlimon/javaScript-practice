const myFunction = () => {
    try {
        // return  // return means function will stop executing here but finally will execute for sure.
        console.log("Program is ready to run")
        console.log(program)
    } catch (error) {
        console.log("This is an error " + error)
        console.log(p) // though there is an error in catch, finally will definitely run.
    } finally {
        console.log("Finally program has run")
        // we use finally
        // close the File
        // exit the loop
        // write to the log file
    }
}

myFunction()