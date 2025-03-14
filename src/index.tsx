import { root } from '@lynx-js/react';
import { MemoryRouter, Routes, Route } from 'react-router';
import Home from './Pages/Home.tsx';
import Explore from './Pages/Explore.tsx';
import Profile from './Pages/Profile.tsx';

root.render(
  <MemoryRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </MemoryRouter>,
);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}