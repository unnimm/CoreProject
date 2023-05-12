import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Club from './pages/Club';
import Promotion from './pages/Promotion';
import Notice from './pages/Notice';

function App() {
  return (
    <>
      {/* 네비게이션 바*/}
      <div>
        <div className={"w-[1434px] bg-white bg-opacity-90 top-0 fixed"}>
          <header className={"flex"}>
            <div className={"p-3 text-main font-bold"}>동아리 로고</div>
            <div>
              <nav className="flex sm:justify-start  space-x-[80px] text-sm p-2">
                {[
                  ["홈", "/home"],
                  ["동아리", "/clue"],
                  ["홍보게시판", "/promotion"],
                  ["공지사항", "/notice"],
                ].map(([title, url]) => (
                  <a
                    href={url}
                    className="rounded-lg px-3 py-2 text-textColor font-medium hover:bg-slate-100 hover:text-slate-900"
                    onClick={() => {}}
                  >
                    {title}
                  </a>
                ))}
              </nav>
            </div>
          </header>
        </div>
      </div>

      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/detail"} element={<Detail />}></Route>
        <Route path={"/club"} element={<Club/>}></Route>
        <Route path={"/notice"} element={<Notice/>}></Route>
        <Route path={"/promotion"} element={<Promotion/>}></Route>
      </Routes>
    </>
  );
}




export default App;


