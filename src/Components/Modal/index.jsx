import React, { useState } from 'react';
import styled from 'styled-components';

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
    scrollbar-color: #e4e0e0 #b43bb6;
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
    background-color: ${props => props.primary ? '#127356' : '#160f70'};
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
`;

const Modal = ({ showModal, closeModal, onSubmit }) => {
    const [formData, setFormData] = useState({
        title: '',
        category: 'Lofi',
        image: '',
        video: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        closeModal();
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
                            value={formData.title}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="category">Categoría</Label>
                        <Select
                            id="category"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                        >
                            <option value="Lofi">Lofi</option>
                            <option value="Clásica">Clásica</option>
                            <option value="Sonidos Ambientales">Sonidos Ambientales</option>
                        </Select>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="image">Imagen</Label>
                        <Input
                            type="text"
                            id="image"
                            name="image"
                            value={formData.image}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="video">Video</Label>
                        <Input
                            type="text"
                            id="video"
                            name="video"
                            value={formData.video}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="description">Descripción</Label>
                        <TextArea
                            id="description"
                            name="description"
                            rows="7" cols="20"
                            value={formData.description}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <ButtonGroup>
                        <Button type="submit" primary>Guardar</Button>
                        <Button type="button" onClick={() => setFormData({
                            title: '',
                            category: 'Lofi',
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
