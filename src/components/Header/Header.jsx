import { useState } from 'react';
import Button from '../Button/Button';
import SelectUser from '../SelectUser/SelectUser';
import Logo from' ../Logo/Logo';

const logos = ['/logo.svg', '/vite.svg'];


function Header() {
	const [logoIndex, setLogoIndex] = useState(0);

	const toggleLogo = ()=> {
		setLogoIndex(state => Number(!state));
	return (
		<>
			<Logo image={logos[logoIndex]}/>
			<SelectUser/>
			<Button onClick={toggleLogo}>Сменить logo<Button/>
		</>
	);
};

export default Header;