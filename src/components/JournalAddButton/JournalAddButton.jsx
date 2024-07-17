import CardButton from '../CardButton/CardButton.jsx';
import'./JournalAddButton.css';

function JournalAddButton() {

	return (
		<CardButton className='journal-add'>

			<img className='pluse' src="/pluse.svg" alt="Логотип журнала"/>


            Новое воспоминание
		</CardButton>
	);
}

export default JournalAddButton;