import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getSingleComment = (commentId) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/comment/${commentId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

const createComment = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/comment`, {
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

const updateComment = (payload, commentId, userId) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/comment/${commentId}?userId=${userId}`, {
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

const deleteComment = (commentId, userId) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/comment/${commentId}?userId=${userId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

export { getSingleComment, createComment, updateComment, deleteComment };
