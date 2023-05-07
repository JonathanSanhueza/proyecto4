import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { collection, addDoc } from 'firebase/firestore';
import db from "../assets/firebase"


function Formulario() {

  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [fecha, setFecha] = useState("");
  const [requerimientoAdicionales, setRequerimientosAdicionales] = useState("");
  const crearReserva = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'reservas'), {
        telefono: telefono, 
        nombre: nombre,
        fecha: fecha,
        requerimientoAdicional: requerimientoAdicionales,
      });
      alert("Reserva enviada");
      setNombre ("")
      setTelefono ("")
      setFecha ("")
      setRequerimientosAdicionales ("")
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  }
  
  return (
    <Form onSubmit={crearReserva} style={{margin: 24}}>
      <h3>Formulario de Reservas</h3>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre de quien reserva</Form.Label>
        <Form.Control type="text" placeholder="ingrese su nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Telefono de contacto</Form.Label>
        <Form.Control type="tel" placeholder="ingrese su numero de contacto" value={telefono} onChange={(e) => setTelefono(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Fecha de Reserva</Form.Label>
        <Form.Control type="date" value={fecha} onChange={(e) => setFecha(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Requerimientos adicionales</Form.Label>
        <Form.Control as="textarea" placeholder="Informanos cualquier detalle adicional" value={requerimientoAdicionales} onChange={(e) => setRequerimientosAdicionales(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Solicitar Reserva
      </Button>
    </Form>
  );
}

export default Formulario;

