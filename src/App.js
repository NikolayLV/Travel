import './App.css';
import Header from "./Components/Header/header";
import Main from "./Components/Main/main";
import {Route, Routes} from "react-router-dom";
import PostsContainer from "./Components/Blog/PostsContainer";
import {useState} from "react";
import Modal from "./Components/Modal/Modal";
import Destination from "./Components/Destination/Destination";
import state from "./Data/Data";
import Footer from "./Components/Footer/footer";
import Stories from "./Components/Stories/Stories";
import Slider from "../src/Components/Slider/Slider";


function App(props) {
    const [modalActive, setModalActive] = useState(false);
    return (
        <div className="App">
            <Header active={modalActive} setActive={setModalActive}/>
            <Modal active={modalActive} setActive={setModalActive}/>
            <Routes>
                <Route path='/' element={<Main articles={state.articles} locations={state.locations}/>}/>
                <Route path='/posts' element={<PostsContainer store={props.store} dispatch={props.dispatch}/>}/>
                <Route path='/destination' element={<Destination places={state.places}/>}></Route>
                <Route path='/stories' element={<Stories articles={state.articles}/>}></Route>
                <Route path="/" element={<Slider articles={state.articles}/>}></Route>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
