import styles from "./Card.module.css";

const Card = ({ image, name }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} />
      <h2>{name}</h2>
    </div>
  );
};

export default Card;
