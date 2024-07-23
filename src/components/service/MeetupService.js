export const getMeetups = () => {
    return fetch('https://669936f52069c438cd71a5fd.mockapi.io/MeetUps/quedada', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al cargar la página');
        }
        return response.json();
      })
      .catch(error => {
        console.log('There has been an error in the fetch operation', error);
        throw error;
      });
  };
  