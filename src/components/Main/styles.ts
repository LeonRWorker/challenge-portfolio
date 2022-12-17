import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    overflow-x: hidden;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`
export const Content = styled.div`
    gap: 20px;
    width: 100%;
    display: flex;
    min-height: 100vh;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    background-color: #22212C;
    @media (max-width: 1023px) {
        padding: 20px 0px;
        overflow-x: hidden;
        flex-direction: column;
        justify-content: flex-start;
    }
`
export const Section = styled.aside`
    gap: 20px;
    width: 75%;
    height: 94vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    @media (max-width: 1023px) {
        gap: 20px;
        width: 90%;
        height: auto;
    }
    @media (min-width: 1024px) and (max-width: 1249px) {
        width: 65%;
    }
    @media (min-width: 1250px) and (max-width: 1500px) {
        width: 70%;
    }
`
// --text-color: #837E9F;
// --bg-cards: #302F3D;
// --bg-techs: #CB92B1;