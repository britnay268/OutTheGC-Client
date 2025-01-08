import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getSingleActivity = (activityId) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/activity/${activityId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

const createActivity = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/activity`, {
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

const updateActivity = (payload, activityId, userId) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/activity/${activityId}?userId=${userId}`, {
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

const deleteActivity = (activityId, userId) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/activity/${activityId}?userId=${userId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

const searchActivity = (tripId, searchQuery) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/activity/${tripId}/search?searchInput=${searchQuery}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

const voteOnActivity = (userId, activityId) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/activity/${activityId}/vote/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then(resolve)
      .catch(reject);
  });

const filterActivityByVote = (tripId) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/activity/filter?tripId=${tripId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

export { getSingleActivity, createActivity, updateActivity, deleteActivity, searchActivity, voteOnActivity, filterActivityByVote };
