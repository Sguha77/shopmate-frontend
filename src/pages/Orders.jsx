useEffect(() => {
  const loadOrders = async () => {
    try {
      const orders = await getOrders();
      setOrders(orders);
    } catch (err) {
      console.error(err);
    }
  };
  loadOrders();
}, []);
