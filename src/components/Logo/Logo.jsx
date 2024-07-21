import style from './Logo.module.css';
import { memo } from 'react';


function Logo({ image }) {
	console.log('Logo');

	return <img className={style.logo} src={image} alt='Логотип журнала'></img>;
}
export default memo(Logo);