import React, { useContext, useState,useEffect } from 'react'
import { styled, Box } from '@mui/system';
import TextField from '@mui/material/TextField';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import { ToDoListContext } from '../context/ToDoListContext';
const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    p: 2,
    px: 4,
    pb: 3,
};

const EditTodo = () => {
    const { toggleEditModel, seletedTodo, openEditModel ,updateTodo} = useContext(ToDoListContext)
    const onCloseHandler = () => {
        if (seletedTodo != null) { toggleEditModel(seletedTodo.id) }
    };

    const [todoTitle, settodoTitle] = useState(seletedTodo!==null?seletedTodo.title:null)



    const updateHandler=(e)=>{
        e.preventDefault();
        updateTodo(seletedTodo.id,todoTitle,seletedTodo.finished)
    }

    const userInputHandler = (e) => {
        settodoTitle(e.target.value)
    }
    useEffect(()=>{
        if(seletedTodo!==null){
            settodoTitle(seletedTodo.title);
        }else{
            settodoTitle("");
        }
    },[seletedTodo])
    return (
        <>
            {seletedTodo ? <StyledModal
                aria-labelledby="unstyled-modal-title"
                aria-describedby="unstyled-modal-description"
                open={openEditModel}
                onClose={onCloseHandler}
                BackdropComponent={Backdrop}
            >
                <Box sx={style}>
                    <form>
                        <TextField t autoFocus
                            margin="dense"
                            id="name"
                            label="To Do"               
                            fullWidth
                            onChange={userInputHandler}
                            variant="standard" value={todoTitle} />
                        <button onClick={updateHandler}>Update</button>
                    </form>
                </Box>
            </StyledModal> : <></>}

        </>
    );
}

export default EditTodo
