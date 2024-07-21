import CardButton from '../CardButton/CardButton.jsx';
import'./JournalAddButton.css';

function JournalAddButton({clearForm}) {

	return (
		<CardButton className='journal-add' onClick={clearForm}>

			<img className='pluse' src="/pluse.svg" alt="Логотип журнала"/>


            Новое воспоминание
		</CardButton>
	);
}

export default JournalAddButton;