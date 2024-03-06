const makeRequest = async (config) => {
   return await $.ajax(config)
   
}

const getData = () => {
    makeRequest({
        url: 'https://jsonplaceholder.typicode.com/posts'
    })
    .then((res) => {
        console.log(res)
    }).catch((err) => console.log(err))
}

getData()


const createData = () => {
    makeRequest({
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: "POST",
        data:{
            title: 'foo',
            body: 'bar',
            userId: 1
        }
    })
    .then((res) => {
        console.log(res)
    })
    .catch((err) => console.log(err))
}

createData();


const updateData = () => {
    makeRequest({
        url: 'https://jsonplaceholder.typicode.com/posts/1',
        method: "PUT",
        data: {
            id: 1,
            title: 'football',
            body: 'barcelona',
            userId: 1
        }
    })
    .then((res) => {
        console.log(res)
    })
    .catch((err) => console.log(err))
}

updateData();


const patchData = () => {
    makeRequest({
        url: 'https://jsonplaceholder.typicode.com/posts/1',
        method: "PATCH",
        data: {
            id: 1,
            title: 'football'
        }
    })
    .then((res) => {
        console.log(res)
    })
    .catch((err) => console.log(err))
}

patchData();


const deleteData = () => {
    makeRequest({
        url: 'https://jsonplaceholder.typicode.com/posts/1',
        method: "DELETE"
    })
    .then((res) => {
        console.log(res)
    })
    .catch((err) => console.log(err))
}

deleteData();