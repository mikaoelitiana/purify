import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import data from '../data'
import DataTypeMethod from './DataTypeMethod'
import SyntaxHighlighter from 'react-syntax-highlighter'
import highlightStyle from 'react-syntax-highlighter/styles/hljs/googlecode'

const Container = styled.div`
`

const Title = styled.h1`
    font-weight: inherit;

    @media only screen and (max-width : 768px) {
        text-align: center;
        margin-top: 0;
    }
`

const Description = styled.div`
    padding-right: 15%;
    font-size: 1.05em;

    @media only screen and (max-width : 768px) {
        padding-right: 0;
        text-align: center;
    }
`

const TopicHeader = styled.h2`
    font-weight: inherit;
    margin-bottom: 0;

    @media only screen and (max-width : 768px) {
        text-align: center;
    }
`
const TypeclassBadges = styled.div`
    margin-top: -20px;
    padding-bottom: 20px;
    display: flex;
    flex-wrap: wrap;

    @media only screen and (max-width : 768px) {
        justify-content: center;
    }
`

const TypeclassBadge = styled.span`
    background-color: #af87e6;
    border-radius: 6px;
    color: white;
    padding: 0px 5px;
    font-size: 13px;
    margin-right: 4px;
    margin-bottom: 5px;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`

const ExamplesContainer = styled.div`
    pre {
        margin: 0;
    }
`

const ExampleHeader = styled.div`
    text-align: center;
    background-color: #f9f4f4;
    padding: 4px;
`

const Example = styled.div`
    max-width: 650px;
    margin: 10px 0;
    border: 1px solid #f3eeee;
`

const DataTypeContent = adt => () =>
    <Container>
        <Title>{adt.name}</Title>
        <TypeclassBadges>
            {adt.implements.map(typeclass =>
                <TypeclassBadge key={typeclass}>{typeclass}</TypeclassBadge>
            )}
        </TypeclassBadges>
        <Description>{adt.description}</Description>
        <ExamplesContainer>
            {adt.examples.map(example => (
                <Example>
                    <ExampleHeader>{example.title}</ExampleHeader>
                    <SyntaxHighlighter language="typescript" style={highlightStyle}>{example.content.join('\n')}</SyntaxHighlighter>
                </Example>
            ))}
        </ExamplesContainer>
        <TopicHeader>Constructors</TopicHeader>
        {adt.constructors.map(DataTypeMethod)}
        <TopicHeader>Static methods</TopicHeader>
        {adt.staticMethods.map(DataTypeMethod)}
        {adt.instanceMethods.length > 0 &&
            <div>
                <TopicHeader>Instance methods</TopicHeader>
                {adt.instanceMethods.map(DataTypeMethod)}
            </div>
        }
        {adt.helperMethods && adt.helperMethods.length > 0 &&
            <div>
                <TopicHeader>Helper methods</TopicHeader>
                {adt.helperMethods.map(DataTypeMethod)}
            </div>
        }
    </Container>

export default DataTypeContent