import styled from 'styled-components'
import { useFormikContext } from 'formik'
import { useState, useEffect } from 'react'

// Components
import Button, { Props as PropsButton } from '../../atoms/button/Button'

// BundlePicker

export const bundles = ['Pakiet standard', 'Pakiet plus']

export interface Props {
    fieldName: string
}

const BundleStyled = styled.div`
    width: 100%;
    height: 56px;
`

const Bundle = ({
    text,
    ...rest
}: PropsButton) => {
    return (
        <BundleStyled>
            <Button
                {...rest}
                text={text}
                rounded={true}
                type={'button'}
            />
        </BundleStyled>
    )
}

const Wrapper = styled.div`
    margin: auto;
    row-gap: 10px;
    display: flex;
    max-width: 562px;
    column-gap: 50px;
    flex-direction: column;

    @media only screen and (min-width: 662px) {
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
            bundles.map((bundle, index) => 
                <Bundle
                    key={index}
                    text={bundle}
                    picked={value === bundle}
                    onClick={() => setValue(bundle)}
                />
            )
        }
        </Wrapper>
    )
}