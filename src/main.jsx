import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import ViewCase from './components/ViewCase/ViewCase.jsx'
import SearchRecords from './components/SearchRecords/SearchRecords.jsx'
import GenerateReport from './components/GenerateReport/GenerateReport.jsx'
import ViewAnalytics from './components/ViewAnalytics/ViewAnalytics.jsx'
import AdminUser from './components/AdminUser/AdminUser.jsx'
import Home from './components/Home/Home.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='viewcases' element={<ViewCase/>}/>
      <Route path='searchrecord' element={<SearchRecords/>}/>
      <Route path='generatereport' element={<GenerateReport/>}/>
      <Route path='viewanalytics' element={<ViewAnalytics/>}/> 
      <Route path='adminuser' element={<AdminUser/>}/>
      
      
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
