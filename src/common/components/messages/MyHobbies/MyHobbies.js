import styles from './MyHobbies.module.css';

const MyHobbies = () => (
	<ul className={styles.hobbies__list}>
		<li><span className={styles.tag}>{`<ul>`}</span></li>
		<li className={styles.hobbie}>
			<span className={styles.tag}>{`<li>`}</span>
			<span className={styles.hobbie_name}>Indoor Climbing</span>
			<span className={styles.tag}>{`</li>`}</span>
		</li>
		<li className={styles.hobbie}>
			<span className={styles.tag}>{`<li>`}</span>
			<span className={styles.hobbie_name}>Soccer</span>
			<span className={styles.tag}>{`</li>`}</span>
		</li>
		<li className={styles.hobbie}>
			<span className={styles.tag}>{`<li>`}</span>
			<span className={styles.hobbie_name}>Videogames</span>
			<span className={styles.tag}>{`</li>`}</span>
		</li>
		<li><span className={styles.tag}>{`</ul>`}</span></li>
	</ul>
);

export default MyHobbies;
