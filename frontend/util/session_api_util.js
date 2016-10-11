export let signUp = (username, password, success, error) => {
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: {
      user: {
        username,
        password
      }
    },
    success,
    error
  });
};
