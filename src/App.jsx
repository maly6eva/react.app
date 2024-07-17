import './App.css';
import Button from './components/Button/Button.jsx';
import JournalItem from './components/JournalItem/JournalItem.jsx';
import CardButton from './components/CardButton/CardButton.jsx';

function App() {
	const data = [
		{
			title: 'Подготовка к обнавлению курса',
			text: 'Горные походы открывают удивительные природные ландшафты',
			date: new Date()
		},
		{
			title: 'Поход в горы',
			text: 'Думал очень долгое времени',
			date: new Date()
		}
	];

	return (
		<> 
			<h1>Зоголовок</h1>
			<p>Какой-то текст</p>
			<Button/>
			<CardButton>
				Новое воспоминание
			</CardButton>
			<CardButton>
				<JournalItem
					title={data[0].title}
					text={data[0].text}
					date={data[0].date}
				/>
			</CardButton>
			<CardButton>
				<JournalItem
					title={data[1].title}
					text={data[1].text}
					date={data[1].date}
				/>
			</CardButton>
		</>
	);
}

export default App;
