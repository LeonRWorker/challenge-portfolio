import styled from "styled-components";

export const Content = styled.div`
    gap: 20px;
    width: 100%;
    display: flex;
    padding-right: 20px;
    align-items: center;
    flex-direction: column;
    /* width: calc(100% - 100px); */
    @media (max-width: 1023px) {
        padding-right: 0px;
    }
`
export const Text = styled.span``
export const Legend = styled.span``
export const Block = styled.div`
    gap: 20px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`
export const DropDown = styled.div`
    width: 100%;
    display: flex;
    cursor: pointer;
    padding: 20px 30px;
    border-radius: 10px;
    align-items: center;
    flex-direction: row;
    transition: .3s linear;
    background-color: #302F3D;
    justify-content: space-between;
    ${Legend} {
        color: #837E9F;
        font-weight: 600;
        font-size: 1.4em;
    }
    ${Text} {
        color: #837E9F;
        font-weight: 600;
    }
    :hover {
        transform: scale(1.01);
    }
`
export const Nothing = styled.div`
    width: 100%;
    display: flex;
    color: #837E9F;
    cursor: pointer;
    min-height: 100px;
    padding: 20px 30px;
    border-radius: 10px;
    align-items: center;
    flex-direction: row;
    transition: .3s linear;
    background-color: #302F3D;
    justify-content: center;
`