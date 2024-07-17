import'./JournalForm.css';
import {useState} from 'react';
import Button from '../Button/Button.jsx';

function JournalForm() {
	const [inputData, setInputData] = useState('');

	const inputChange = (event) => {
		setInputData(event.target.value);
		console.log(inputData);
	};

	const addJornalItem = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		console.log(formProps);
	};

	return (
		<form className='journal-form' onSubmit={addJornalItem}>
			<input type='text' name='title'/>
			<input type='date' name='date'/>
			<input type='text' name='teg' value={inputData} onChange={inputChange}/>
			<textarea name='post' id="" cols="30" rows="10"></textarea>
			<Button text="Сохранить"/>
		</form>

	);
}

export default JournalForm;