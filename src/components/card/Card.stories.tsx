import Card, { Props } from './Card'
import { StyledComponent } from 'styled-components'

export default {
    title: 'Components/Card',
    args: {
        alt: 'Zdjęcie',
        date: '22.06.2021',
        content: `Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit. Nunc ut elit dictum,
                  elementum est vitae, posuere metus. Nulla placerat 
                  bibendum mi, imperdiet accumsan enim convallis vitae. 
                  Integer scelerisque tempor tempor. Phasellus eu erat id est 
                  sagittis semper quis in felis. Vivamus fringilla enim elit, 
                  in rhoncus purus tempus ut. Aliquam sed erat diam. 
                  Donec suscipit lectus at lacus sodales consectetur id ac nisi.
                  Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit. Nunc ut elit dictum,
                  elementum est vitae, posuere metus. Nulla placerat 
                  bibendum mi, imperdiet accumsan enim convallis vitae. 
                  Integer scelerisque tempor tempor. Phasellus eu erat id est 
                  sagittis semper quis in felis. Vivamus fringilla enim elit, 
                  in rhoncus purus tempus ut. Aliquam sed erat diam. 
                  Donec suscipit lectus at lacus sodales consectetur id ac nisi.
                  Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit. Nunc ut elit dictum,
                  elementum est vitae, posuere metus. Nulla placerat 
                  bibendum mi, imperdiet accumsan enim convallis vitae. 
                  Integer scelerisque tempor tempor. Phasellus eu erat id est 
                  sagittis semper quis in felis. Vivamus fringilla enim elit, 
                  in rhoncus purus tempus ut. Aliquam sed erat diam. 
                  Donec suscipit lectus at lacus sodales consectetur id ac nisi`,
        title: 'Boże narodzenie'

    },
    decorators: [
        (Story: StyledComponent<'div', any>) => (
            <div
                style={{
                    width: '80%',
                    margin: 'auto',
                    height: '90vh',
                    marginTop: '20px'
                }}
            >
                <Story/>
            </div>
        )
    ]
}

export const Default = (args: Props) => {
    return (
        <Card
            {...args}
        />
    )
}
