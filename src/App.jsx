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
		<div className='app'>
			<LeftPanel>
				<Header/>
				<JournalAddButton/>
				<JournalList>
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

				</JournalList>

			</LeftPanel>

			<Body>
				<JournalForm/>
			</Body>


		</div>
	);
}

export default App;
