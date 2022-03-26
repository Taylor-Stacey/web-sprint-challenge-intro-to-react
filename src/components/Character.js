// Write your Character component here
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';


const Character = ({props}) => {
    const {
        name,
        birth_year,
        gender,
        height,
        mass,
        eye_color,
    } = props;

    const StyledDiv = styled.div`
    font-size: 1.1rem;
    `
    const StyledH1 = styled.h1`
    color: black;
    text-shadow: 1px 1px 5px skyblue;
    `
    const StyledP = styled.p`
    font-weight: bold;
    color: #443e3e;
    text-shadow: 1px 1px 5px lemonchiffon;
    `

    return (
        <StyledDiv>
            <StyledH1>
                {name}
            </StyledH1>
            <StyledP>
               Birth year: {birth_year}
            </StyledP>
            <StyledP>
               Gender: {gender}
            </StyledP>
            <StyledP>
               Height: {height}
            </StyledP>
            <StyledP>
               Mass: {mass}
            </StyledP>
            <StyledP>
               Eye Color: {eye_color}
            </StyledP>
           
            
        </StyledDiv>
    )
}

export default Character;


// birth_year: "19BBY"
// created: "2014-12-09T13:50:51.644000Z"
// edited: "2014-12-20T21:17:56.891000Z"
// eye_color: "blue"
// films: (4) ['A New Hope', 'The Empire Strikes Back', 'Return of the Jedi', 'Revenge of the Sith']
// gender: "male"
// hair_color: "blond"
// height: "172"
// homeworld: "http://swapi.dev/api/planets/1/"
// mass: "77"
// name: "Luke Skywalker"
// skin_color: "fair"
// species: []
// starships: (2) ['http://swapi.dev/api/starships/12/', 'http://swapi.dev/api/starships/22/']
// url: "http://swapi.dev/api/people/1/"
// vehicles: (2) ['http://swapi.dev/api/vehicles/14/', 'http://swapi.dev/api/vehicles/30/']