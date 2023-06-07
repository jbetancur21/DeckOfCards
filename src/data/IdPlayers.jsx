const IdPlayer = async () => {
	const url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
    const resp = await fetch(url);
    const data = await resp.json();
	return data;
};

export default IdPlayer;