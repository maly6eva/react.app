import { useState } from 'react';
import './App.css';
import Button from './components/Button/Button.jsx';
import CardButton from './components/CardButton/CardButton.jsx';
import Header from './components/Header/Header.jsx';
import JournalItem from './components/JournalItem/JournalItem.jsx';
import JournalList from './layouts/JournalList/JournalList.jsx';
import Body from './layouts/Body/Body.jsx';
import LeftPanel from './layouts/LeftPanel/LeftPanel.jsx';
import JournalAddButton from './components/JournalAddButton/JournalAddButton.jsx';
import JournalForm from './components/JournalForm/JournalForm.jsx';





const INITIAL_DATA  = [
	// {
	// 	id: 1,
	// 	title: 'Подготовка к обнавлению курса',
	// 	text: 'Горные походы открывают удивительные природные ландшафты',
	// 	date: new Date()
	// },
	// {
	// 	id: 2,
	// 	title: 'Поход в горы',
	// 	text: 'Думал очень долгое времени',
	// 	date: new Date()
	// }
];

function App() {
	const [items, setItems] = useState(INITIAL_DATA);

	const addItem = item => {
		setItems(oldItems => [...oldItems, {
			text: item.text,
			title: item.title,
			date: new Date(item.date),
			id: Math.max(...oldItems.map(i => i.id)) + 1
		}]);
	};

	const sortItems = (a, b) => {
		if (a.date < b.date) {
			return 1;
		}else {
			return -1;
		}
	};

	return (
		<div className='app'>
			<LeftPanel>
				<Header/>
				<JournalAddButton/>
				<JournalList>
					{items.length === 0 ? <p>Записей пока нет, добавте первую.</p>: items.sort(sortItems).map(el => (
						<CardButton key={el.id}>
							<JournalItem
								title={el.title}
								text={el.text}
								date={el.date}
							/>
						</CardButton>
					))}
				</JournalList>
			</LeftPanel>
			<Body>
				<JournalForm onSubmit={addItem}/>
			</Body>
		</div>
	);
}

export default App;
