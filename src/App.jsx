import './App.css';
import Header from './components/Header/Header.jsx';
import JournalList from './layouts/JournalList/JournalList';
import Body from './layouts/Body/Body';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';
import { useLocalStorage } from './hooks/use-localstorage.hook';
import { UserContext } from './context/user.context';



function mapItems(items) {
	if (!items) {
		return [];
	}
	return items.map(i => ({
		...i,
		date: new Date(i.date)
	}));
}

function App() {
	const [items, setItems] = useLocalStorage('data');

	const addItem = item => {
		setItems(...mapItems(items), {
			post: item.post,
			title: item.title,
			date: new Date(item.date),
			id: items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1
		});
	};

	return (
		<>
		    <UserContext.Provider value={{ userId: 2 }}>
				<div className='app'>
					<LeftPanel>
						<Header/>
						<JournalAddButton/>
						<JournalList items={mapItems(items)}/>
					</LeftPanel>
					<Body>
						<JournalForm onSubmit={addItem}/>
					</Body>
				</div>
		    </UserContext.Provider>
		</>
	);
}

export default App;
