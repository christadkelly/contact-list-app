const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			APIurl: 'https://playground.4geeks.com/apis/fake/contact/agenda/cdkelly',
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			getAPI: async () => {
				const store = getStore();
				try{
					const response = await fetch(store.APIurl);
					const APIcontacts = await response.json();
					setStore({ contacts: APIcontacts});
				} catch (error) {
					console.log('This is an error', error)
				}
				console.log(store.contacts)
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
