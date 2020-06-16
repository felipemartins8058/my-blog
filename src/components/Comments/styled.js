import styled from 'styled-components'

export const CommentsWrapper = styled.section`
    margin: auto;
    max-width: 70rem;
    padding: 3rem 6.4rem 3rem;

    iframe[src*="ads-iframe"]{
        display: none;
    }

    #disqus-thread a{
        color: #1fa1f2;
    }
`

export const CommentsTitle = styled.h2`
    color: #fff;
    font-size:2.1rem;
    font-weight: 700;
    padding-bottom: 2rem;
`