import React from 'react';
import styled from 'styled-components';
import { FormInputLabel } from 'components/Label/FormInputLabel';

const Container = styled.div`
    padding: 20px 10%;
`
const Home: React.FC = () => {
    return (
        <Container>
            <FormInputLabel title="서비스 프로모션" />
            <FormInputLabel title="현 후원 통계 데이터" />
            <FormInputLabel title="우리들의 스토리" />
        </Container>
    )
}

export default Home;