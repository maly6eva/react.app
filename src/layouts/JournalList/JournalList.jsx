import'./JournalList.css';
import CardButton from '../../components/CardButton/CardButton.jsx';
import JournalItem from '../../components/JournalItem/JournalItem.jsx';
import { useContext } from 'react';
import { UserContext } from '../../context/user.context';

function JournalList({ items }) {
	const { userId} = useContext(UserContext);

	if (items.length === 0) {
		return <p>Записей пока нет, добавте первую.</p>;
	}
	const sortItems = (a, b) => {
		if (a.date < b.date) {
			return 1;
		} else {
			return -1;
		}
	};

	return <>
		{ items
			.filter(el => el.userId === userId)
			.sort(sortItems)
			.map(el => (
				<CardButton key={el.id}>
					<JournalItem
						title={el.title}
						post={el.post}
						date={el.date}
					/>
				</CardButton>
			))}
	</>;

}

export default JournalList;