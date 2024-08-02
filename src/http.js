export async function fetchAvailablePlaces() {
  const response = await fetch('http://localhost:3000/places');
  const resData = await response.json();

  if (!response.ok) {
    throw new Error('Failed to fetch places');
  }

  return resData.places;
}

export async function fetchUserPlaces() {
  const response = await fetch('http://localhost:3000/user-places');
  const resData = await response.json();

  if (!response.ok) {
    throw new Error('Failed to fetch user places');
  }

  return resData.places;
}

export async function updateUserPlaces(places) {
  const response = await fetch('http://localhost:3000/user-places', {
    method: 'PUT',
    body: JSON.stringify({ places }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const resData = await response.json();

  if (!response.ok) {
    throw new Error('Failed to update user data.');
  }

  return resData.message;
}






const serviceUri = "http://127.0.0.1:5000/api"

export async function fetchPrograms() {
  const response = await fetch(`${serviceUri}/programs`);
  const resData = await response.json();

  if (!response.ok) {
    throw new Error('Failed to fetch programs');
  }
  return resData;
}


export async function getUserById(id) {
  const response = await fetch(`${serviceUri}/users/${id}`);
  const resData = await response.json();

  if (!response.ok) {
    throw new Error('Failed to fetch programs');
  }

  return resData;
}

export async function addProgram(program) {
  const response = await fetch(`${serviceUri}/programs`, {
    method: 'POST',
    body: JSON.stringify(program ),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const resData = await response.json();

  if (!response.ok) {
    throw new Error('Failed to update user data.');
  }

  console.log(resData);
  const result = { ...resData, totalHours: resData["total_hour"]}
  return result;
}

export async function deleteProgram(programId) {
  const response = await fetch(`${serviceUri}/programs/${programId}`, {
    method: 'DELETE',
  });

  const resData = await response.json();

  if (!response.ok) {
    throw new Error('Failed to delete program.');
  }

  return resData;
}