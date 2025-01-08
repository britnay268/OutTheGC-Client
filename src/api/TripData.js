import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getTrips = (userId) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/trips?userId=${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

const getSingleTrip = (tripId) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/trip/${tripId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

const createTrip = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/trip`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

const updateTrip = (payload, tripId, ownerId) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/trip/${tripId}?ownerId=${ownerId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then(resolve)
      .catch(reject);
  });

const deleteTrip = (tripId, ownerId) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/trip/${tripId}?ownerId=${ownerId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

const deleteUserFromTrip = (tripId, userId, ownerId) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/trip/${tripId}/user/${userId}?ownerId=${ownerId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

const addUserToTrip = (tripId, userId, ownerId) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/trip/${tripId}/user?userId=${userId}&ownerId=${ownerId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

const sendTripInvite = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/trip/invite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

const getTripInvitations = (userId, status) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/trip/${userId}/invitations?status=${status}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

export { getTrips, getSingleTrip, createTrip, updateTrip, deleteTrip, deleteUserFromTrip, addUserToTrip, sendTripInvite, getTripInvitations };
