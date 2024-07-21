import {useContext} from 'react';
import styles from './SelectUser.module.css';
import { UserContext } from '../../context/user.context.jsx';



function SelectUser() {
	const { userId, setUserId } = useContext(UserContext);
	
	const changeUser = (e) => {
		setUserId(Number(e.target.value));
	};

	return (
		<select className={styles['select']} name="user" id="user" value={userId} onChange={changeUser}>
			<option value="1">Valery</option>
			<option value="2">Ksenia</option>
			<option value="3">Dimasinka</option>
		</select>
	);
}

export default SelectUser;