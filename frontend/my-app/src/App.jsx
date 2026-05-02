import React from 'react'
import LandingPage from './pages/landingPage'
import { Routes, Route } from "react-router-dom";
import Demo from './components/landing/Demo';
import SavedReplies from './pages/SavedReplies';
function App() {
  return <>
   <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/GenerateReply" element={<Demo/>} />
      <Route path="/SavedReplies" element={<SavedReplies/>} />

    </Routes>
  </>
}

export default App
