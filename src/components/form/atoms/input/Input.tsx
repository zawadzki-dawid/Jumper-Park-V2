import styled from 'styled-components'
import { useFormikContext } from 'formik'
import { FocusEvent, forwardRef, InputHTMLAttributes, Ref, useRef } from 'react'

// Input

const InputStyled = styled.input`
	width: 100%;
	height: 100%;
	outline: none;
	padding: 0 16px;
	color: #e3e3e3;
	font-weight: 500;
	font-size: 1.8rem;
	box-sizing: border-box;
	border: 2px solid #e3e3e3;

	&:focus {
		color: var(--black);
		border: 2px solid var(--black);
	}
`

// Input

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
	fieldName: string
}

export const Input = forwardRef(({ fieldName, ...rest }: Props, ref: Ref<HTMLInputElement>) => {
	// Formik
	const formikProps = useFormikContext()

	// Method
	const onBlur = (event: FocusEvent) => {
		formikProps.setFieldValue(fieldName, (event.target as HTMLInputElement).value)
	}

	return <InputStyled onBlur={onBlur} {...rest} ref={ref} />
})

// InputDate

export const InputDate = ({ fieldName, ...rest }: Props) => {
	// Formik
	const formikProps = useFormikContext()

	// Ref
	const inputRef = useRef<HTMLInputElement | null>(null)

	// Method
	const onBlur = (event: FocusEvent) => {
		// ;(inputRef.current as HTMLInputElement).type = 'text'
		formikProps.setFieldValue(fieldName, (event.target as HTMLInputElement).value)
	}

	const onFocus = () => {
		// ;(inputRef.current as HTMLInputElement).type = 'date'
		// ;(inputRef.current as HTMLInputElement).showPicker()
	}

	return <InputStyled type={'date'} ref={inputRef} onBlur={onBlur} onFocus={onFocus} {...rest} />
}
