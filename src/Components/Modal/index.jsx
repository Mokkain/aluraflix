import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { updateVideo } from '../../Services/api';

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(221, 124, 181, 0.060);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalContent = styled.div`
    background: #f7f6f5;
    padding: 20px;
    border-radius: 10px;
    width: 600px;
    max-width: 90%;
    color: #000000;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-height: 80vh; 
    overflow-y: auto;
    scrollbar-color: #e4e0e0 #b43bb6;
`;

const CloseButton = styled.button`
    background: #c30909;
    color: white;
    font-weight: 600;
    border: none;
    padding: 10px;
    border-radius: 30px;
    cursor: pointer;
    float: right;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
`;

const FormGroup = styled.div`
    margin-bottom: 15px;
`;

const Label = styled.label`
    display: block;
    margin-bottom: 5px;
    font-weight: 600;
`;

const Input = styled.input`
    width: 96%;
    padding: 10px;
    border-radius: 5px;
    border: 3px solid #215998;
    background-color: #f7f6f5;
    color: #000000;
`;

const Select = styled.select`
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 3px solid #215998;
    background-color: #f7f6f5;
    color: #000000;
`;

const TextArea = styled.textarea`
    width: 96%;
    padding: 10px;
    border-radius: 5px;
    border: 3px solid #215998;
    background-color: #f7f6f5;
    color: #000000;
    resize: vertical;
    text-align: justify;
    line-height: 1.5;
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 15px;
  display: block;
  margin: 9px;
`;

const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-around;
`;

const Button = styled.button`
    padding: 12px 40px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    color: white;
    font-weight: 500;
    background-color: ${(props) => props.$primary ? '#127356' : '#160f70'};
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
    &:hover {
    opacity: 0.8;
  }
`;

const Modal = ({ showModal, closeModal, onSubmit, videosData }) => {

    const [formData, setFormData] = useState(videosData);
    const [error, setError] = useState('');

    useEffect(() => {
        setFormData(videosData);
    }, [videosData]);

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

        const videoData = {
            id: formData.id, 
            title: formData.title,
            description: formData.description,
            image: formData.image,
            video: formData.video,
            category: formData.category,
        };

        if (formData.description.length < 25) {
            setError("La descripción debe tener al menos 25 caracteres.");
            return;
        }
        setError("");
        try {
            await updateVideo(videoData);
            console.log("Video actualizado exitosamente");
            onSubmit(videoData);

        } catch (error) {
            console.error('Error al actualizar un video nuevo:', error);
        }
    };

    if (!showModal) {
        return null;
    }

    return (
        <ModalOverlay onClick={closeModal}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={closeModal}>X</CloseButton>
                <h2>EDITAR CARD:</h2>
                <form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label htmlFor="title">Título</Label>
                        <Input
                            type="text"
                            id="title"
                            name="title"
                            minLength="3" maxLength="100"
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
                            id="description"
                            name="description"
                            minLength="25" maxLength="800"
                            rows="7" cols="20"
                            value={formData.description}
                            onChange={handleChange}
                            required
                            aria-required="true"
                        />
                        {error && <ErrorMessage>{error}</ErrorMessage>}
                    </FormGroup>
                    <ButtonGroup>
                        <Button type="submit" $primary>Guardar</Button>
                        <Button type="button" onClick={() => setFormData({
                            title: '',
                            category: '',
                            image: '',
                            video: '',
                            description: ''
                        })}>Limpiar</Button>
                    </ButtonGroup>
                </form>
            </ModalContent>
        </ModalOverlay>
    );
};

export default Modal;

