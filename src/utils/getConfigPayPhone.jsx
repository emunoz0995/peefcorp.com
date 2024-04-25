const getConfigPayPhone = () => ({
    headers: { Authorization: `Bearer ${import.meta.env.VITE_PAY_PHONE_TOKEN}` }
});

export default getConfigPayPhone;