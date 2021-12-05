import styled from 'styled-components'
import { useFormikContext } from 'formik'
import { useState, useEffect } from 'react'

// Components
import Button, { Props as PropsButton } from '../../atoms/button/Button'

// AgeSpanPicker

export const spans = ['6-7 lat', '8-10 lat', '11-12 lat', '13-14 lat']

export interface Props {
    fieldName: string
}

const AgeSpanStyled = styled.div`
    width: 100%;
    height: 45px;
`

const AgeSpan = ({
    text,
    ...rest
}: PropsButton) => {
    return (
        <AgeSpanStyled>
            <Button
                {...rest}
                text={text}
                rounded={true}
                type={'button'}
            />
        </AgeSpanStyled>
    )
}

const Wrapper = styled.div`
    width: 100%;
    margin: auto;
    row-gap: 10px;
    display: flex;
    max-width: 612px;
    column-gap: 20px;
    flex-direction: column;

    @media only screen and (min-width: 712px) {
        flex-direction: row;
        justify-content: space-between;
    }
`

export default ({
    fieldName
}: Props) => {
    // State
    const [value, setValue] = useState<string>('')

    // Formik
    const formikProps = useFormikContext()

    // Effect
    useEffect(() => {
        formikProps.setFieldValue(fieldName, value)
    }, [value])

    return (
        <Wrapper>
        {
            spans.map((span, index) => 
                <AgeSpan
                    key={index}
                    text={span}
                    picked={span === value}
                    onClick={() => setValue(span)}
                />
            )
        }
        </Wrapper>
    )
}