import { Home as HomeIcon, Search, Library, Plus, ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <div className='h-screen flex flex-col bg-zinc-950 py-3'>
      <div className='flex flex-1'>
        <aside className='w-78 bg-zinc-950 p-2 flex flex-col gap-2'>
          <div className="w-72 h-24 bg-zinc-900 rounded-xl flex-col align-middle">
            <nav>
              <a href="" className='flex items-center gap-2 text-sm font-semibold text-zinc-200 p-3 px-5'>
                <HomeIcon />
                Home
              </a>
              <a href="" className='flex items-center gap-2 text-sm font-semibold text-zinc-200 p-3 px-5'>
                <Search />
                Search
              </a>
            </nav>
          </div>
          <div className="w-72 h-24 bg-zinc-900 rounded-xl flex-col align-bottom">
            <nav>
              <a href="" className='w-72 flex items-center gap-2 text-sm font-semibold text-zinc-200 p-3 px-5'>
                <Library />
                Your Library
                <div className='flex'>
                  <Plus />
                  <ArrowRight />
                </div>
                
              </a>
            </nav>
          </div>
        </aside>
        <main className='flex-1 bg-slate-700/30 rounded-xl p-2 py-3 text-zinc-200'></main>
      </div>
      <footer className=' bg-zinc-800 border-t border-zinc-700 px-6'>
        Footer
      </footer>
    </div>
  );
}
