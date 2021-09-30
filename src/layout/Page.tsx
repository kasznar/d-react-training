import React, {FC} from 'react';
import {Container} from "@mui/material";

export const Page: FC = ({children}) => {
    return <Container sx={{mt: 5}}>
        {children}
    </Container>
}