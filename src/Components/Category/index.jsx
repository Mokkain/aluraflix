import styled from "styled-components";

const Cat = styled.section`
    width: 100%;
    padding: 0.5rem 0;
    box-sizing: border-box;
    text-align: center;
    font-size: 2rem;
    display: flex;
    align-items: center;
    flex-direction: column;
`
const CatTitle = styled.h3`
    color: white;
    font-weight: bold;
    margin-top: 3.5rem;
    border-radius: 15px;
    width: clamp(17.875rem, 30vw, 27rem);
    height: 4.375rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: clamp(1.25rem, 2.4vw, 2rem);
    background-color: black;
`
const CardContainer = styled.div`
    width: 100%;
    display: flex;
    overflow-x: auto;
    padding: 1rem;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
    margin: 0 0.5rem;
    background-color: transparent;
`

const Category = ({name}) => {
    return (
        <>
                <Cat>
                    <CatTitle>{name}</CatTitle>
                    <CardContainer>
                        {/* {cards.map((card) => (
                <Card 
                    datos={card} 
                    key={card.id}
                    primaryColor={primaryColor}
                    onClick={() => onCardClick(card)}
                    onDelete={() => handleDelete(card.id, card.title)}
                    onEdit={() => onCardEdit(card)}
                />
            ))} */}
                    </CardContainer>
                </Cat>
            )
        </>
    );
}

export default Category;