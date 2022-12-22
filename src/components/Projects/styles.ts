import styled from "styled-components";

export const Content = styled.div`
    gap: 20px;
    width: 100%;
    display: flex;
    padding-right: 20px;
    align-items: center;
    flex-direction: column;
    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-track {
        background: #888;
    }
    ::-webkit-scrollbar-thumb {
        background: #302F3D;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #302F3D;
    }
    @media (max-width: 1023px) {
        padding-right: 0px;
    }
    /* width: calc(100% - 100px); */
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
export const Folders = styled.div`
    gap: 20px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media (max-width: 767px) {
        grid-template-columns: repeat(1, 1fr);
    }
`
export const Folder = styled.div`
    width: 100%;
    display: flex;
    cursor: pointer;
    padding: 20px 30px;
    border-radius: 10px;
    flex-direction: column;
    transition: .3s linear;
    background-color: #302F3D;
    :hover {
        transform: scale(1.01);
    }
`
export const FullFolder = styled.div`
    width: 200%;
    display: flex;
    cursor: pointer;
    padding: 20px 30px;
    border-radius: 10px;
    flex-direction: column;
    transition: .3s linear;
    background-color: #302F3D;
    :hover {
        transform: scale(1.01);
    }
`
export const Project = styled.span`
    gap: 10px;
    width: 100%;
    display: flex;
    color: #837E9F;
    font-size: 1em;
    font-weight: 600;
    align-items: center;
    /* justify-content: center; */
`
export const Description = styled.span`
    width: 100%;
    color: #837E9F;
    text-align: left;
    margin: 15px 0px;
`
export const RatesAndLanguages = styled.div`
    gap: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 1023px) {
        flex-direction: column;
        justify-content: flex-start;
    }
`
export const Rates = styled.span`
    gap: 10px;
    display: flex;
    color: #837E9F;
    font-size: 1em;
    font-weight: 600;
    align-items: center;
    justify-content: center;
    @media (max-width: 1023px) {
        width: 100%;
        justify-content: flex-start;
    }
`
export const Languages = styled.span`
    gap: 10px;
    width: 70%;
    display: flex;
    color: #837E9F;
    font-size: 1em;
    font-weight: 600;
    align-items: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: flex-end;
    @media (max-width: 1023px) {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
`