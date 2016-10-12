export const signUp = (username, password, success, error) => {
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

export const signIn = (username, password, success, error) => {
  $.ajax({
    method: 'POST',
    url: '/api/sessions',
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

export const signOut = (success, error) => {
  $.ajax({
    method: 'DELETE',
    url: '/api/sessions',
    success,
    error
  });
};
