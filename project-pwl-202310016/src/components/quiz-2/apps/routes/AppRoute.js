import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layouts from '../../layouts/Layouts'
import Signin from '../../modules/components/Auth/Signin'
import BasePages from './BasePages'
import Quiz from '../../modules/components/Quiz/Quiz'
import Home from '../../modules/components/Homes/Home'
import Explore from '../../modules/components/Explore/Explore'
import Messages from '../../modules/components/Messages/Messages'
import Feeds from '../../modules/components/Explore/widgets/Feeds'
import Reels from '../../modules/components/Explore/widgets/Reels'
import FYP from '../../modules/components/Explore/widgets/FYP'
import Profiles from '../../modules/components/Profiles/Profiles'
import Error404 from '../../layouts/components/error-404/Error404'
import MasterData from '../../modules/components/Master-Data/MasterData'
import { Products } from '../../modules/components/Master-Data/modules/products'
import { Users } from '../../modules/components/Master-Data/modules/users/Users'

export default function AppRoute() {
    return (
        <Routes>
            {/* <Route index element={<Navigate to='/home' />} />
            <Route path="signin" element={<Signin />} />
            <Route path="*" element={<Layouts> <BasePages /> </Layouts>} /> */}
            <Route index element={<Navigate to= '/quiz' />} />
            <Route path='quiz' element={<Quiz />} />
            <Route path="*" element={<Layouts> <BasePages /> </Layouts>} />
        </Routes>
    )
}