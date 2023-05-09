import { Home as HomeIcon, Search, Library, Plus, ArrowRight, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Home() {
  return (
    <div className='h-screen flex flex-col bg-zinc-950 py-2'>
      <header className='bg-zinc-950 px-6 flex gap-1 py-3'>
          <div className='w-1 h-1 rounded-full bg-zinc-50'></div>
          <div className='w-1 h-1 rounded-full bg-zinc-50'></div>
          <div className='w-1 h-1 rounded-full bg-zinc-50'></div>
      </header>
      <div className='flex flex-1'>
        <aside className='w-78 bg-zinc-950 p-2 flex flex-col gap-2 py-0'>
          <div className="w-72 h-28 py-2 bg-zinc-900 rounded-xl flex-col align-middle">
            <nav>
              <a href="#" className='flex items-center gap-3 text-sm font-semibold text-zinc-400 p-3 px-5 hover:text-zinc-50'>
                <HomeIcon />
                Home
              </a>
              <a href="#" className='flex items-center gap-3 text-sm font-semibold text-zinc-400 p-3 px-5 hover:text-zinc-50'>
                <Search />
                Search
              </a>
            </nav>
          </div>
          <div className="w-72 h-56 bg-zinc-900 rounded-xl px-3 flex-col align-bottom">
              <div className='flex w-72 items-center align-left justify-start'>
                <button className='flex items-center gap-2 px-3 text-sm font-semibold text-zinc-400 hover:text-zinc-50 transition-colors'>
                <Library />
                Your Library
                </button>
                <button className='pl-20 first-letter:flex p-3 px-1 text-zinc-400 hover:text-zinc-50 transition-colors'>
                  <Plus />
                </button>  
                <button className='flex pr-4 text-zinc-400 hover:text-zinc-50 transition-colors'>
                  <ArrowRight />
                </button> 
              </div>
              <div className='flex gap-1 py-2'>
                <button className='w-16 h-6 flex justify-center p-5 py-1 bg-white/10 rounded-xl text-zinc-200 text-xs hover:bg-white/20 transition-colors'>
                  
                  Playlists
      
                </button>
                <div className='w-36 h-6 flex justify-center py-1 bg-white/10 rounded-xl hover:bg-white/20 transition-colors'>
                  <a href='' className='text-zinc-200 text-xs justify-center'>
                  Podcasts e Programas
                  </a>
                </div>
                <div className='w-16 h-6 flex justify-center py-1 bg-white/10 rounded-xl hover:bg-white/20 transition-colors'>
                  <a href='' className='text-zinc-200 text-xs justify-center'>
                  Albums
                  </a>
                </div>
              </div>
              <div className='flex'>
                <div className='w-72 items-center flex'>
                  <button className='px-2 py-2 rounded-full bg-white/0 text-xs font-semibold text-zinc-400 hover:bg-white/20 transition-colors hover:text-zinc-50'>
                  <Search />
                  </button>
                </div>
                <button className='flex text-zinc-400 py-6 text-xs gap-1 items-center hover:text-zinc-50 transition-colors'>
                  Recentes
                  <ChevronDown />
                </button>  
              </div>

          </div>
        </aside>
        <main className='flex-1 bg-slate-700/30 rounded-xl p-2 py-3 text-zinc-200'>
          <div className='items-center gap-4 flex'>
            <button className='pl-1 w-8 h-8 rounded-full bg-black/20 p-1 hover:bg-black/60 transition-colors'>
              <ChevronLeft />
            </button>
            <button className='pl-1.5 w-8 h-8 rounded-full bg-black/20 p-1 hover:bg-black/60 transition-colors'>
              <ChevronRight />
            </button>
          </div>
        </main>
      </div>
      <footer className=' bg-zinc-800 border-t border-zinc-700 px-6'>
        Footer
      </footer>
    </div>
  );
}
