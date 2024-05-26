import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap'; // Importe o componente de card
import { IReadRestaurante } from "../../Interface/interface";
import './style.css';
import { listaRestaurante } from "../../api/restauranteApi";

function ListagemRestaurantes() {
    const [restaurantes, setRestaurante] = useState<IReadRestaurante[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchListaRestaurante() {
            try {
                const resultado = await listaRestaurante();
                if (resultado) {
                    setRestaurante(resultado.data.restaurantes);
                } else {
                    console.error("Erro ao listar restaurantes");
                }
            } catch (error) {
                console.error(`Erro ao listar restaurantes: ${error}`);
            } finally {
                setLoading(false);
            }
        }
        fetchListaRestaurante();
    }, []);

    return (
        <div className="restaurante-lista">
            {loading ? (
                <p>Carregando...</p>
            ) : restaurantes.length > 0 ? (
                restaurantes.map((restaurante) => (
                    <Card key={restaurante.rest_id}style={{ width: '18rem', marginBottom: '10px', margin: '1rem' }}>
                        <Card.Header>{restaurante.rest_nome}</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <strong>ID:</strong> {restaurante.rest_id}
                            </Card.Text>
                            <Card.Text>
                                <strong>Localização:</strong> {restaurante.rest_localizacao}
                            </Card.Text>
                            <Card.Text>
                                <strong>Tipo de Cozinha:</strong> {restaurante.rest_tipoCozinha}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))
            ) : (
                <p>Nenhum restaurante registrado.</p>
            )}
        </div>
    );
}

export default ListagemRestaurantes;

