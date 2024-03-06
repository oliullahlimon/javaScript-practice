const makeRequest = async (config) => {
    return await axios(config);
}

const getData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
        console.log(res)
        console.log(res.data)
    })
    .catch((err) => console.log(err))
}

getData();


const createData = () => {
    makeRequest({
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: "POST",
        data: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1
        })
    })
    .then((res) => {
        console.log(res)
        console.log(res.data)
    })
    .catch((err) => console.log(err))
}

createData();


const updateData = () => {
    makeRequest({
        url: 'https://jsonplaceholder.typicode.com/posts/1',
        method: "PUT",
        data: JSON.stringify({
            id: 1,
            title: 'football',
            body: 'barcelona',
            userId: 1
        })
    })
    .then((res) => {
        console.log(res)
        console.log(res.data)
    })
    .catch((err) => console.log(err))
}

updateData();


const patchData = () => {
    makeRequest({
        url: 'https://jsonplaceholder.typicode.com/posts/1',
        method: "PATCH",
        data: JSON.stringify({
            id: 1,
            title: 'football'
        })
    })
    .then((res) => {
        console.log(res)
        console.log(res.data)
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
        console.log(res.data)
    })
    .catch((err) => console.log(err))
}

deleteData();