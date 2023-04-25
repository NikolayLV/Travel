import './App.css';
import Header from "./Components/Header/header";
import Main from "./Components/Main/main";
import {Route, Routes} from "react-router-dom";
import PostsContainer from "./Components/Blog/PostsContainer";
import {useState} from "react";
import Modal from "./Components/Modal/Modal";
import Destination from "./Components/Destination/Destination";
import state from "./Data/Data";


function App(props) {
    const [modalActive, setModalActive] = useState(false);
    return (
        <div className="App">
            <Header active={modalActive} setActive={setModalActive}/>
            <Modal active={modalActive} setActive={setModalActive}/>
            <Routes>
                <Route path='/' element={<Main locations={state.locations}/>}/>
                <Route path='/posts' element={<PostsContainer store={props.store} dispatch={props.dispatch}/>}/>
                <Route path='/destination' element={<Destination places={state.places}/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
