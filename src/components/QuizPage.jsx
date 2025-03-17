import axios from "axios";
import { useEffect, useState } from "react"
import shuffleArray from "../utils/shuffle-array";
import { Box, Button, ButtonGroup, CircularProgress, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import { Done } from "@mui/icons-material";

function QuizPage(){
    const [question, setQuestion] = useState("");
    const [choices, setChoices] = useState([]);
    const [correctAnswer, setCorrectAnswer] = useState("");
    const [isAnswered, setIsAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");
    const [score, setScore] = useState(0);
    const [isNewHighScore, setIsNewHighScore] = useState(false);
    const [chosenOption, setChosenOption] = useState("");

    function getQuestion(){
        setIsLoading(true);
        axios.get("https://the-trivia-api.com/v2/questions?limit=1&categories=literature").then(({data}) => {
            const quiz = data[0];
            setQuestion(quiz.question.text);
            setCorrectAnswer(quiz.correctAnswer);
            
            const allAnswers = [...quiz.incorrectAnswers];
            allAnswers.push(quiz.correctAnswer);
            const choices = shuffleArray(allAnswers).map((answer, index) => {
                return {option: ["A", "B", "C", "D"][index], answer}
            })
            
            setChoices(choices);
            setIsLoading(false);
            setIsAnswered(false);
        }).catch(() => {
            setError("Well, this is embarrassing! There seems to be an error fetching your quiz question... Please refresh the page and see if that fixes things.");
            setIsLoading(false);
        })
    }

    useEffect(() => {
        if(!localStorage.getItem("highScore")){
            localStorage.setItem("highScore", 0);
        }
        getQuestion();
    }, [])

    function startNewGame(){
        if(isNewHighScore){
            localStorage.setItem("highScore", score)
        }
        setScore(0);
        setIsAnswered(false);
        setIsNewHighScore(false);
        getQuestion();
    }

    function handleQuizChoice(choice){
        setIsAnswered(true);
        setChosenOption(choice.option);
        if(choice.answer === correctAnswer){
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
            if(score > localStorage.getItem("highScore")){
                setIsNewHighScore(true);
            }
        }
    }

    function getNextQuestion(){
        setScore((score) => {return score+1});
        getQuestion();
    }

    if(isLoading){
        return <CircularProgress/>
    }

    if(error){
        return <p>{error}</p>
    }

    return (
        <section>
            <header>
                <h1>Quiz</h1>
                <p>Here's a fun quiz for you to try out! I decided to make this one about Literature, since I know how much you like reading and all.</p>
            </header>
            <main>
                <Typography>{question}</Typography>
                <ButtonGroup 
                    sx={{display: "table"}}
                >
                    {choices.map((choice) => {
                        return <Box key={`choice-${choice.option}`}>
                            <Button
                                variant={isAnswered && choice.option === chosenOption ? "contained" : "text"}
                                disabled={isAnswered}
                                onClick={() => {handleQuizChoice(choice)}}
                            >
                                {choice.option}. {choice.answer}
                            </Button>
                            {isAnswered && choice.answer === correctAnswer ? <Done/> : null}
                        </Box>
                    })}
                </ButtonGroup>
                <Typography>Score: {score}</Typography>
                {localStorage.getItem("highScore") !== 0 ? <Typography>High score: {localStorage.getItem("highScore")}</Typography> : null}
                <br/>
                {isAnswered ? (
                    isCorrect 
                    ?
                    <>
                        <Typography variant="subtitle1">Well done! That's the correct answer!</Typography>
                        <Button variant="contained" onClick={getNextQuestion}>Next question</Button>
                    </>
                    :
                    <>
                        <Typography variant="subtitle1">That's the wrong answer!</Typography>
                        {isNewHighScore ? <>
                        <br/>
                            <Typography variant="subtitle1">Well done! You've set a new high score!</Typography>
                            <Typography variant="subtitle2">New high score: {score}</Typography>
                        </> : null}
                        <Button onClick={startNewGame}>Start new game</Button>
                    </>
                ) : null}
            </main>
        </section>
    )
}

export default QuizPage