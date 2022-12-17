import styled from "styled-components";

export const Content = styled.div`
    width: 17%;
    display: flex;
    min-height: 94vh;
    align-items: center;
    flex-direction: column;
    min-width: 320px !important;
    justify-content: space-between;
    @media (max-width: 1023px) {
        gap: 20px;
        width: 90%;
        height: auto;
    }
`
export const Card = styled.div`
    width: 100%;
    gap: 15px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    transition: .3s linear;
    flex-direction: column;
    justify-content: center;
    background-color: #302F3D;
    box-shadow: 0px 3px 10px -1px rgba(0,0,0,0.3);
    :hover {
        transform: scale(1.01);
    }
    :nth-child(1){
        padding: 30px !important;
    }
    :nth-child(2){
        padding: 40px !important;
    }
    :not(:nth-child(1)){
        padding: 20px;
    }
`
export const Dev = styled.img`
    width: 100px;
    cursor: default;
    border-radius: 50%;
    border: 2px solid #66ce48;
`
export const Name = styled.span`
    color: #837E9F;
    cursor: default;
    font-size: 1.6em;
    font-weight: 600;
    text-align: center;
`
export const Office = styled.span`
    color: #837E9F;
    cursor: default;
    font-size: 0.9em;
    text-align: center;
`
export const Legend = styled.span`
    width: 80%;
    color: #837E9F;
    font-weight: 600;
    font-size: 1.5em;
    text-align: center;
    margin-bottom: 10px;
`
export const Tecnology = styled.span``
export const Tecnologies = styled.div`
    gap: 10px;
    width: 90%;
    display: grid;
    margin-bottom: 10px;
    grid-template-columns: repeat(3, 1fr);
    ${Tecnology} {
        cursor: default;
        font-size: 0.6em;
        font-weight: 600;
        padding: 8px 8px;
        text-align: center;
        border-radius: 20px;
        text-transform: uppercase;
        background-color: #CB92B1;
    }
`
export const Icon = styled.span`
    color: #837E9F;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Text = styled.span`
    color: #837E9F;
`
export const Link = styled.button`
    gap: 20px;
    width: 100%;
    border: none;
    display: flex;
    cursor: pointer;
    padding: 5px 0px;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
    background-color: transparent;
    ${Icon} * {
        font-size: 1.2em;
        transition: .3s linear;
    }
    ${Text} {
        font-size: 1.2em;
        font-weight: 600;
        transition: .3s linear;
    }
    :hover * {
        color: white;
    }
`