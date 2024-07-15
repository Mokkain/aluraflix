import React, { useState } from 'react';
import styled from 'styled-components';
import { createVideo } from '../Services/api.jsx';

const Container = styled.div`
    max-width: 90%;
    margin: 0 auto;
    padding: 30px;
`;

const Title = styled.h2`
    text-align: center;
    color: #000000;
    font-weight: bolder;
    border-top: 6px ridge #010b16;
    border-bottom: 6px ridge #010b16;
    padding: 30px 0;
    font-size: 30px;
`;

const Subhead = styled.p`
    text-align: center;
    font-weight: 700;
    margin: 60px 0;
    font-size: 20px;
`;

const SubTitle = styled.h3`
    color: #000000;
    margin-bottom: 50px;
    width: fit-content;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 5px rgb(0, 0, 0);
`;

const Form = styled.form`
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 1fr; 
    grid-template-rows: auto auto auto auto; 
`;

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
`;

const Label = styled.label`
    margin-bottom: 5px;
    font-weight: 600;
    color: #000000;
    font-size: 18px;
`;

const Input = styled.input`
    padding: 10px;
    border-radius: 5px;
    border: 3px solid #90510e;
    background-color: #f7f6f5;
    color: #000000;
    font-size: 18px;

  &:focus {
    border-color: #ff0000;
  }
`;

const Select = styled.select`
    padding: 10px;
    border-radius: 5px;
    border: 3px solid #90510e;
    background-color: #f7f6f5;
    color: #000000;
    font-size: 18px;
`;

const TextArea = styled.textarea`
    grid-column: span 2; 
    width: calc(99% - 20px); 
    padding: 10px;
    border-radius: 5px;
    border: 3px solid #90510e;
    background-color: #f7f6f5;
    color: #000000;
    resize: vertical;
    font-size: 18px;
    text-align: justify;
    line-height: 1.5;

  &:focus {
    border-color: #ff0000;
  }
`;

const ErrorMessage = styled.span`
    color: red;
    font-size: 15px;
    display: block;
    margin: 9px;
`;

const ButtonContainer = styled.div`
    grid-column: span 2; 
    display: flex;
    justify-content: center; 
    margin-top: 20px;
`;

const Button = styled.button`
    margin: 0 10px;  
    padding: 12px 40px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    color: white;
    height: fit-content;
    background-color: ${props => props.primary ? '#127356' : '#160f70'};

  &:hover {
    opacity: 0.8;
  }
`;

const NewVideo = () => {
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        image: '',
        video: '',
        description: ''
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        //Clear the error message
        if (name === 'description' && value.length >= 25) {
            setError('');
        }

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.description.length < 25) {
            setError("La descripción debe tener al menos 25 caracteres.");
            return;
        }
        setError("");
        try {
            const newVideo = {
                title: formData.title,
                category: formData.category,
                image: formData.image,
                video: formData.video,
                description: formData.description,
            };
            await createVideo(newVideo);
        } catch (error) {
            console.error('Error al crear un video nuevo:', error);
        }
    };

    return (
        <Container>
            <Title>NUEVO VIDEO</Title>
            <Subhead>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</Subhead>
            <SubTitle>Crear Tarjeta</SubTitle>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="title">Título</Label>
                    <Input
                        placeholder="Ingrese el título"
                        type="text"
                        id="title"
                        name="title"
                        minlength="3" maxlength="100"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        aria-required="true"
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="category">Categoría</Label>
                    <Select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        required
                        aria-required="true"
                    >
                        <option value="">Seleccione una categoría</option>
                        <option value="Lofi">Lofi</option>
                        <option value="Clásica">Clásica</option>
                        <option value="Sonidos Ambientales">Sonidos Ambientales</option>
                    </Select>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="image">Imagen</Label>
                    <Input
                        placeholder="Ingrese el enlace de la miniatura"
                        type="url"
                        id="image"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        required
                        aria-required="true"
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="video">Video</Label>
                    <Input
                        placeholder="Ingrese el enlace del video"
                        type="url"
                        id="video"
                        name="video"
                        value={formData.video}
                        onChange={handleChange}
                        required
                        aria-required="true"
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="description">Descripción</Label>
                    <TextArea
                        placeholder="¿De qué se trata este video?"
                        id="description"
                        name="description"
                        minlength="25" maxlength="800"
                        rows="8" cols="12"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        aria-required="true"
                    />
                    {error && <ErrorMessage>{error}</ErrorMessage>}
                </FormGroup>
                <ButtonContainer>
                    <Button type="submit" primary>Guardar</Button>
                    <Button type="reset" onClick={() => setFormData({
                        title: '',
                        category: '',
                        image: '',
                        video: '',
                        description: ''
                    })}>Limpiar</Button>
                </ButtonContainer>
            </Form>
        </Container>
    );
};

export default NewVideo;
