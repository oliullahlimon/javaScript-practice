// using async await
const makeRequest = async (url, config) => {
    const res = await fetch(url, config)
    // if(!res.ok) {
    //     throw new Error (`Error : ${res.status}`)
    // }
    const data = await res.json();
    return data;
};

const getData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err)
    })
}

// using async await
// const getData = async () => {
//    try {
//     const data2 = await makeRequest('https://jsonplaceholder.typicode.com/posts')
//     console.log(data2) // the value of return data is inside the data2 variable
//    } catch (error) {
//     console.log(`There is an error : `)
//    }
// }

getData()


const createData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err)
    })
}

createData()


const updateData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts/19', {
    method: 'PUT',
    body: JSON.stringify({
        id: 19,
        title: 'oliullah',
        body: 'limon',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err)
    })
}

updateData()


const patchData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts/19', {
    method: 'PATCH',
    body: JSON.stringify({
        id: 19,
        title: 'oliullah',
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err)
    })
}

patchData()


const deleteData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/posts/19', {
    method: 'DELETE',
    })
    .then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err)
    })
}

deleteData()