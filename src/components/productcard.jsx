// write product card here
import Button from "./button";
const productImage = "https://coherent-labs.com/wp-content/uploads/2017/05/logo_Hummingbird_4d1379e04c615504558b870cf881ba22.png";
const name = "hummingbird";
const price = "$100";

const Productcard = () => {
  return (
    <div style={styles.card}>
      <img src={productImage} alt="" style={styles.image} />
      <h2 style={styles.name}>{name}</h2>
      <p style={styles.price}>Price: {price}</p>
      <Button />
    </div>
  );
};

const styles = {
    card: {
        border: "1px solid rgb(0, 0, 0)",
        borderRadius: "8px",
        padding: "45px",
        margin: "25px",
        backgroundColor: "rgb(246, 252, 255)",
        textAlign: "center",
      },
    
      image: {
        borderRadius: "50%",
        width: "100px",
        height: "100px",
      },
    
      name: {
        margin: "8px 0",
        fontSize: "1.5em",
        color: "#213555",
      },
  price: {
    color: "#09122C",
    fontSize: "1em",
  },
};

export default Productcard;