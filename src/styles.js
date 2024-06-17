import styled from 'styled-components';

export const SectionFormLogin = styled.div`
    background-color: ${props => props.theme.backgroundColor};
`

export const TextPrimary = styled.span`
    color: ${props => props.theme.textPrimaryColor};
`

export const TextSecond = styled.span`
    color: ${props => props.theme.textSecondColor};
`

export const InputTextSecond = styled.input`
    color: ${props => props.theme.textSecondColor};
    background-color: ${props => props.theme.backgroundColor};
`

export const LoginIconContainer = styled.div`
    border-color: ${props => props.theme.borderLoginColor};
    color: ${props => props.theme.iconLoginColor};
`

export const IconToolz = styled.img`
    color: ${props => props.theme.iconLoginColor};
`

export const Divider = styled.div`
    color: ${props => props.theme.textPrimaryColor};
    background-color: ${props => props.theme.dividerColor};
`

export const CircleiconPrev = styled.div`
    border-color: ${props => props.theme.iconLoginColor};
    color: ${props => props.theme.iconLoginColor};
`

export const TextCreateAccount = styled.span`
    color: ${props => props.theme.iconLoginColor};
`

export const HeaderMobile = styled.div`
    border-color: ${props => props.theme.dividerColor};
`
