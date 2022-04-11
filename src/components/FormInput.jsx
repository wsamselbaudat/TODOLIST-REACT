import  React from 'react';
import Button from "@material-ui/core/Button";
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, gray 30%, black 90%)',
        border: 2,
        color: 'white',
        height: 40,
        padding: '0 10px',
        whiteSpace: 'nowrap',
        margin: '15px 0 0 30px',
    },
    label: {
        width: '80%'
    }
});


const TodoCreator = ({ theme, todo, setTodo, clearInput, inputRef, isInputEmpty, preventSubmit }) => {
    const classes = useStyles();

    return (
        <div className="form__input">
            <ThemeProvider theme={theme}>
                <FormControl   className={classes.label}>
                    <TextField
                        id="outlined-basic"
                        label="Co dzisiaj robimy?" 
                        value={todo}
                        variant="outlined"
                        onChange={(e) => setTodo(e.target.value)}
                        onFocus={clearInput}
                        ref={inputRef}
                        aria-describedby="component-error-text"
                        onKeyPress={preventSubmit}
                    />

                    { !isInputEmpty ?
                        <></>
                        :
                        <>
                            <FormHelperText id="component-error-text">Pole nie może być puste!</FormHelperText>
                        </>
                    }
                </FormControl>
                <Button
                    type="submit"
                    alt="add-note"
                    className={classes.root}
                    onKeyPress={preventSubmit}
                >
                     Dodaj wpis
                </Button>
            </ThemeProvider>
        </div>
    )

}

export  default TodoCreator;