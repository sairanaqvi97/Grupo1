export const getMeetups = () => {
    return fetch ('', {
    method: "GET",
    headers: {'Content-Type': 'application/json',
    'Accept': "application/json",
    }

})
.then(response => {
    if(!response.ok) {
        throw new Error('Error al cargar la página');
    }
    return response.json();
})
.catch (error =>{
    console.log('There has been an error in the fetch operation', error);
});
};