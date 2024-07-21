import'./JournalItem.css';

function JournalItem({title, post, date}) {
	const formateDate = new Intl.DateTimeFormat('ru-Ru').format(date);

	return (
		<>
			<h2 className='journal-item__header'>{title}</h2>
			<h2 className='journal-item__body'>
				<div className='journal-item__date'>{formateDate}</div>
				<div className='journal-item__text'>{post}</div>
			</h2>
		</>
	);
}

export default JournalItem;