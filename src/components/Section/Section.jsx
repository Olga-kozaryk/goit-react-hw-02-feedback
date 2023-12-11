import {SectionTitle } from './SectionTitle.styled'

export const Section = ({title, children}) => {
    return (
        <section>
            <SectionTitle >{title}</SectionTitle>
            {children}
        </section>
    )
}