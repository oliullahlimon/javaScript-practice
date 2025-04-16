document.getElementById("submit").addEventListener("click", (e) => {
    e.preventDefault()
    let titlec = title.value
    let descc = desc.value
    localStorage.setItem("todo", [titlec, descc])
    console.log(e)
    todo.innerHTML = `
    <h1>${titlec}</h1>
    <p>${descc}</p>
    `
})

document.getElementById("deleteBtn").addEventListener("click", (e) => {
    localStorage.removeItem("todo")
    title.value = ""
    desc.value =""
    todo.innerHTML = ""
})
