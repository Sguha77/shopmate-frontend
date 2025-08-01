const handleRegister = async () => {
  try {
    const response = await registerUser({ name, email, password });
    console.log('Registered successfully', response);
  } catch (err) {
    console.error(err.message);
  }
};
