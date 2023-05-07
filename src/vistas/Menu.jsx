import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { collection, getDocs} from 'firebase/firestore';
import db from "../assets/firebase"
import { useEffect, useState } from 'react';
import PlatoCard from '../componentes/Plato';


function Menu() {
  const [platos, setPlatos] = useState([])
  useEffect(() => {
    async function fetchData(){
      const carta = collection(db, 'menu');
      const cartaSnapshot = await getDocs(carta);
      const cartaList = cartaSnapshot.docs.map(doc => doc.data());
      setPlatos(cartaList)
      console.log (cartaList)
    }
    fetchData()


  }, [])
  
  return (
    <>
    <div  style={{margin: 24}}>
    <h1>Menu</h1>
    <Row xs={1} md={2} className="g-4 mt-4">
      {platos.map((plato, idx) => (
        <Col>
          <PlatoCard plato={plato}/>
        </Col>
      ))}
    </Row>
    </div>
    </>
  );
}

export default Menu;