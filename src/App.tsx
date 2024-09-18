import { useEffect } from "react";
import styled from "styled-components";

const MasterWrapper = styled.div`
    height: 100px;
    background-color: red;
`;

export const App = () => {
    useEffect(() => {
        fetch("http://localhost:8000/posts")
            .then((response) => response.json())
            .then((data) => console.log(data));
    }, []);

    return <MasterWrapper></MasterWrapper>;
};
