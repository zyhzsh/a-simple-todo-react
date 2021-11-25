import React, { useContext, useState, useEffect } from 'react'
import { styled, Box } from '@mui/system';
import TextField from '@mui/material/TextField';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import { ToDoListContext } from '../context/ToDoListContext';
import CheckIcon from '@mui/icons-material/Check';
import IconButton from '@mui/material/IconButton';
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
   // background: "#aa4b6b",  /* fallback for old browsers */
   // background: "-webkit-linear-gradient(to right, #3b8d99, #6b6b83, #aa4b6b)",  /* Chrome 10-25, Safari 5.1-6 */
    background: "linear-gradient(to right, #3b8d99, #6b6b83, #aa4b6b)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    border: '2px solid #000',
    p: 2,
    px: 4,
    pb: 3,
};

const EditTodo = () => {
    const { toggleEditModel, seletedTodo, openEditModel, updateTodo } = useContext(ToDoListContext)
    const onCloseHandler = () => {
        if (seletedTodo != null) { toggleEditModel(seletedTodo.id) }
    };

    const [todoTitle, settodoTitle] = useState(seletedTodo !== null ? seletedTodo.title : null)


    const updateHandler = (e) => {
        e.preventDefault();
        updateTodo(seletedTodo.id, todoTitle, seletedTodo.finished)
    }

    const userInputHandler = (e) => {
        settodoTitle(e.target.value)
    }
    useEffect(() => {
        if (seletedTodo !== null) {
            settodoTitle(seletedTodo.title);
        } else {
            settodoTitle("");
        }
    }, [seletedTodo])
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
                        <TextField  autoFocus
                            margin="dense"                
                            onChange={userInputHandler}
                            variant="standard" value={todoTitle} />
                        <IconButton onClick={updateHandler}><CheckIcon/></IconButton>
                    </form>
                </Box>
            </StyledModal> : <></>}

        </>
    );
}

export default EditTodo
