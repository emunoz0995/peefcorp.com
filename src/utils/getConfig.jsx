const user = JSON.parse(localStorage.getItem("playerInfo"));
const getConfig = () => ({
    headers: { Authorization: `Bearer ${user.token}` }
});

export default getConfig;