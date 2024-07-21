import style from './Logo.module.css';


function Logo({ image }) {
	console.log('Logo');

	return <img className={style.logo} src={image} alt='Логотип журнала'></img>;
}