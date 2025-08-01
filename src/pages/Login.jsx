const handleLogin = async () => {
  try {
    const response = await loginUser({ email, password });
    localStorage.setItem('token', response.token); // if token is returned
    console.log('Login success');
  } catch (err) {
    console.error(err.message);
  }
};
